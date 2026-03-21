export default function ContactsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Contacts (skeleton)</h1>
    </main>
  )
}
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "pupascii@pup.edu.ph",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "PUP Main Campus",
    description: "Sta. Mesa, Manila, Philippines",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 (2) 1234-5678",
    description: "Mon-Fri, 8AM-5PM",
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "Monday - Friday",
    description: "8:00 AM - 5:00 PM",
  },
]

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#" },
  { icon: Instagram, name: "Instagram", url: "#" },
  { icon: Mail, name: "Email", url: "mailto:pupascii@pup.edu.ph" },
]

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                CONTACT US
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Have questions or want to learn more about PUP-ASCII?
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We would love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left side information */}
              <div className="space-y-8">
                <div className="rounded-2xl bg-card p-8 border border-border shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Email</h2>
                  <p className="text-foreground font-semibold">pupasciiofficial@pup.edu.ph</p>
                  <p className="text-muted-foreground">Send us an email anytime</p>
                </div>

                <div className="rounded-2xl bg-card p-8 border border-border shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Location</h2>
                  <p className="text-foreground font-semibold">PUP Main Campus S511</p>
                  <p className="text-muted-foreground">Sta. Mesa, Manila, Philippines</p>
                </div>

                <div className="rounded-2xl bg-card p-8 border border-border shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Phone</h2>
                  <p className="text-foreground font-semibold">+69750542650</p>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">8:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Right side form */}
              <div className="rounded-2xl bg-white p-8 border border-border shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-6">Fill out the form below and we will get back to you soon.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Jhon Roy Ilao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jhonroyilao@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {submitted && (
                  <div className="mt-4 text-center">
                    <p className="font-semibold text-foreground">Thanks! Your message has been sent.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
