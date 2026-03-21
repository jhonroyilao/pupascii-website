import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "mailto:ascii@pup.edu.ph", icon: Mail, label: "Email" },
]

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/events", label: "Events" },
  { href: "/contacts", label: "Contacts" },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-lg text-foreground">
              PUP ASCII
            </Link>
            <p className="text-muted-foreground mt-3 max-w-sm">
              Association of Students for Computer Intelligence and Integration. 
              Empowering future technology leaders through excellence and innovation.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Polytechnic University of the Philippines</li>
              <li>Sta. Mesa, Manila</li>
              <li>
                <Link
                  href="mailto:pupasciiofficial@pup.edu.ph"
                  className="hover:text-foreground transition-colors"
                >
                  pupasciiofficial@pup.edu.ph
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PUP ASCII. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
