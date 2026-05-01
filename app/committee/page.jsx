import Navbar from "@/components/custom/navbar"

export default function CommitteePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
    </main>
  )
}
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
