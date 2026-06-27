"use client"
import Navbar from "@/components/custom/navbar"
import { CinematicFooter } from "@/components/ui/motion-footer"
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShinyButton } from "@/components/ui/shiny-button"
import Grainient from "@/components/Grainient"
import { ArrowRight, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, Copy, Check } from "lucide-react"
import { useState } from "react"
import CircularText from '@/components/CircularText';
import { RetroGrid } from "@/components/ui/retro-grid"

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-gray-400 hover:text-[#0062E4] transition-colors"
      aria-label="Copy"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  )
}



const contactCards = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "pupasciiofficial@gmail.com",
    sub: "We respond within 24 hours.",
    href: "mailto:pupasciiofficial@gmail.com",
  },
  {
    icon: <MapPin size={20} />,
    label: "Office",
    value: "Room S505, PUP Main Campus",
    sub: "Drop by during office hours.",
    href: null,
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+63 912 345 6789",
    sub: "Mon–Fri, 9am–5pm.",
    href: "tel:+639123456789",
  },
]

const socials = [
  { icon: <Facebook size={18} />, label: "Facebook", href: "#https://www.facebook.com/PUPASCII/" },
  { icon: <Instagram size={18} />, label: "Instagram", href: "#https://www.instagram.com/pupascii/" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#https://www.linkedin.com/company/pup-ascii/" },
  { icon: <Youtube size={18} />, label: "YouTube", href: "#https://www.youtube.com/@ASCII.usaptayosinta" },
]

export default function ContactPage() {

const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

   {/* ── CONTACT JHON ROY ILAO FOR ACCESS SA FORMSSPREE -- CONNECTED ITO SA CCC EMAIL ── */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xlgybkwo", { 
      method: "POST",
      body: JSON.stringify(formState),
      headers: { "Accept": "application/json", "Content-Type": "application/json" }
    });

    if (response.ok) {
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } else {
      alert("NOT SENT");
    }
  };
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

    
      <section className="relative w-full overflow-hidden rounded-b-3xl mb-16">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Grainient
            color1="#3B82F6"
            color2="#0062E4"
            color3="#3DCBFF"
            timeSpeed={0.35}
            colorBalance={0}
            warpStrength={2.75}
            warpFrequency={9.3}
            warpSpeed={5.5}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.34}
            rotationAmount={740}
            noiseScale={0}
            grainAmount={0}
            grainScale={0.2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-28 text-center flex flex-col items-center gap-4">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="heading-1 text-white"

          >
            let's connect
          </TextAnimate>
          <p className="text-white/80 page-description max-w-xl">
            Have a question, a partnership idea, or just want to say hello? <br/>
            We'd love to hear from you.
          </p>

         <div className="absolute -bottom-16 -left-60 z-20 opacity-100 scale-200">
    <CircularText
      text="LEAD*INSPIRE*EXALT*"
      onHover="speedUp"
      spinDuration={20}
      className="w-48 h-48"
    />
  </div>

  <div className="absolute -top-16 -right-60 z-20 opacity-100 scale-200">
    <CircularText
      text="LEAD*INSPIRE*EXALT*"
      onHover="speedUp"
      spinDuration={20}
      className="w-48 h-48"
    />
  </div>
        </div>
      </section>
      
<div className="relative w-full overflow-hidden bg-white">
  <div className="absolute inset-0 z-0 pointer-events-none">
    <RetroGrid
      lightLineColor="#8FBAF3"
      darkLineColor="#2583FF"
      opacity={0.4}
    />
  </div>
      {/* ── CONTACT CARDS ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20 relative w-full overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="group rounded-2xl p-6 flex flex-col gap-4 bg-gradient-to-b from-[#D8E9FF] to-[#FFFFFF] hover:border-gray-800 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062E4] flex items-center justify-center">
                {card.icon}
              </div>

              <div>
                <p className="text-sm font-medium text-[#0062e4] tracking-wide uppercase">/ {card.label}</p>
                <div className="flex items-center">
                  {card.href ? (
                    <a
                      href={card.href}
                      className="font-semibold text-black text-[15px] hover:text-[#0062E4] transition-colors"
                      style={{ fontFamily: "Inter, monospace" }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <span
                      className="font-semibold text-black text-[15px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {card.value}
                    </span>
                  )}
                  <CopyButton value={card.value} />
                </div>
                <p className="text-gray-400 text-sm mt-1">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM + SOCIALS ── */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start ">

          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3 relative z-10 lg:col-span-3 rounded-2xl bg-gradient-to-b from-[#F2F7FF] to-white shadow-x pt-6 pb-10 px-10 rounded-2xl border border-gray">
            <p className="section-label mb-3">/ send us a message</p>
            <h2
              className="section-title mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              reach out
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name at Email Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-500" htmlFor="name">Name</label>
                <input 
                  id="name" 
                  type="text" 
                  required 
                  placeholder="Your name" 
                  value={formState.name} 
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })} 
                  className="w-full rounded-xl border-2 border-gray-400 px-4 py-3 text-sm outline-none focus:border-[#0062E4] focus:ring-2 focus:ring-blue-100 transition-all" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-500" htmlFor="email">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="your@email.com" 
                  value={formState.email} 
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })} 
                  className="w-full rounded-xl border-2 border-gray-400 px-4 py-3 text-sm outline-none focus:border-[#0062E4] focus:ring-2 focus:ring-blue-100 transition-all" 
                />
              </div>
            </div>

            {/* Message - Siguraduhin na ang class ay kapareho ng sa inputs para mag-align */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-gray-500" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                required 
                rows={5} 
                placeholder="Tell us what's on your mind..." 
                value={formState.message} 
                onChange={(e) => setFormState({ ...formState, message: e.target.value })} 
                className="w-full rounded-xl border-2 border-gray-400 px-4 py-3 text-sm outline-none focus:border-[#0062E4] focus:ring-2 focus:ring-blue-100 transition-all resize-none" 
              />
            </div>
            
            {/* Submit Button */}
            <div>
              <ShinyButton  icon={sent ? <Check size={16} /> : <ArrowRight size={16} />} type="submit" className="shadow-none">
                {sent ? "message sent!" : "send message"} 
              </ShinyButton>
            </div>
          </form>
          </div>

          {/* Socials — takes 2 cols */}
          <div className="relative z-10 lg:col-span-2 rounded-2xl bg-gradient-to-b from-[#0062E4] to-[#0047A6] shadow-xl p-6 rounded-2xl">
            <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-3">/ find us online</p>
            <h2
              className="font-bold text-white font-bricolage mb-6 leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              follow along
            </h2>

            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-3 group px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-[#0062E4]/30 hover:bg-blue-50/50 transition-all duration-200"
                >
                  <span className="text-[#0062E4]">{s.icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#0062E4] transition-colors">
                    {s.label}
                  </span>
                  <ArrowRight size={14} className="ml-auto text-black-100 group-hover:text-[#0062E4] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Small note */}
            <p className="text-white/60 text-xs mt-6 leading-relaxed">
              PUP ASCII is the official academic organization of the Department of Computer Science, Polytechnic University of the Philippines.
            </p>
          </div>
        </div>
      </section>
</div>

      <CinematicFooter />
    </main>
  )
}