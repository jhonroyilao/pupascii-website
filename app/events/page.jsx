"use client";

import { useState } from "react";
import { Search, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/custom/navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({ subsets: ['latin'] });

const TABS = ["Ongoing", "Past", "Upcoming"];
const CAROUSEL_SLIDES = [1, 2, 3]; 

const EVENTS = [
  {
    title: "Event Title",
    date: "DD/MM/YYYY",
    tag: "tag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vitae dolor vitae ultrices. Vestibulum placerat risus pulvinar mi ullamcorper, sed tincidunt risus malesuada. In molestie, ante ac sodales pretium, dui augue suscipit velit, sit amet rhoncus tellus dolor ac augue. Aenean a blandit enim, ac laoreet lacus. Maecenas ultrices, magna nec faucibus dapibus, arcu neque pellentesque est, quis bibendum enim justo...",
    variant: "light",
  },
  {
    title: "Event Title",
    date: "DD/MM/YYYY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vitae dolor vitae ultrices. Vestibulum placerat risus pulvinar mi ullamcorper, sed tincidunt risus malesuada. In molestie, ante ac sodales pretium, dui augue suscipit velit, sit amet rhoncus tellus dolor ac augue. Aenean a blandit enim, ac laoreet lacus. Maecenas ultrices, magna nec faucibus dapibus, arcu neque pellentesque est, quis bibendum enim justo...",
    variant: "solid",
  },
  {
    title: "Event Title",
    date: "DD/MM/YYYY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vitae dolor vitae ultrices. Vestibulum placerat risus pulvinar mi ullamcorper, sed tincidunt risus malesuada. In molestie, ante ac sodales pretium, dui augue suscipit velit, sit amet rhoncus tellus dolor ac augue. Aenean a blandit enim, ac laoreet lacus. Maecenas ultrices, magna nec faucibus dapibus, arcu neque pellentesque est, quis bibendum enim justo...",
    variant: "light",
  },
];

// Reusable image placeholder component
function ImagePlaceholder({ className = "", hideIcon = false, darkBorder = false }) {
  const borderClass = darkBorder ? "border-2 border-neutral-700" : "border border-neutral-400/60";
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-[#d9d9d9] ${borderClass} ${className}`}>
      <svg className="absolute inset-0 h-full w-full text-neutral-400" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      </svg>
      {!hideIcon && <ImageIcon className="relative h-8 w-8 text-neutral-500/50" />}
    </div>
  );
}

export default function Events() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [query, setQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. HERO SECTION & CAROUSEL */}
      <section
        className="relative px-4 pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden flex flex-col items-center"
        style={{
          background: "radial-gradient(136.74% 156.21% at 17.55% 30.27%, #3DCBFF 0%, #0062E4 50%, #063A80 100%)",
        }}
      >
        <h1 className={`text-center ${bricolage.className} font-bold text-5xl sm:text-[96px] sm:leading-[120px] tracking-[-0.02em] text-white drop-shadow-md z-10 relative`}>
          PUP-ASCII Events
        </h1>

        <div className="relative w-full max-w-[1440px] mt-10 sm:mt-16 flex items-center justify-center group">
          {/* Background Band */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden sm:block h-[150px] sm:h-[280px]">
             <ImagePlaceholder className="w-full h-full rounded-none" hideIcon={true} darkBorder={true} />
          </div>

          {/* Carousel Viewport */}
          <div className="relative z-10 w-11/12 max-w-4xl aspect-[16/9] overflow-hidden shadow-2xl bg-white border-4 border-neutral-700">
            <div 
              className="flex h-full w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {CAROUSEL_SLIDES.map((_, index) => (
                <div key={index} className="w-full h-full shrink-0">
                  <ImagePlaceholder className="w-full h-full" hideIcon={true} />
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/70 hover:bg-white text-[#063A80] transition-all opacity-0 group-hover:opacity-100 shadow-md z-30">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/70 hover:bg-white text-[#063A80] transition-all opacity-0 group-hover:opacity-100 shadow-md z-30">
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {CAROUSEL_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative z-20 mx-auto mt-12 flex w-full max-w-3xl items-center gap-2 rounded-full bg-white p-2 shadow-2xl border border-neutral-100">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Look for ASCII On-going Events"
            className="flex-1 bg-transparent px-6 py-3 text-base text-neutral-700 outline-none placeholder:text-neutral-400"
          />
          <button className="flex items-center gap-2 rounded-full bg-[#E6EFFC] px-8 py-4 text-sm font-bold text-[#0062E4] transition-colors hover:bg-blue-100 border border-blue-200/50">
            <span className="hidden sm:inline">Search Event</span>
            <Search className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* 2. TABS + EVENT CARDS */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        {/* Tabs Filter */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {TABS.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-8 py-2.5 text-sm font-bold transition-all ${
                  active
                    ? "border-[#0062E4] bg-[#0062E4] text-white shadow-md"
                    : "border-[#0062E4] bg-white text-[#0062E4] hover:bg-[#E6EFFC]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Event List */}
        <div className="mt-10 space-y-8">
          {EVENTS.map((event, i) => {
            const isSolid = event.variant === "solid";
            return (
              <article
                key={i}
                className={`flex flex-col gap-4 rounded-[20px] p-6 sm:flex-row sm:gap-8 shadow-md border ${
                  isSolid ? "bg-[#0062E4] text-white border-[#0062E4]" : "bg-[#E6EFFC] text-[#063A80] border-[#d4e2f7]"
                }`}
              >
                <ImagePlaceholder className="aspect-[4/3] w-full shrink-0 sm:w-64 rounded-xl" darkBorder={true} />
                <div className={`flex-1 border-l-4 pl-6 py-3 ${isSolid ? "border-white/50" : "border-[#0062E4]"}`}>
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className={`text-2xl font-bold ${isSolid ? "text-white" : "text-[#0062E4]"}`}>
                      {event.title}
                    </h3>
                    {event.tag && (
                      <span className="rounded-full bg-[#0062E4] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider border border-blue-600">
                        {event.tag}
                      </span>
                    )}
                  </div>
                  <p className={`mt-1 text-sm font-bold ${isSolid ? "text-white/90" : "text-[#063A80]"}`}>
                    {event.date}
                  </p>
                  <p className={`mt-4 text-sm leading-relaxed ${isSolid ? "text-white/90" : "text-neutral-700"}`}>
                    {event.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. JOIN ASCII CTA CARD */}
      <section className="relative w-full mt-4">
        {/* Background overlap trick (Top: White, Bottom: Blue) */}
        <div className="absolute inset-0 z-0 flex flex-col">
          <div className="h-1/2 w-full bg-white"></div>
          <div className="h-1/2 w-full bg-[#0062E4]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-10">
          {/* Main container with blue border */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-[32px] bg-white p-8 sm:p-12 shadow-2xl border-2 border-[#0062E4]">
            <div className="flex-1 space-y-4">
              <h2 className={`text-3xl sm:text-4xl font-bold text-neutral-900 ${bricolage.className}`}>
                Join ASCII, Contact Us
              </h2>
              <p className="text-neutral-600 leading-relaxed max-w-md text-sm sm:text-base">
                Be part of PUP ASCII and connect with students who build, learn, and grow together. Take part in events, develop your skills, and find your place in a community that keeps moving forward.
              </p>
              
              {/* Form container: Light blue bg, White submit button */}
              <div className="mt-6 flex w-full max-w-md items-center gap-2 rounded-full bg-[#E6EFFC] p-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-[#063A80] placeholder:text-[#063A80]/60" 
                />
                <button className="rounded-full bg-white px-8 py-3 text-sm font-bold text-[#0062E4] shadow-sm transition-colors hover:bg-neutral-50">
                  Submit
                </button>
              </div>
            </div>
            
            <div className="w-full max-w-[280px] shrink-0">
              <ImagePlaceholder className="aspect-square w-full rounded-2xl bg-neutral-100 border-none" />
            </div>
          </div>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}