import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "ASCII Tech Summit 2024",
    description: "Annual technology conference featuring industry speakers and workshops.",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "PUP Main Auditorium",
    category: "Conference",
  },
  {
    id: 2,
    title: "Hackathon: Code for Change",
    description: "24-hour coding competition where teams build solutions for social impact.",
    date: "April 5-6, 2024",
    time: "8:00 AM",
    location: "CS Laboratory Building",
    category: "Competition",
  },
  {
    id: 3,
    title: "Web Development Workshop",
    description: "Hands-on workshop covering modern web development with React and Next.js.",
    date: "March 25, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Room 301, CS Building",
    category: "Workshop",
  },
]

export function EventsPreview() {
  return (
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay tuned for exciting workshops, competitions, and networking opportunities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {upcomingEvents.map((event) => (
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/events">
              Explore All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
