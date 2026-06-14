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
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack"
import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight } from "lucide-react"

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
  return (
   <main className="min-h-screen">
      <Navbar />

      <div
          className="relative w-full overflow-hidden mb-10 rounded-b-3xl"
          style={{
          background:
            'linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)',
        }}>

        

      {/* Content wrapper */}
        <div className="relative z-30 max-w-5xl mx-auto px-6 pt-24 text-center flex flex-col items-center gap-2">
          
          {/* Who is ASCII */}
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
              { image: "/aboutpic2.png", text: "" },
              { image: "/aboutpic3.png", text: "" },
              { image: "/mission.png", text: "" },
              { image: "/vision.png", text: "" },
              { image: "/pic1.jpg", text: "" },
              { image: "/pic2.jpg", text: "" },
              { image: "/pic3.jpg", text: "" },
            ]}
            bend={0.5}
            textColor="#ffffff"
            borderRadius={0.06}
            scrollSpeed={0.5}
            scrollEase={0.08}
          />
        </div>

        {/* Decorative images (still absolute but adjusted safely) */}
        <img
          src="/svg/left.svg"
          alt="Left Folder"
          className="absolute left-[-6rem] bottom-[-6rem] w-[32rem] z-20 pointer-events-none select-none"
        />

        <img
          src="/svg/right.svg"
          alt="Right Folder"
          className="absolute right-[-6rem] bottom-[-6rem] w-[32rem] z-20 pointer-events-none select-none"
        />

        </div>
      
     
    
    {/*Statistics*/}   
    <div className="mt-8 mx-auto grid w-[90%] max-w-[820px] grid-cols-1 gap-16 md:grid-cols-3">
      <div className="flex h-[110px] flex-col items-center justify-center rounded-[10px] border-4 border-[#0062E4] bg-white md:h-[135px]">
        <h3 className="text-[36px] font-bold leading-none text-[#0062E4] md:text-[60px]">
          <ScrollTextScramble text="4.8K+" />
        </h3>
        <p className="mt-2 text-center text-[12px] font-medium text-gray-600 md:text-[14px]">
          Social Media Followers
        </p>
      </div>

      <div className="flex h-[110px] flex-col items-center justify-center rounded-[10px] border-4 border-[#0062E4] bg-white md:h-[135px]">
        <h3 className="text-[36px] font-bold leading-none text-[#0062E4] md:text-[60px]">
          <ScrollTextScramble text="100+" />
        </h3>
        <p className="mt-2 text-center text-[12px] font-medium text-gray-600 md:text-[14px]">
          Active Members
        </p>
      </div>

      <div className="flex h-[110px] flex-col items-center justify-center rounded-[10px] border-4 border-[#0062E4] bg-white md:h-[135px]">
        <h3 className="text-[36px] font-bold leading-none text-[#0062E4] md:text-[60px]">
          <ScrollTextScramble text="70+" />
        </h3>
        <p className="mt-2 text-center text-[12px] font-medium text-gray-600 md:text-[14px]">
          Events Hosted
        </p>
      </div>
    </div>

    {/*Mission and Vision*/}   
    <div className=" text-center w-full mt-24 mb-20">
      
      <TextAnimate
                animation="slideUp"
                by="line"
                className="section-title"
                style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                mission & vision
      </TextAnimate>
      
      <div className="text-gray-600 pt-2">The core ideals that shape PUP ASCII’s direction and community.</div>
    </div>
    
    {/*Vision*/}   
    <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — group photo */}
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src="/mission.png"
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
        {/* Left — tagline + text */}
        <div className="space-y-6">
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

          {/* Right — group photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/vision.png"
              alt="PUP ASCII members"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── MEET HOPPER ── */}
      <div className="w-full py-20 px-6 mt-10"
      style={{ background: "radial-gradient(156.21% 136.74% at 17.55% 30.27%, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              
            {/*Main Hopper Image*/}
            <div className="w-md mx-auto lg:mx-0 relative">
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
