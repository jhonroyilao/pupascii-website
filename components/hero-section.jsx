import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          hi there, we are{" "}
          <span className="font-semibold text-primary">PUP ASCII</span>
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          Association of Students for
          <br />
          Computer Intelligence & Integration
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
          Lead • Inspire • Exalt
        </p>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          A dynamic community of Computer Science students dedicated to developing 
          technical excellence, fostering innovation, and creating positive change 
          through collaboration and continuous learning.
        </p>

        {/* CTA Button */}
        <Button asChild size="lg">
          <Link href="#about-preview">
            Learn More
            <ArrowDown className="ml-2 w-4 h-4" />
          </Link>
        </Button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { value: "5+", label: "Committees" },
            { value: "50+", label: "Members" },
            { value: "10+", label: "Events Yearly" },
            { value: "1", label: "Community" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
