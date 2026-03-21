import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Eye, ArrowRight, Users, Lightbulb, Trophy } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Community",
    description: "Join a supportive network of tech enthusiasts and future leaders.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Explore cutting-edge technologies and creative solutions.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Strive for academic and professional success in CS.",
  },
]

export function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empowering Future Tech Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            PUP ASCII is dedicated to fostering a community where Computer Science students can thrive, 
            learn, and grow together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">
              To cultivate a dynamic environment where CS students develop technical excellence, 
              leadership skills, and collaborative spirit through innovative programs and activities.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground">
              To be the premier Computer Science organization that produces well-rounded 
              technology professionals who contribute meaningfully to society.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
