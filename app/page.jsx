import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { AboutPreview } from "@/components/about-preview"
import { CommitteePreview } from "@/components/committee-preview"
import { EventsPreview } from "@/components/events-preview"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <AboutPreview />
      <CommitteePreview />
      <EventsPreview />
      <FaqSection />
      <Footer />
    </main>
  )
}
