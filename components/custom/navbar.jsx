"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LimelightNav } from "@/components/ui/limelight-nav"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "home",       label: "Home",       href: "/" },
  { id: "about",      label: "About Us",   href: "/about" },
  { id: "committee",  label: "Committee",  href: "/committee" },
  { id: "events",     label: "Events",     href: "/events" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const activeIndex = navItems.findIndex(item => item.href === pathname)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? "#0062E4" : "transparent",
        backdropFilter: scrolled ? "blur(100px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image
            src="/ascii_logo_w.png"
            alt="PUP ASCII Logo"
            width={20}
            height={20}
            className="object-contain"
          />
          <span
            className="text-white font-semibold"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
          >
            PUP ASCII
          </span>
        </Link>

        {/* Desktop nav — absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <LimelightNav
            items={navItems}
            defaultActiveIndex={activeIndex < 0 ? 0 : activeIndex}
            className="rounded-full"
            limelightClassName=""
          />
        </div>

        {/* Right side — Contact Us (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/contact"
            className="hidden md:block text-white transition-all duration-200 hover:opacity-100"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: pathname === "/contact" ? 500 : 400,
              opacity: pathname === "/contact" ? 1 : 0.75,
            }}
          >
            Contact Us
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1">
          {[...navItems, { id: "contact", label: "Contact Us", href: "/contact" }].map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 rounded-xl text-sm font-medium transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                color: pathname === item.href ? "white" : "rgba(255,255,255,0.65)",
                background: pathname === item.href ? "rgba(255,255,255,0.15)" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}