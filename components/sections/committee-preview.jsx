import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const committeeMembers = [
  { name: "Juan Dela Cruz", position: "President", department: "Executive" },
  { name: "Maria Santos", position: "Vice President", department: "Executive" },
  { name: "Jose Rizal", position: "Secretary", department: "Executive" },
  { name: "Ana Garcia", position: "Treasurer", department: "Executive" },
  { name: "Carlos Reyes", position: "Auditor", department: "Executive" },
  { name: "Sofia Mendoza", position: "P.R.O.", department: "Executive" },
]

export function CommitteePreview() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leadership & Organization
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the dedicated officers and department heads steering ASCII towards excellence.
          </p>
        </div>

        {/* Leadership image + text (single preview layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <img
              src="/placeholder.jpg"
              alt="ASCII leadership team"
              className="w-full h-72 md:h-96 object-cover rounded-xl border border-border shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              One Team. One Vision.
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Our leadership team and department heads are united in building a strong, supportive,
              and innovative organization. Through collaborative planning and proactive action,
              we deliver impactful programs for all members.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {committeeMembers.slice(0, 6).map((member) => (
                <li key={member.name} className="flex justify-between">
                  <span>{member.name}</span>
                  <span className="font-medium text-foreground">{member.position}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/committee">
              View All Committee Members
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
