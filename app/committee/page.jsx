import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const committeeMembers = [
  { name: "Cabrera, Chelsea Lauren B.", position: "President", department: "Executive" },
  { name: "Reolada, Gavinn M.", position: "Executive Vice President", department: "Executive" },
  { name: "Biso, Erika P.", position: "Executive Secretary", department: "Executive" },
  { name: "Narte, Ma. Victoria C.", position: "Executive Assistant Secretary", department: "Executive" },
  { name: "Guioguio, Kenneth M.", position: "VP for Finance", department: "Executive" },
  { name: "Lagat, Joemar R.", position: "VP for Audit", department: "Executive" },
  { name: "Ilao, Jhon Roy", position: "VP for Creative Communications", department: "Department" },
  { name: "Sia, Shaun Asher M.", position: "AVP for Creative Communications", department: "Department" },
  { name: "Duron, Jarren Irvine F.", position: "VP for Documentation & Secretariat", department: "Department" },
  { name: "Diaz, Lei Eizen P.", position: "AVP for Documentation & Secretariat", department: "Department" },
  { name: "Gragas, Nethan Edry L.", position: "VP for Marketing", department: "Department" },
  { name: "Valeza, Reinwald Marone", position: "AVP for Marketing", department: "Department" },
  { name: "Nagera, Kristina Casandra C.", position: "VP for Programs", department: "Department" },
  { name: "Federico, John Richard J.", position: "AVP for Programs", department: "Department" },
  { name: "Gallaza, Romar M.", position: "VP for Research & Extensions", department: "Department" },
  { name: "Castillejo, Paul Daniel C.", position: "AVP for Research & Extensions", department: "Department" },
]

export default function CommitteePage() {
  const executives = committeeMembers.filter(m => m.department === "Executive")
  const departmentHeads = committeeMembers.filter(m => m.department !== "Executive")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Committee
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The dedicated leaders who drive PUP-ASCII forward, working to create 
              opportunities and foster growth for all members.
            </p>
          </div>
        </section>

        {/* Executive Officers */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground mb-6">Executive Officers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {executives.map((member) => (
                <Card key={member.name}>
                  <img
                    src="/placeholder-user.jpg"
                    alt={member.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary">{member.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground mb-6">Department Heads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentHeads.map((member) => (
                <Card key={member.name}>
                  <img
                    src="/placeholder-user.jpg"
                    alt={member.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                    <Badge variant="outline" className="mt-1 text-xs">{member.department}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
