"use client"

import { useState } from "react"
export default function EventsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Events (skeleton)</h1>
    </main>
  )
}
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

const events = [
  {
    id: 1,
    title: "ASCII Tech Summit 2024",
    description: "Annual technology conference featuring industry speakers and workshops.",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "PUP Main Auditorium",
    category: "Conference",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Hackathon: Code for Change",
    description: "24-hour coding competition where teams build solutions for social impact.",
    date: "April 5-6, 2024",
    time: "8:00 AM",
    location: "CS Laboratory Building",
    category: "Competition",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Web Development Workshop",
    description: "Hands-on workshop covering modern web development with React and Next.js.",
    date: "March 25, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Room 301, CS Building",
    category: "Workshop",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Alumni Night: Tech Careers",
    description: "Connect with successful ASCII alumni working in top tech companies.",
    date: "February 20, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "PUP Gymnasium",
    category: "Networking",
    status: "past",
  },
  {
    id: 5,
    title: "Introduction to AI & Machine Learning",
    description: "Beginner-friendly seminar exploring the fundamentals of artificial intelligence.",
    date: "January 28, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Online (Zoom)",
    category: "Seminar",
    status: "past",
  },
]

const categories = ["All", "Conference", "Workshop", "Competition", "Seminar", "Networking"]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showPast, setShowPast] = useState(false)

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    const matchesStatus = showPast ? event.status === "past" : event.status === "upcoming"
    return matchesCategory && matchesStatus
  })

  const upcomingCount = events.filter(e => e.status === "upcoming").length
  const pastCount = events.filter(e => e.status === "past").length

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for workshops, seminars, competitions, and networking events.
            </p>

            {/* Toggle */}
            <div className="flex justify-center gap-2 mt-8">
              <Button
                variant={!showPast ? "default" : "outline"}
                onClick={() => setShowPast(false)}
              >
                Upcoming ({upcomingCount})
              </Button>
              <Button
                variant={showPast ? "default" : "outline"}
                onClick={() => setShowPast(true)}
              >
                Past ({pastCount})
              </Button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-4 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {event.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    {event.status === "upcoming" && (
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        Learn More
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">No events found</h3>
                <p className="text-sm text-muted-foreground">Try a different category</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
