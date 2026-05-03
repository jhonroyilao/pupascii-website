import Navbar from "@/components/custom/navbar"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSectionDemo from "@/components/sections/features-preview"
import About from "@/components/sections/about" 
import FAQSection from "@/components/sections/faq-section" 
import { Safari } from "@/components/ui/safari"
import { CinematicFooter } from "@/components/ui/motion-footer"

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <HeroSection />
      <About/>
      <FeaturesSectionDemo/>
      <FAQSection/>
      <CinematicFooter />
    </main>
  )
}
