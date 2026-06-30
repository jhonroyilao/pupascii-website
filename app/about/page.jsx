"use client"
import About from "@/components/sections/about-preview"
import Navbar from "@/components/custom/navbar"
import HeroSection from "@/components/sections/hero-section"
import { CinematicFooter } from "@/components/ui/motion-footer"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "motion/react"
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { TextAnimate } from "@/components/ui/text-animate"
import { Highlighter } from "@/components/ui/highlighter"
import { CometCard } from "@/components/ui/comet-card"
import Button from "@/components/ui/button"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import { TextScramble } from "@/components/ui/text-scramble"
import CircularGallery from "@/components/ui/circulargallery"
import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight } from "lucide-react"
import { Ripple } from "@/components/ui/ripple"
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { Cards } from "@/components/ui/cards"; 
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import CommunityCTA from "@/components/sections/about-cta.jsx"
import { useState, useEffect } from "react" 
import Grainient from "@/components/Grainient" 
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils";
import { Hero as WisprFlowTextBackground } from "@/components/ui/wispr-flow-text-animation";



function ScrollTextScramble({ text }) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  })

  return (
    <span ref={ref}>
      {inView ? <TextScramble text={text} /> : <span>{text}</span>}
    </span>
  )
}

const hopper = [
   {
    image: "/hopper1.png",
    className: "absolute top-5 left-[80%] rotate-[-4deg] border border-xl border-blue-500",
  },
  {
    image: "/hopper2.png",
    className: "absolute top-5 left-[80%] rotate-[-4deg] border border-xl border-blue-500",
  },
  {
    image: "/hoppersticker1.png",
    className: "absolute top-5 left-[80%] rotate-[-4deg] border border-xl border-blue-500",
  },
  {
    image: "/hoppersticker2.png",
    className: "absolute top-5 left-[80%] rotate-[-4deg] border border-xl border-blue-500",
  },
  {
    image: "/hoppersticker3.png",
    className: "absolute top-5 left-[80%] rotate-[-4deg] border border-xl border-blue-500",
  },
  {
    image: "/hoppersticker4.png",
    className: "absolute top-5 left-[80%] rotate-[-4deg] border border-xl border-blue-500",
  },
]

function HighlightOnScroll({ children, color, action = "highlight" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <span ref={ref}>
      <Highlighter action={action} color={color} animate={inView}>
        {children}
      </Highlighter>
    </span>
  )
}

export default function AboutPage() {

  const [galleryBend, setGalleryBend] = useState(0.2)

  useEffect(() => {
    const handleResize = () => {
      // If the window is larger than a standard tablet breakpoint (768px), increase the bend
      if (window.innerWidth >= 768) {
        setGalleryBend(0.5) // Desktop bend
      } else {
        setGalleryBend(0.15) // Mobile bend (flatter curves look better on narrow viewport screens)
      }
    }

    // Call initially to catch the component mount dimension
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
   <main className="min-h-screen">
      <Navbar />

      <div
          className="relative w-full overflow-hidden mb-10 rounded-b-3xl">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <Grainient
      color1="#3B82F6"
      color2="#0062E4"
      color3="#3DCBFF"
      timeSpeed={0.35}
      colorBalance={0}
      warpStrength={2.75}
      warpFrequency={9.3}
      warpSpeed={5.5}
      warpAmplitude={50}
      blendAngle={0}
      blendSoftness={0.34}
      rotationAmount={740}
      noiseScale={0}
      grainAmount={0}
      grainScale={0.2}
      grainAnimated={false}
      contrast={1.5}
      gamma={1}
      saturation={1}
      centerX={0}
      centerY={0}
      zoom={0.9}
    />
  </div>

        <SmoothCursor/>

     
        <div className="relative z-30 max-w-5xl mx-auto px-6 pt-24 text-center flex flex-col items-center gap-2">
          
        
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="inline-flex items-center justify-center font-bold tracking-tighter text-white heading-1"
          >
            Who is ASCII?
          </TextAnimate>

          <p className="text-white/80 page-description">
            Founded in 2011, the PUP Association of Students for Computer Intelligence Integration (PUP ASCII) was established as the official academic organization of the Department of Computer Science to promote technological excellence while integrating culture and the arts.
          </p>
        </div>

<div className="w-full h-[700px] relative z-10 circular-gallery -mt-20">
            <CircularGallery 
            items={[
              { image: "/gallery/3.png", text: "" },
              { image: "/gallery/4.png", text: "" },
              { image: "/gallery/1.png", text: "" },
              { image: "/gallery/2.png", text: "" },
              { image: "/gallery/5.png", text: "" },
              { image: "/gallery/6.png", text: "" },
              { image: "/gallery/7.png", text: "" },
            ]}
            bend={galleryBend}
            textColor="#ffffff"
            borderRadius={0.06}
            scrollSpeed={0.5}
            scrollEase={0.08}
          />
        </div>


<img
  src="/svg/left.svg"
  alt="Left Folder"
  className="absolute left-[-3rem] bottom-[-3rem] w-[14rem] md:left-[-6rem] md:bottom-[-6rem] md:w-[32rem] z-20 pointer-events-none select-none"
/>


<img
  src="/svg/right.svg"
  alt="Right Folder"
  className="absolute right-[-3rem] bottom-[-3rem] w-[16rem] md:right-[-6rem] md:bottom-[-6rem] md:w-[32rem] z-20 pointer-events-none select-none"
/>

        </div>

<section className="relative w-full bg-white pt-20 pb-24 overflow-hidden">

  {/* Curved looping text — sits behind everything */}
  <div className="absolute inset-0 z-0">
    <WisprFlowTextBackground
      fontSize={14}
      textOpacity={0.25}
      textColor="#0062E4"
      speed={30}
    />
  </div>

  {/* Dot pattern on top of the text, faded at the top via mask */}
  <div className="absolute inset-0 z-[1]">
    <DotPattern
      width={20}
      height={20}
      cx={1}
      cy={1}
      cr={1}
      className={cn(
        "[mask-image:linear-gradient(to_top,white_40%,transparent_100%)]"
      )}
    />
  </div>

  <div className="relative z-10 text-center mb-4 px-6">
    <p className="section-label">/our story</p>
    <TextAnimate
      animation="blurInUp"
      by="word"
      className="section-title"
      style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
    >
      where we started
    </TextAnimate>
    <p className="text-gray-600 mx-auto mt-4 max-w-2xl text-sm md:text-base">
      A short visual history of how ASCII grew, what we built, and where we are headed.
    </p>
  </div>

  <div className="relative z-10">
    <Cards />
  </div>
</section>


    {/*Mission and Vision*/}   
    <div className=" text-center w-full mt-24 mb-20">
      
      <TextAnimate
                animation="blurInUp"
                by="word"
                className="section-title"
                style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                mission & vision
      </TextAnimate>
      
      <div className="text-gray-600 pt-2">The core ideals that shape PUP ASCII’s direction and community.</div>
    </div>
    
    {/*Mission*/}   
    <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — group photo (On mobile this is top, on desktop it stays left) */}
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src="/mv/mission.png"
              alt="PUP ASCII members"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — tagline + text */}
          <div className="space-y-6">
            <div
              className="font-bold leading-tight"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              <p className="section-label">
                /what we do
              </p>
              <TextAnimate animation="blurInUp" by="word" className="inline text-black">
                our mission
              </TextAnimate>
            </div>

            <p
              className="paragraph text-gray-600 text-justify"
            >
              To give <strong>computer science</strong> newfound respect and
              recognition: disseminate significant and useful information that
              contributes to Computer Science; develop learning and a deeper
              understanding of Computer Science; expand the current knowledge base of
              every student and promote academic excellence; appreciate culture and
              arts through various ways of indoctrination of computer-related studies
              and subjects.
            </p>
          </div>
        </div>
      </div>
      
      {/*Vision*/}   
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side on Desktop, but sits BELOW the image on Mobile */}
          {/* Added 'lg:order-first' so it flips cleanly to the left side on desktop */}
          <div className="space-y-6 order-last lg:order-first">
            <div
              className="font-bold leading-tight"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              <p
                className="section-label"
              >
                /what we aspire to be
              </p>

              <TextAnimate animation="blurInUp" by="word" className="inline text-black">
                our vision
              </TextAnimate>
            </div>

            <p
              className="paragraph text-gray-600 text-justify"
            >
              An organization focusing on the general interest of computer education and excellence while promoting Computer Science as a frontier for creativity and innovation.
            </p>

            <ShinyButton href="/committee" icon={<ArrowRight size={18} />}>
              get to know us
            </ShinyButton>
          </div>

          {/* Right Side on Desktop, but sits ON TOP on Mobile */}
          {/* Added 'lg:order-last' to send the picture over to the right side on wide screens */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-first lg:order-last">
            <Image
              src="/mv/vision.png"
              alt="PUP ASCII members"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

     {/* ── MEET HOPPER WITH GRAINIENT BACKGROUND ── */}
      <section className="relative w-full py-20 px-6 mt-10 rounded-[50px] overflow-hidden">
        
        {/* Background Grainient Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Grainient
            color1="#3B82F6"
            color2="#0062E4"
            color3="#3DCBFF"
            timeSpeed={0.35}
            colorBalance={0}
            warpStrength={2.75}
            warpFrequency={9.3}
            warpSpeed={5.5}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.34}
            rotationAmount={740}
            noiseScale={0}
            grainAmount={0}
            grainScale={0.2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        {/* Foreground Content Container */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              
            {/*Main Hopper Image*/}
            <div className="w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 relative">
               <CometCard className="w-full">
                 <div className="relative w-full aspect-[592/639] rounded-[20px] border-[5px] border-white overflow-hidden bg-white shadow-xl">
                    <Image
                      src="/hopper-main.png" 
                      alt="Hopper Mascot"
                      fill
                      className="object-cover"
                    />
                 </div>
               </CometCard>
            </div>

            {/* Content Info */}
            <div className="space-y-2 text-white">
              <p className="text-sm font-medium text-white/90 font-inter tracking-widest uppercase">
                / OFFICIAL MASCOT
              </p>

              <TextAnimate
                animation="blurInUp"
                by="word"
                className="font-bold leading-tight"
                style={{
                  fontFamily: "Instrument Sans, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                meet hopper !
              </TextAnimate>

              <p
                className="text-[15px] leading-relaxed text-justify opacity-95"
                style={{ fontFamily: "Inter, sans-serif"}}
              >
                <strong>Hopper</strong> is the lovable main mascot of the Department of Computer Science and ASCII, a curious little digital creature inspired by a mix of a ladybug and a computer mouse. They represent the playful side of tech: always curious, always exploring, and always a bit too invested in whatever is happening inside the system. Hopper brings energy and charm to the world of coding, turning something complex into something approachable and fun.
                <br /><br />
                With a personality that's both lively and thoughtful, Hopper embodies the spirit of students who keep trying, keep iterating, and keep debugging even when things get tough. They're a symbol of curiosity in motion, a reminder that behind every line of code is creativity, persistence, and a bit of chaos that somehow still works out in the end.
              </p>
            </div>
          </div>

          {/* Sticker Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-12">
            {hopper.slice(2).map((sticker, index) => (
              <CardContainer 
                key={index} 
                className="w-full h-full" 
                containerClassName="py-0 w-full h-full"
              >
                <CardBody className="relative w-full h-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-white">
                    <CardItem translateZ="50" className="w-full h-full relative">
                      <Image 
                        src={sticker.image} 
                        alt={`Hopper sticker ${index + 1}`} 
                        fill 
                        className="object-cover"
                      />
                    </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
<CommunityCTA/>

      {/*LET'S CREATE, CONNECT, AND BUILD
      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col items-start gap-[40px]">
              <h2
                className="font-bold text-black leading-tight max-w-md"
                style={{
                  fontFamily: "Instrument Sans, sans-serif",
                  fontSize: "clamp(3rem, 5vw, 72px)",
                  letterSpacing: "-0.02em"
                }}
              >
                Let’s create, connect, and build.
              </h2>
              
              <p
                className="text-gray-500 text-[15px] leading-relaxed max-w-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                ASCII is open to partnerships that spark innovation, collaboration, and impact in the tech community. Whether it’s events, projects, or shared initiatives, we’re ready to create and grow with you.
              </p>

              <button className="flex flex-row justify-center items-center w-[215px] px-[37px] py-[10px] gap-[5px] bg-white rounded-[10px] border border-[#3DCBFF] shadow-[0px_0px_69.6px_rgba(0,0,0,0.09)] transition-transform hover:-translate-y-1">
                <span
                  className="font-medium text-[18px] leading-[28px] whitespace-nowrap"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    background: "radial-gradient(136.74% 156.21% at 17.55% 30.27%, #3DCBFF 0%, #0062E4 50%, #063A80 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent" 
                }}
                >
                  reach out to us
                </span>
               <Image 
                  src="/svg/asciiarrow.svg" 
                  alt="Arrow Right" 
                  width={20} 
                  height={20} 
                  className="object-contain"
                />
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square">
                 <Image
                   src="/ascii-envelope.png"
                   alt="ASCII Partnership Envelope"
                   fill
                   className="object-contain drop-shadow-xl"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
*/}
      
      <CinematicFooter/>
    </main>
  )
}
