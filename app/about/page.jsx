export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">About (skeleton)</h1>
    </main>
  )
}
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and shared ideas.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We embrace lifelong learning and emerging technologies.",
  },
  {
    icon: Code,
    title: "Innovation",
    description: "We encourage creative thinking and novel approaches.",
  },
]

const timeline = [
  {
    year: "Founded",
    title: "The Beginning",
    description: "ASCII was established as the official Computer Science organization of PUP.",
  },
  {
    year: "Growth",
    title: "Expanding Horizons",
    description: "The organization grew to include multiple committees and expanded its reach.",
  },
  {
    year: "Present",
    title: "Thriving Community",
    description: "Today, ASCII continues to empower CS students through various programs.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About ASCII
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Association of Students for Computer Intelligence and Integration is 
            a premier academic organization under the Polytechnic University of the Philippines.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-4">
              PUP ASCII serves as the home for Computer Science students who are passionate 
              about technology, innovation, and making a positive impact in the world.
            </p>
            <p className="text-muted-foreground">
              Through our various committees and programs, we offer opportunities for hands-on 
              experience in areas such as software development, research, creative design, 
              marketing, and event management.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Leadership Overview
          </h2>
          <div className="mx-auto max-w-xl">
            <img
              src="/leadership.jpg"
              alt="ASCII leadership team"
              className="w-full h-72 object-cover rounded-xl mb-6 border border-border shadow-sm"
            />
            <p className="text-base text-muted-foreground">
              The ASCII leadership is composed of dedicated executive officers and department heads 
              who work collaboratively to drive community initiatives and student growth.
              Each term builds on the previous achievements through strategic planning, mentorship,
              and inclusive projects that highlight innovation and service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To cultivate a dynamic and inclusive environment where Computer Science students 
                can develop technical excellence, leadership capabilities, and a collaborative spirit.
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
                To be the premier Computer Science academic organization that produces well-rounded, 
                innovative technology professionals who contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-lg p-6 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Our Journey
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-20 shrink-0 text-sm font-medium text-primary">
                  {item.year}
                </div>
                <div className="bg-card rounded-lg p-4 border border-border flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
