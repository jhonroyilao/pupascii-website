"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, X, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/custom/navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import Grainient from "@/components/Grainient";
import { EventImage } from "@/components/events/EventImage";
import EventCardFolder from "@/components/events/EventCardFolder";
import { EVENTS } from "@/lib/data/events";
import CommunityCTA from "@/components/sections/about-cta.jsx"

const TABS = ["All", "Upcoming", "Ongoing", "Past"];

const CAROUSEL_SLIDES = EVENTS.slice(0, 5).map((event) => ({
  title: event.title,
  eyebrow: event.status,
  image: event.image,
}));

export default function Events() {
  const [activeTab, setActiveTab] = useState("All");
  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const prefersReducedMotion = useRef(false);
  const autoplayRef = useRef(null);

  const nextSlide = () =>
    setCurrentSlide((p) => (p === CAROUSEL_SLIDES.length - 1 ? 0 : p + 1));
  const prevSlide = () =>
    setCurrentSlide((p) => (p === 0 ? CAROUSEL_SLIDES.length - 1 : p - 1));

  useEffect(() => {
    if (typeof window !== "undefined")
      prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setQuery(rawQuery.trim()), 250);
    return () => clearTimeout(id);
  }, [rawQuery]);

  useEffect(() => {
    if (prefersReducedMotion.current) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (!isCarouselHovered) autoplayRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [isCarouselHovered, currentSlide]);

  const tabCounts = useMemo(() =>
    TABS.reduce((acc, tab) => {
      acc[tab] = tab === "All" ? EVENTS.length : EVENTS.filter((e) => e.status === tab).length;
      return acc;
    }, {}), []);

  const filteredEvents = useMemo(() => {
    const q = query.toLowerCase();
    return EVENTS.filter((event) => {
      const matchesTab = activeTab === "All" || event.status === activeTab;
      const text = `${event.title} ${event.description} ${event.location} ${event.date}`.toLowerCase();
      return matchesTab && (!q || text.includes(q));
    });
  }, [activeTab, query]);

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-neutral-950">
      <Navbar />

    
      <section className="relative overflow-hidden rounded-b-[40px] px-6 pt-28 pb-20 text-white sm:px-12 sm:pt-32 sm:pb-24">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#3B82F6" color2="#0062E4" color3="#3DCBFF"
            timeSpeed={0.35} colorBalance={0} warpStrength={2.75}
            warpFrequency={9.3} warpSpeed={5.5} warpAmplitude={50}
            blendAngle={0} blendSoftness={0.34} rotationAmount={740}
            noiseScale={0} grainAmount={0} grainScale={0.2}
            grainAnimated={false} contrast={1.5} gamma={1} saturation={1}
            centerX={0} centerY={0} zoom={0.9}
          />
        </div>


        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/80">
                Events & Activities
              </span>
              <h1 className="mt-4 font-bricolage text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                Our Events
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                Competitions, podcasts, workshops, and everything in between — built by students, for students.
              </p>

              {/* Search — lives in hero */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-xl max-w-lg">
                <Search className="h-4 w-4 shrink-0 text-[#0062E4]" />
                <input
                  type="text"
                  value={rawQuery}
                  onChange={(e) => setRawQuery(e.target.value)}
                  placeholder="Search events…"
                  aria-label="Search events"
                  className="min-w-0 flex-1 bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
                />
                {rawQuery && (
                  <button
                    type="button"
                    onClick={() => { setRawQuery(""); setQuery(""); }}
                    aria-label="Clear"
                    className="rounded-full p-1 text-neutral-400 hover:text-neutral-700 transition"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Carousel */}
            <div
              className="relative overflow-hidden rounded-[24px] border border-white/15 shadow-2xl aspect-[16/10]"
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
              onKeyDown={(e) => { if (e.key === "ArrowLeft") prevSlide(); if (e.key === "ArrowRight") nextSlide(); }}
              tabIndex={0}
              role="group"
              aria-roledescription="carousel"
              aria-label="Featured events"
            >
              <div
                className="flex h-full w-full"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: prefersReducedMotion.current ? "none" : "transform 500ms ease-in-out",
                }}
              >
                {CAROUSEL_SLIDES.map((slide, i) => (
                  <div key={slide.title} className="relative h-full w-full shrink-0">
                    <EventImage src={slide.image} alt={slide.title} priority={i === 0} className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#9EE7FF]">{slide.eyebrow}</p>
                      <p className="mt-0.5 font-bricolage text-xl font-bold text-white">{slide.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button type="button" onClick={prevSlide} aria-label="Previous"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#063A80] shadow transition hover:bg-white focus:outline-none">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button type="button" onClick={nextSlide} aria-label="Next"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#063A80] shadow transition hover:bg-white focus:outline-none">
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute bottom-3 right-3 z-20 flex gap-1.5">
                {CAROUSEL_SLIDES.map((slide, i) => (
                  <button key={slide.title} type="button" onClick={() => setCurrentSlide(i)} aria-label={`Go to ${slide.title}`}
                    className={`h-2 rounded-full transition-all focus:outline-none ${currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EVENTS SECTION
      ════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">

        {/* Top bar: count + subtle filter */}
        <div className="flex items-center justify-between gap-4 mb-12">
          {/* Left: count */}
          <div>
            <p className="heading-5 font-bold tracking-tight text-black">
              recent events
              {/* Optional: Panatilihin ang counter kung gusto mo, kung ayaw mo, burahin lang ito */}
              <span className="text-neutral-400 font-normal normal-case tracking-normal ml-2">
                ({filteredEvents.length})
              </span>
            </p>
          </div>

          {/* Right: filter toggle + pills */}
          <div className="flex items-center gap-2">
            {/* Filter icon button */}
            <button
              type="button"
              onClick={() => setFilterOpen((v) => !v)}
              aria-label="Toggle filters"
              className={`flex items-center gap-2 rounded-xl border px-5 py-1.5 text-xs font-bold transition
                ${filterOpen
                  ? "border-[#0062E4] bg-[#0062E4] text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-[#0062E4] hover:text-[#0062E4]"
                }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              FILTER
            </button>

            {/* Pills — only visible when filterOpen */}
            <div className={`flex gap-1.5 overflow-hidden transition-all duration-300 ${filterOpen ? "opacity-100 max-w-xs" : "opacity-0 max-w-0 pointer-events-none"}`}>
              {TABS.map((tab) => {
                const active = tab === activeTab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-bold transition
                      ${active
                        ? "border-[#0062E4] bg-[#0062E4] text-white"
                        : "text-black bg-white text-neutral-600 hover:border-[#0062E4] hover:text-[#0062E4]"
                      }`}
                  >
                    {tab}
                    <span className={`ml-1 ${active ? "text-white/70" : "text-neutral-400"}`}>
                      {tabCounts[tab]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 ? (
          <div className="rounded-[20px] border border-dashed border-[#abc8f2] bg-white p-12 text-center">
            <p className="text-sm font-semibold text-neutral-500">
              No events found{query ? ` for "${query}"` : ""}.
            </p>
            <button
              type="button"
              onClick={() => { setRawQuery(""); setQuery(""); setActiveTab("All"); }}
              className="mt-4 rounded-full bg-[#0062E4] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#063A80]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          /* ── Folder grid ── */
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 justify-items-center">
            {filteredEvents.map((event) => (
              <li key={`${event.title}-${event.date}`}>
                <EventCardFolder event={event} />
              </li>
            ))}
          </ul>
        )}
      </section>
      <CommunityCTA/>
      <CinematicFooter />
    </main>
  );
}