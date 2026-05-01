"use client"

import { useEffect, useRef } from "react"
import { Effect, EffectComposer, EffectPass, RenderPass } from "postprocessing"
import * as THREE from "three"

const createTouchTexture = () => {
  const size = 64
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  const texture = new THREE.Texture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.generateMipmaps = false
  const trail = []
  let last = null
  const maxAge = 64
  const speed = 1 / maxAge
  let radius = 0.1 * size
  const clear = () => { ctx.fillStyle = "black"; ctx.fillRect(0, 0, canvas.width, canvas.height) }
  const drawPoint = p => {
    const pos = { x: p.x * size, y: (1 - p.y) * size }
    let intensity = 1
    const easeOutSine = t => Math.sin((t * Math.PI) / 2)
    const easeOutQuad = t => -t * (t - 2)
    if (p.age < maxAge * 0.3) intensity = easeOutSine(p.age / (maxAge * 0.3))
    else intensity = easeOutQuad(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0
    intensity *= p.force
    const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`
    const offset = size * 5
    ctx.shadowOffsetX = offset; ctx.shadowOffsetY = offset
    ctx.shadowBlur = radius
    ctx.shadowColor = `rgba(${color},${0.22 * intensity})`
    ctx.beginPath(); ctx.fillStyle = "rgba(255,0,0,1)"
    ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2)
    ctx.fill()
  }
  const addTouch = norm => {
    let force = 0, vx = 0, vy = 0
    if (last) {
      const dx = norm.x - last.x, dy = norm.y - last.y
      if (dx === 0 && dy === 0) return
      const d = Math.sqrt(dx * dx + dy * dy)
      vx = dx / (d || 1); vy = dy / (d || 1)
      force = Math.min((dx * dx + dy * dy) * 10000, 1)
    }
    last = { x: norm.x, y: norm.y }
    trail.push({ x: norm.x, y: norm.y, age: 0, force, vx, vy })
  }
  const update = () => {
    clear()
    for (let i = trail.length - 1; i >= 0; i--) {
      const point = trail[i]
      const f = point.force * speed * (1 - point.age / maxAge)
      point.x += point.vx * f; point.y += point.vy * f; point.age++
      if (point.age > maxAge) trail.splice(i, 1)
    }
    trail.forEach(drawPoint)
    texture.needsUpdate = true
  }
  return {
    canvas, texture, addTouch, update,
    set radiusScale(v) { radius = 0.1 * size * v },
    get radiusScale() { return radius / (0.1 * size) },
    size
  }
}

const createLiquidEffect = (texture, opts) => new Effect("LiquidEffect", `
  uniform sampler2D uTexture; uniform float uStrength; uniform float uTime; uniform float uFreq;
  void mainUv(inout vec2 uv) {
    vec4 tex = texture2D(uTexture, uv);
    float vx = tex.r * 2.0 - 1.0; float vy = tex.g * 2.0 - 1.0; float intensity = tex.b;
    float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);
    uv += vec2(vx, vy) * uStrength * intensity * wave;
  }`, {
  uniforms: new Map([
    ["uTexture", new THREE.Uniform(texture)],
    ["uStrength", new THREE.Uniform(opts?.strength ?? 0.025)],
    ["uTime", new THREE.Uniform(0)],
    ["uFreq", new THREE.Uniform(opts?.freq ?? 4.5)]
  ])
})

const SHAPE_MAP = { square: 0, circle: 1, triangle: 2, diamond: 3 }
const VERTEX_SRC = `void main() { gl_Position = vec4(position, 1.0); }`
const FRAGMENT_SRC = `
precision highp float;
uniform vec3 uColor; uniform vec2 uResolution; uniform float uTime; uniform float uPixelSize;
uniform float uScale; uniform float uDensity; uniform float uPixelJitter; uniform int uEnableRipples;
uniform float uRippleSpeed; uniform float uRippleThickness; uniform float uRippleIntensity; uniform float uEdgeFade;
uniform int uShapeType;
const int SHAPE_SQUARE=0,SHAPE_CIRCLE=1,SHAPE_TRIANGLE=2,SHAPE_DIAMOND=3,MAX_CLICKS=10;
uniform vec2 uClickPos[10]; uniform float uClickTimes[10];
out vec4 fragColor;
float Bayer2(vec2 a){a=floor(a);return fract(a.x/2.+a.y*a.y*.75);}
#define Bayer4(a)(Bayer2(.5*(a))*0.25+Bayer2(a))
#define Bayer8(a)(Bayer4(.5*(a))*0.25+Bayer2(a))
float hash11(float n){return fract(sin(n)*43758.5453);}
float vnoise(vec3 p){vec3 ip=floor(p),fp=fract(p);float n000=hash11(dot(ip+vec3(0,0,0),vec3(1,57,113))),n100=hash11(dot(ip+vec3(1,0,0),vec3(1,57,113))),n010=hash11(dot(ip+vec3(0,1,0),vec3(1,57,113))),n110=hash11(dot(ip+vec3(1,1,0),vec3(1,57,113))),n001=hash11(dot(ip+vec3(0,0,1),vec3(1,57,113))),n101=hash11(dot(ip+vec3(1,0,1),vec3(1,57,113))),n011=hash11(dot(ip+vec3(0,1,1),vec3(1,57,113))),n111=hash11(dot(ip+vec3(1,1,1),vec3(1,57,113)));vec3 w=fp*fp*fp*(fp*(fp*6.-15.)+10.);float x00=mix(n000,n100,w.x),x10=mix(n010,n110,w.x),x01=mix(n001,n101,w.x),x11=mix(n011,n111,w.x),y0=mix(x00,x10,w.y),y1=mix(x01,x11,w.y);return mix(y0,y1,w.z)*2.-1.;}
float fbm2(vec2 uv,float t){vec3 p=vec3(uv*uScale,t);float amp=1.,freq=1.,sum=1.;for(int i=0;i<5;++i){sum+=amp*vnoise(p*freq);freq*=1.25;amp*=1.;}return sum*.5+.5;}
float maskCircle(vec2 p,float cov){float r=sqrt(cov)*.25,d=length(p-.5)-r,aa=.5*fwidth(d);return cov*(1.-smoothstep(-aa,aa,d*2.));}
float maskTriangle(vec2 p,vec2 id,float cov){bool flip=mod(id.x+id.y,2.)>.5;if(flip)p.x=1.-p.x;float r=sqrt(cov),d=p.y-r*(1.-p.x),aa=fwidth(d);return cov*clamp(.5-d/aa,0.,1.);}
float maskDiamond(vec2 p,float cov){return step(abs(p.x-.49)+abs(p.y-.49),sqrt(cov)*.564);}
void main(){
  float pixelSize=uPixelSize;
  vec2 fragCoord=gl_FragCoord.xy-uResolution*.5;
  float ar=uResolution.x/uResolution.y;
  vec2 pixelId=floor(fragCoord/pixelSize),pixelUV=fract(fragCoord/pixelSize);
  float cps=8.*pixelSize;
  vec2 cellId=floor(fragCoord/cps),uv=cellId*cps/uResolution*vec2(ar,1.);
  float base=fbm2(uv,uTime*.05)*.5-.65;
  float feed=base+(uDensity-.5)*.3;
  if(uEnableRipples==1){for(int i=0;i<10;++i){vec2 pos=uClickPos[i];if(pos.x<0.)continue;vec2 cuv=((pos-uResolution*.5-cps*.5)/uResolution)*vec2(ar,1.);float t=max(uTime-uClickTimes[i],0.),r=distance(uv,cuv),waveR=uRippleSpeed*t,ring=exp(-pow((r-waveR)/uRippleThickness,2.));feed=max(feed,ring*exp(-1.*t)*exp(-10.*r)*uRippleIntensity);}}
  float bayer=Bayer8(fragCoord/uPixelSize)-.5,bw=step(.5,feed+bayer);
  float h=fract(sin(dot(floor(fragCoord/uPixelSize),vec2(127.1,311.7)))*43758.5453);
  float coverage=bw*(1.+(h-.5)*uPixelJitter);
  float M;
  if(uShapeType==SHAPE_CIRCLE)M=maskCircle(pixelUV,coverage);
  else if(uShapeType==SHAPE_TRIANGLE)M=maskTriangle(pixelUV,pixelId,coverage);
  else if(uShapeType==SHAPE_DIAMOND)M=maskDiamond(pixelUV,coverage);
  else M=coverage;
  if(uEdgeFade>0.){vec2 norm=gl_FragCoord.xy/uResolution;float edge=min(min(norm.x,norm.y),min(1.-norm.x,1.-norm.y));M*=smoothstep(0.,uEdgeFade,edge);}
  vec3 c=uColor;vec3 sc=mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(0.0031308,c));
  fragColor=vec4(sc,M);
}`

const MAX_CLICKS = 10

export default function PixelBlast({
  variant="circle", pixelSize=6, color="#ffffff", patternScale=7.5,
  patternDensity=0.1, pixelSizeJitter=0.6, enableRipples=false,
  rippleSpeed=0.4, rippleThickness=0.12, rippleIntensityScale=1.5,
  liquid=true, liquidStrength=0.12, liquidRadius=1.2, liquidWobbleSpeed=5,
  speed=0.6, edgeFade=0.25, transparent=true, noiseAmount=0,
  antialias=true, autoPauseOffscreen=true
}) {
  const containerRef = useRef(null)
  const speedRef = useRef(speed)
  const threeRef = useRef(null)
  const prevConfigRef = useRef(null)

  useEffect(() => { speedRef.current = speed }, [speed])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const cfg = { antialias, liquid, noiseAmount }
    let mustReinit = !threeRef.current
    if (!mustReinit && prevConfigRef.current) {
      for (const k of ["antialias","liquid","noiseAmount"]) {
        if (prevConfigRef.current[k] !== cfg[k]) { mustReinit = true; break }
      }
    }

    if (mustReinit) {
      if (threeRef.current) {
        const t = threeRef.current
        t.resizeObserver?.disconnect(); cancelAnimationFrame(t.raf)
        t.quad?.geometry.dispose(); t.material.dispose()
        t.composer?.dispose(); t.renderer.dispose(); t.renderer.forceContextLoss()
        if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement)
        threeRef.current = null
      }

      const canvas = document.createElement("canvas")
      const renderer = new THREE.WebGLRenderer({ canvas, antialias, alpha: true, powerPreference: "high-performance" })
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      container.appendChild(renderer.domElement)
      if (transparent) renderer.setClearAlpha(0)
      else renderer.setClearColor(0x000000, 1)

      const uniforms = {
        uResolution: { value: new THREE.Vector2(0,0) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1,-1)) },
        uClickTimes: { value: new Float32Array(MAX_CLICKS) },
        uShapeType: { value: SHAPE_MAP[variant] ?? 0 },
        uPixelSize: { value: pixelSize * renderer.getPixelRatio() },
        uScale: { value: patternScale }, uDensity: { value: patternDensity },
        uPixelJitter: { value: pixelSizeJitter },
        uEnableRipples: { value: enableRipples ? 1 : 0 },
        uRippleSpeed: { value: rippleSpeed },
        uRippleThickness: { value: rippleThickness },
        uRippleIntensity: { value: rippleIntensityScale },
        uEdgeFade: { value: edgeFade },
      }

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1)
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SRC, fragmentShader: FRAGMENT_SRC,
        uniforms, transparent: true, depthTest: false, depthWrite: false, glslVersion: THREE.GLSL3
      })
      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2,2), material)
      scene.add(quad)
      const clock = new THREE.Clock()

      const setSize = () => {
        const w = container.clientWidth || 1
        const h = container.clientHeight || 1
        renderer.setSize(w, h, false)
        uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height)
        threeRef.current?.composer?.setSize(renderer.domElement.width, renderer.domElement.height)
        uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio()
      }
      setSize()
      const ro = new ResizeObserver(setSize)
      ro.observe(container)

      const timeOffset = Math.random() * 1000
      let composer, touch, liquidEffect

      if (liquid) {
        touch = createTouchTexture()
        touch.radiusScale = liquidRadius
        composer = new EffectComposer(renderer)
        liquidEffect = createLiquidEffect(touch.texture, { strength: liquidStrength, freq: liquidWobbleSpeed })
        const effectPass = new EffectPass(camera, liquidEffect)
        effectPass.renderToScreen = true
        composer.addPass(new RenderPass(scene, camera))
        composer.addPass(effectPass)
        composer.setSize(renderer.domElement.width, renderer.domElement.height)
      }

      const mapToPixels = e => {
        const rect = renderer.domElement.getBoundingClientRect()
        return {
          fx: (e.clientX - rect.left) * (renderer.domElement.width / rect.width),
          fy: (rect.height - (e.clientY - rect.top)) * (renderer.domElement.height / rect.height),
          w: renderer.domElement.width,
          h: renderer.domElement.height
        }
      }

      renderer.domElement.addEventListener("pointerdown", e => {
        const { fx, fy } = mapToPixels(e)
        const ix = threeRef.current?.clickIx ?? 0
        uniforms.uClickPos.value[ix].set(fx, fy)
        uniforms.uClickTimes.value[ix] = uniforms.uTime.value
        if (threeRef.current) threeRef.current.clickIx = (ix + 1) % MAX_CLICKS
      }, { passive: true })

      renderer.domElement.addEventListener("pointermove", e => {
        if (!touch) return
        const { fx, fy, w, h } = mapToPixels(e)
        touch.addTouch({ x: fx / w, y: fy / h })
      }, { passive: true })

      let raf = 0
      const animate = () => {
        uniforms.uTime.value = timeOffset + clock.getElapsedTime() * speedRef.current
        if (liquidEffect) liquidEffect.uniforms.get("uTime").value = uniforms.uTime.value
        if (composer) { if (touch) touch.update(); composer.render() }
        else renderer.render(scene, camera)
        raf = requestAnimationFrame(animate)
      }
      raf = requestAnimationFrame(animate)

      threeRef.current = {
        renderer, scene, camera, material, clock, clickIx: 0,
        uniforms, resizeObserver: ro, raf, quad, timeOffset, composer, touch, liquidEffect
      }
    } else {
      const t = threeRef.current
      t.uniforms.uShapeType.value = SHAPE_MAP[variant] ?? 0
      t.uniforms.uPixelSize.value = pixelSize * t.renderer.getPixelRatio()
      t.uniforms.uColor.value.set(color)
      t.uniforms.uScale.value = patternScale
      t.uniforms.uDensity.value = patternDensity
      t.uniforms.uPixelJitter.value = pixelSizeJitter
      t.uniforms.uEnableRipples.value = enableRipples ? 1 : 0
      t.uniforms.uRippleIntensity.value = rippleIntensityScale
      t.uniforms.uRippleThickness.value = rippleThickness
      t.uniforms.uRippleSpeed.value = rippleSpeed
      t.uniforms.uEdgeFade.value = edgeFade
    }

    prevConfigRef.current = cfg
    return () => {
      if (!threeRef.current || mustReinit) return
      const t = threeRef.current
      t.resizeObserver?.disconnect(); cancelAnimationFrame(t.raf)
      t.quad?.geometry.dispose(); t.material.dispose()
      t.composer?.dispose(); t.renderer.dispose(); t.renderer.forceContextLoss()
      if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement)
      threeRef.current = null
    }
  }, [antialias, liquid, noiseAmount, pixelSize, patternScale, patternDensity, enableRipples,
    rippleIntensityScale, rippleThickness, rippleSpeed, pixelSizeJitter, edgeFade,
    transparent, liquidStrength, liquidRadius, liquidWobbleSpeed, autoPauseOffscreen, variant, color])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    />
  )
}