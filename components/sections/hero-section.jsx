"use client"
import About from "@/components/sections/about" 
import { Safari } from "@/components/ui/safari"
import PixelBlast from "@/components/ui/pixelblast"
import HeroButton from "@/components/ui/herobutton"
import { TextScramble } from "@/components/ui/text-scramble"
import { Boxes } from "@/components/ui/background-boxes"
import { useScreenSize } from "@/hooks/use-screen-size"

export default function Hero() {
  const screenSize = useScreenSize()

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-animate-1 { animation: fadeUp 0.6s ease 0.0s both; }
        .hero-animate-2 { animation: fadeUp 0.6s ease 0.1s both; }
        .hero-animate-3 { animation: fadeUp 0.6s ease 0.2s both; }
        .hero-animate-4 { animation: fadeUp 0.6s ease 0.3s both; }
        .safari-float   { animation: fadeUp 0.8s ease 0.4s both; }
      `}</style>

      <div className="relative">

        {/* BLUE SECTION */}
        <div
          className="relative pt-24 pb-80"
          style={{ background: "linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
        >
          {/* Background boxes  <Boxes /> */}
         {/*} <div style={{ position: "absolute", top: 5, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
            <PixelBlast
              variant="circle" pixelSize={6} color="#ffffff"
              patternScale={7.5} patternDensity={0.1} pixelSizeJitter={0.6}
              enableRipples={false} liquid liquidStrength={0.12}
              liquidRadius={1.2} liquidWobbleSpeed={5} speed={0.6}
              edgeFade={0.25} transparent
            />
          </div>*/}


          

          {/* Text content */}
          <div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-5" style={{ zIndex: 1 }}>
            <h1
              className="hero-animate-2 font-normal text-white leading-tight tracking-tighter"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Hello there! We are<br />
              <TextScramble text="PUP ASCII" className="font-bold" />
            </h1>

            <p className="hero-animate-3 text-white/80 text-[15px] tracking-tight max-w-md"
              style={{ fontFamily: "Inter, sans-serif" }}>
              The official academic organization of the Department of Computer Science
              at the Polytechnic University of the Philippines.
            </p>

            <div className="hero-animate-4">
              <HeroButton href="/about" label="LEARN MORE ABOUT US" />
            </div>
          </div>
        </div>

        {/* WHITE SECTION */}
        <div className="bg-white w-full" style={{ paddingTop: "clamp(200px, 35vw, 520px)" }} />

        {/* SAFARI — overlapping seam */}
        <div
          className="safari-float"
          style={{
            position: "absolute",
            bottom: "20%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            paddingLeft: "clamp(16px, 4vw, 48px)",
            paddingRight: "clamp(16px, 4vw, 48px)",
            zIndex: 10,
          }}
        >
          <div style={{ width: "100%", maxWidth: "clamp(320px, 80vw, 900px)" }}>
            <Safari url="pupascii-2526.com" imageSrc="/group-photo.jpg" />
          </div>


        </div>

      </div>
      
    </>
  )
}