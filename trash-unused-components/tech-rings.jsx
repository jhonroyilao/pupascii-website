// components/ui/tech-rings.jsx
"use client"
import { useEffect, useRef } from "react"

const RINGS = [
  { r: 210, speed: 0.0003,  angle: 0,   icons: ['ccisweek1','ccisweek1','ccisweek1','rccisweek1','ccisweek1','ccisweek1','ccisweek1','ccisweek1'] },
  { r: 140, speed: -0.0005, angle: 1.2, icons: ['ccisweek2','ccisweek2','ccisweek2','ccisweek2','ccisweek2','ccisweek2'] },
  { r:  80, speed: 0.0008,  angle: 0.5, icons: ['ccisweek3','ccisweek3','ringicon3'] },
]

function drawIconBubble(ctx, src, x, y, imageCache) {
  ctx.save()
  ctx.fillStyle = 'rgba(255,255,255,0.07)'
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.roundRect(x - 20, y - 20, 40, 40, 10)
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  if (imageCache[src]) {
    ctx.save()
    ctx.beginPath()
    ctx.roundRect(x - 16, y - 16, 32, 32, 8)
    ctx.clip()
    ctx.drawImage(imageCache[src], x - 16, y - 16, 32, 32)
    ctx.restore()
  }
}

export default function TechRings({ className = "" }) {
  const canvasRef  = useRef(null)
  const rafRef     = useRef(null)
  const ringsRef   = useRef(RINGS.map(r => ({ ...r })))
  const imageCache = useRef({})

  useEffect(() => {
    const uniqueIcons = [...new Set(RINGS.flatMap(r => r.icons))]
    uniqueIcons.forEach(name => {
      const img = new Image()
      img.src = `/${name}.png`
      img.onload = () => { imageCache.current[name] = img }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const W = canvas.width, H = canvas.height
      const cx = W / 2, cy = H / 2
      ctx.clearRect(0, 0, W, H)

      ringsRef.current.forEach(ring => {
        ring.angle += ring.speed

        ctx.save()
        ctx.strokeStyle = 'rgba(255,255,255,0.10)'
        ctx.lineWidth = 1
        ctx.setLineDash([4, 8])
        ctx.beginPath()
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()

        const dotCount = Math.floor(ring.r * 0.38)
        for (let i = 0; i < dotCount; i++) {
          const a = (i / dotCount) * Math.PI * 2
          ctx.fillStyle = 'rgba(255,255,255,0.10)'
          ctx.beginPath()
          ctx.arc(cx + ring.r * Math.cos(a), cy + ring.r * Math.sin(a), 1.2, 0, Math.PI * 2)
          ctx.fill()
        }

        ring.icons.forEach((name, i) => {
          const a = ring.angle + (i / ring.icons.length) * Math.PI * 2
          const ix = cx + ring.r * Math.cos(a)
          const iy = cy + ring.r * Math.sin(a)
          drawIconBubble(ctx, name, ix, iy, imageCache.current)
        })
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  )
}