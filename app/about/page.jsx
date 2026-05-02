
import Navbar from "@/components/custom/navbar"
import HeroSection from "@/components/sections/hero-section"
import { CinematicFooter } from "@/components/ui/motion-footer"



export default function AboutPage() {
  return (
    <main className="min-h-screen">
      
    <Navbar />


    <div
          className="relative pt-24 pb-80"
          style={{ background: "linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
        >

        </div>
    <CinematicFooter />

    </main>
  )
}
