"use client"
import { Safari } from "@/components/ui/safari"
import { TextScramble } from "@/components/ui/text-scramble"
import HeroButton from "@/components/ui/herobutton"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";



export default function Hero() {
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

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        .spin-cw  { animation: spin-slow 60s linear infinite; }
        .spin-ccw { animation: spin-slow-reverse 60s linear infinite; }
      `}</style>

      <div className="relative">

        {/* BLUE SECTION */}
        <div
          className="relative pt-24 pb-90 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
        >

          {/* Text content */}
          <div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-5" style={{ zIndex: 20 }}>
            <h1
              className="hero-animate-2 font-bold text-white leading-tight tracking-tighter"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >

            <TextGenerateEffect words="LEAD. INSPIRE. EXALT." />
                     </h1>

            <p
              className="hero-animate-3 text-white/80 text-[15px] tracking-tight max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Hi there! We are PUP ASCII. The official academic organization of the Department of Computer Science
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