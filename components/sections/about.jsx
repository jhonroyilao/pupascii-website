"use client"

import Link from "next/link"
import Image from "next/image"
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import HeroButton from "@/components/ui/herobutton"

const photos = [
  {
    title: "Canada",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
    className: "absolute top-8 left-[15%] rotate-[4deg]",
  },
  {
    title: "New Zealand",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=500&fit=crop",
    className: "absolute top-24 left-[35%] rotate-[-7deg]",
  },
  {
    title: "The Narrator",
    image: "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?w=400&h=500&fit=crop",
    className: "absolute top-4 left-[52%] rotate-[6deg]",
  },
]

export default function About() {
  return (
    <section className="bg-white">

      {/* ── OUR IDENTITY ── */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-[#0062e4] tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}>
              /about us
            </p>
            <h2 className="font-bold text-black leading-tight"
              style={{ fontFamily: "Instrument Sans, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              our identity
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-md"
              style={{ fontFamily: "Inter, sans-serif" }}>
              The PUP Association of Students for Computer Intelligence and Integration
              (PUP-ASCII) is an academic organization under the Department of Computer
              Science at the Polytechnic University of the Philippines. It aims to foster
              excellence in computer science while promoting integration with other fields.
            </p>
          </div>

          {/* Right — Draggable polaroid cards */}
          <div className="relative h-[420px] w-full">
            <DraggableCardContainer className="relative w-full h-full [perspective:1200px]">
              {photos.map((item) => (
                <DraggableCardBody key={item.title} className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none w-48 h-56 object-cover rounded-sm"
                  />
                  <p className="mt-3 text-center text-sm font-medium text-neutral-700"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.title}
                  </p>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>

        </div>
      </div>

      {/* ── LEAD. INSPIRE. EXALT. ── */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — group photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/group-photo.jpg"
              alt="PUP ASCII members"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — tagline + text */}
          <div className="space-y-6">
            <h2
              className="font-bold leading-tight"
              style={{ fontFamily: "Instrument Sans, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              <span className="text-black">lead. </span>
              <span className="text-[#0062e4]">inspire. </span>
              <span className="text-black">exalt.</span>
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}>
              Led by student leaders from different year levels, PUP ASCII exists to
              assist students in their academic journey, helping growth through
              collaboration and learning, and excel excellence in both technical and
              creative elements. As a tech-focused organization, PUP ASCII connects
              students with opportunities that let them explore, apply, and showcase
              their skills in the field of technology.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0062e4] font-medium text-sm hover:underline"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Read More About Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="#0062e4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}