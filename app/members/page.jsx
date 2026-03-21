"use client"

import { useState } from "react"
export default function MembersPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Members (skeleton)</h1>
    </main>
  )
}
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Users } from "lucide-react"

const members = [
  { name: "Andres Bonifacio", year: "4th Year", department: "Academics" },
  { name: "Emilio Aguinaldo", year: "3rd Year", department: "Technical" },
  { name: "Apolinario Mabini", year: "4th Year", department: "Events" },
  { name: "Gregoria de Jesus", year: "2nd Year", department: "Creatives" },
  { name: "Melchora Aquino", year: "3rd Year", department: "Documentation" },
  { name: "Antonio Luna", year: "4th Year", department: "Technical" },
  { name: "Juan Luna", year: "2nd Year", department: "Creatives" },
  { name: "Jose Palma", year: "3rd Year", department: "Academics" },
  { name: "Marcelo del Pilar", year: "4th Year", department: "Events" },
  { name: "Graciano Lopez Jaena", year: "2nd Year", department: "Documentation" },
  { name: "Tandang Sora", year: "3rd Year", department: "Logistics" },
  { name: "Diego Silang", year: "4th Year", department: "Technical" },
]

const departments = ["All", "Academics", "Technical", "Events", "Creatives", "Documentation", "Logistics"]

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = selectedDepartment === "All" || member.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Members
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who make up our vibrant community of future 
              technology leaders and innovators.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {departments.map(dept => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredMembers.length} members
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMembers.map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.year}</p>
                        <Badge variant="outline" className="mt-1 text-xs">{member.department}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">No members found</h3>
                <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
