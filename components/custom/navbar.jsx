"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LimelightNav } from "@/components/ui/limelight-nav"

const navItems = [
  { id: "home",        label: "Home",        href: "/" },
  { id: "about",       label: "About Us",    href: "/about" },
  { id: "committees",  label: "Committees",  href: "/committees" },
  { id: "events",      label: "Events",      href: "/events" },
  { id: "merch",       label: "Merch",       href: "/merch" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Sync active tab with current route
  const activeIndex = navItems.findIndex(item => item.href === pathname) ?? 0

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "linear-gradient(135deg, rgba(0, 98, 228, 0.4), rgba(61, 203, 255, 1))": "transparent",
        backdropFilter: scrolled ? "blur(50px)" : "none",
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

        {/* Nav links with limelight — glassmorphism pill */}
        <div
          className="hidden md:flex items-center rounded-full overflow-visible"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <LimelightNav
            items={navItems}
            defaultActiveIndex={activeIndex < 0 ? 0 : activeIndex}
            className="rounded-full"
            limelightClassName=""
          />
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