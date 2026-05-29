import Link from "next/link"
import GradientText from "@/components/ui/gradienttext"

export default function HeroButton({ href = "/about", label = "Learn More About Us" }) {
  return (
    <div className="flex items-center gap-3">

      {/* Main pill button */}
      <Link
        href={href}
        className="flex items-center gap-2 rounded-2xl px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        style={{ background: "white" }}
      >
        <GradientText
          colors={["#3DCBFF", "#0062E4", "#063A80", "#3DCBFF"]}
          animationSpeed={10}
          className="text-sm font-medium tracking-normal uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {label}
        </GradientText>
      </Link>

      {/* Glass arrow button */}
      <Link
        href={href}
        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1.5px solid rgba(255, 255, 255, 0.35)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 13L13 3M13 3H6M13 3V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

    </div>
  )
}