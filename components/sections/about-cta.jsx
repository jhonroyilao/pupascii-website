"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"
import { RetroGrid } from "@/components/ui/retro-grid"


export default function CommunityCTA() {
  return (
    <section className="relative w-full py-40 px-4 md:px-6 bg-[#F4F8FF] flex items-center justify-center overflow-hidden">
      <RetroGrid 
        lightLineColor="#8FBAF3"
        darkLineColor="#2583FF "
        opacity={0.4}
 /> 
 

 

      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-[32px] border-2 border-[#3b82f6] bg-white p-6 sm:p-12 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 z-0"
        >
          {/* Top Gradient Background */}
          <div className="absolute inset-x-0 top-0 h-[40%] md:h-[65%] pointer-events-none select-none z-1">
            <img
              src="/CARDBG_GRADIENT.svg"
              alt=""
              className="w-full h-full object-cover object-top"
              draggable={false}
            />
          </div>

          {/* ILLUSTRATION SIDE - Now configured to appear on top on mobile */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // order-first puts it on top for mobile, md:order-last shifts it back to the right side on desktop
            className="flex-shrink-0 w-full max-w-[150px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] flex justify-center z-10 order-first md:order-last"
          >
            <Image
              src="/ascii-envelope.svg"
              alt="Community illustration"
              width={320}
              height={320}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* TEXT SIDE */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left space-y-4 sm:space-y-6 max-w-xl z-10 order-last md:order-first">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#111827] tracking-tight leading-tight">
             Let’s create, connect, and build.
            </h2>
            

            <p className="text-gray-600 text-[15px] leading-relaxed max-w-l mt-4"
      style={{ fontFamily: "Inter, sans-serif" }}>
              ASCII is open to partnerships that spark innovation, collaboration, and impact in the tech community. Whether it’s events, projects, or shared initiatives, we’re ready to create and grow with you.
            </p>

            

            <div className="pt-2 sm:pt-4 w-full sm:w-auto flex justify-center md:justify-start">
              <ShinyButton
                href="/contacts"
                icon={<ArrowRight size={18} />}
                className="shadow-none"

              >
                Contact Us
              </ShinyButton>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}