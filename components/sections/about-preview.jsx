"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "motion/react"
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { TextAnimate } from "@/components/ui/text-animate"
import { Highlighter } from "@/components/ui/highlighter"
import { Safari } from "@/components/ui/safari"

const photos = [
  {
    image: "/pic3.jpg",
    className: "absolute top-5 left-[-5%] rotate-[4deg] border border-xl border-blue-500",
  },
  {
    image: "/pic2.jpg",
    className: "absolute top-5 left-[15%] rotate-[-10deg] border border-xl border-blue-500",
  },
  {
    image: "/pic1.jpg",
    className: "absolute top-4 left-[49%] rotate-[6deg] border border-xl border-blue-500",
  },
]

function HighlightOnScroll({ children, color, action = "highlight" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <span ref={ref}>
      <Highlighter action={action} color={color} animate={inView}>
        {children}
      </Highlighter>
    </span>
  )
}

export default function About() {
  return (
    <section className="relative bg-white">

      {/* 🔵 FLOATING SAFARI CARD (overlaps Hero + About) 
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] px-6">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
          <Safari url="pupascii-2526.com" imageSrc="/group-photo.jpg" />
        </div>
      </div> */}

      {/* ── OUR IDENTITY ── */}
      <div className="max-w-7xl mx-auto px-6 pt-[100px] pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <p
              className="text-sm font-medium text-[#0062e4] tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              /about us
            </p>

            <TextAnimate
              animation="blurInUp"
              by="word"
              className="font-bold text-black leading-tight"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              our identity
            </TextAnimate>

            <p
              className="text-gray-600 text-[15px] leading-relaxed max-w-md"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The PUP Association of Students for Computer Intelligence
              and Integration (PUP-ASCII) is an{" "}
              <HighlightOnScroll color="#93C5FD" action="highlight">
                academic organization
              </HighlightOnScroll>{" "}
              under the Department of Computer Science at the Polytechnic
              University of the Philippines. It aims to{" "}
              <em>foster excellence</em> in computer science while promoting
              integration with other fields.
            </p>
          </div>

          {/* Right */}
          <div
            className="relative h-[420px] w-full rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)",
            }}
          >
            <DraggableCardContainer className="relative w-full h-full [perspective:1200px]">
              {photos.map((item, index) => (
                <DraggableCardBody key={index} className={item.className}>
                  <img
                    src={item.image}
                    alt=""
                    className="pointer-events-none w-100 h-80 object-cover rounded-sm"
                  />
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>
        </div>
      </div>

      {/* ── DRIVEN BY PASSION ── */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/group-photo.jpg"
              alt="PUP ASCII members"
              fill
              className="object-cover"
            />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div
              className="font-bold leading-tight"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              <TextAnimate animation="blurInUp" by="word" className="inline text-black">
                driven
              </TextAnimate>{" "}
              <TextAnimate animation="blurInUp" by="word" className="inline text-black">
                by
              </TextAnimate>{" "}
              <TextAnimate animation="blurInUp" by="word" className="inline text-[#0062e4]">
                passion
              </TextAnimate>
            </div>

            <p
              className="text-gray-600 text-[15px] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Led by{" "}
              <HighlightOnScroll color="#93C5FD" action="highlight">
                student leaders from different year levels
              </HighlightOnScroll>
              , PUP ASCII exists to assist students in their academic journey,
              inspire growth, and promote excellence in both technical and creative fields.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0062e4] font-medium text-sm hover:underline"
            >
              Read More About Us
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}