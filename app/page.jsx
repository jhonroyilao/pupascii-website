import Navbar from "@/components/custom/navbar"
import HeroSection from "@/components/sections/hero-section"
import { Safari } from "@/components/ui/safari"

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <HeroSection />

    </main>
  )
}
