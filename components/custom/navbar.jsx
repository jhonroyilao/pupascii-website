"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Committees", href: "/committees" },
  { label: "Events", href: "/events" },
  { label: "Merch", href: "/merch" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0, 98, 228, 0.4)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/asciilogo.png"
            alt="PUP ASCII Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span
            className="text-white font-semibold"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
          >
            PUP ASCII
          </span>
        </Link>

        {/* Nav links — single glassmorphism pill */}
        <div
          className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-5 py-2 rounded-full text-white transition-all duration-200 hover:bg-white/20"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Us */}
        <Link
          href="/contact"
          className="text-white transition-all duration-200 hover:opacity-75"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Contact Us
        </Link>

      </div>
    </nav>
  )
}