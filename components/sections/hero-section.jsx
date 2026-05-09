"use client"
import { Safari } from "@/components/ui/safari"
import HeroButton from "@/components/ui/herobutton"
import RotatingText from "@/components/ui/rotating-text"
import SafariMarquee from "@/components/ui/safari-marquee"
import Text3DFlip from "@/components/ui/text-3d-flip"
import { MorphingText } from "@/components/ui/morphing-text"

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-animate-3 { animation: fadeUp 0.6s ease 0.2s both; }
        .hero-animate-4 { animation: fadeUp 0.6s ease 0.3s both; }
        .safari-float   { animation: fadeUp 0.8s ease 0.4s both; }
      `}</style>

      {/* BLUE SECTION */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
      >
        {/* Text content */}
        <div
          className="relative pt-30 pb-12 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-5"
          style={{ zIndex: 20 }}
        >
          <span
  className="inline-flex items-center justify-center gap-0 font-bold tracking-tighter text-white text-8xl md:text-8xl"
  style={{ fontFamily: "Inter, sans-serif" }}
>

  <span className="inline-flex items-center justify-center min-w-[5ch]">
    <MorphingText className="font-bricolage" texts={["Built to Lead", "Built to Inspire", "Built to Exalt"]} />
  </span>
</span>
           {/*} 
            Built to
            <span className="inline-block min-w-[0px]">
              <RotatingText
                texts={["Lead", "Inspire", "Exalt"]}
                splitBy="characters"
                staggerFrom="last"
                staggerDuration={0.04}
                rotationInterval={2600}
                auto
                loop
                animatePresenceMode="wait"
                mainClassName="tracking-tighter"
              />
            </span>
          </span>
            */}
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

        {/* Safari card 
        <div
          className="safari-float relative mx-auto pb-2"
          style={{
            maxWidth: 900,
            paddingLeft: "clamp(16px, 4vw, 48px)",
            paddingRight: "clamp(16px, 4vw, 48px)",
            zIndex: 10,
          }}
        >
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <Safari url="pupascii-2526.com" imageSrc="/group-photo.jpg" />
          </div>
        </div>
        */}

        {/* Marquee — full-bleed, below safari, above gradient */}
        <div className="relative w-full py-0" style={{ zIndex: 0 }}>
          <SafariMarquee />
        </div>

      </div>
    </>
  )
}