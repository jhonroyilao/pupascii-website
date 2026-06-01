"use client"
import About from "@/components/sections/about"
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
  return (
   <main className="min-h-screen">
      <Navbar />

      <div
        className="relative pt-24 pb-80"
        style={{ background: "linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
      >
      </div>

      <About/>

      {/* ── MEET HOPPER ── */}
      <div className="w-full py-20 px-6 mt-10"
      style={{ background: "radial-gradient(156.21% 136.74% at 17.55% 30.27%, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              
            {/*Main Hopper Image*/}
            <div className="w-full mx-auto lg:mx-0 relative">
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

            <div className="space-y-6 text-white">
              <p className="text-sm tracking-widest opacity-90 text-[30px] mb-[-10px]" style={{ fontFamily: "Inter, sans-serif" }}>
                / official mascot
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
                className="text-[15px] leading-relaxed text-justify opacity-90"
                style={{ fontFamily: "Inter, sans-serif"}}
              >
                <strong>Hopper</strong> is the lovable main mascot of the Department of Computer Science and ASCII, a curious little digital creature inspired by a mix of a ladybug and a computer mouse. They represent the playful side of tech: always curious, always exploring, and always a bit too invested in whatever is happening inside the system. Hopper brings energy and charm to the world of coding, turning something complex into something approachable and fun.
                <br /><br />
                With a personality that's both lively and thoughtful, Hopper embodies the spirit of students who keep trying, keep iterating, and keep debugging even when things get tough. They're a symbol of curiosity in motion, a reminder that behind every line of code is creativity, persistence, and a bit of chaos that somehow still works out in the end.
              </p>
            </div>
          </div>

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
      </div>

      {/*LET'S CREATE, CONNECT, AND BUILD*/}
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
      
      <CinematicFooter/>
    </main>
  )
}
