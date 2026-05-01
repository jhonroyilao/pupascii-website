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
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
    
      </div>
    </section>
  )
}
