import { Users, Zap, Award } from "lucide-react"

const pillars = [
  {
    icon: Users,
    title: "Lead",
    description: "We develop student leaders who inspire confidence, drive innovation, and take charge of their futures. Through mentorship and hands-on experience, we cultivate the next generation of tech leaders.",
  },
  {
    icon: Zap,
    title: "Inspire",
    description: "We spark curiosity and passion for technology by creating a vibrant community where ideas flourish. Through workshops, seminars, and collaborative projects, we motivate each member to push boundaries and explore new possibilities.",
  },
  {
    icon: Award,
    title: "Exalt",
    description: "We celebrate excellence and recognize the achievements of our community. By acknowledging hard work and success, we foster a culture of ambition where every member feels valued and empowered.",
  },
]

export function IntroSection() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Stand For
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            PUP ASCII embodies three core principles that guide everything we do
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Who We Are */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Who We Are
          </h3>
          <p className="text-muted-foreground text-lg mb-4">
            PUP ASCII is the official Computer Science organization of Polytechnic University of the Philippines. 
            We bring together passionate students who are eager to learn, collaborate, and make an impact in the 
            tech world. Whether you're just starting your programming journey or already deep into the field, 
            there's a place for you in our community.
          </p>
          <p className="text-muted-foreground text-lg">
            With dedicated committees focused on academics, events, technical skills, creative projects, logistics, 
            and documentation, we provide comprehensive support to help our members succeed both inside and outside 
            the classroom. Join us as we grow leaders, inspire innovators, and celebrate excellence in computer science.
          </p>
        </div>
      </div>
    </section>
  )
}
