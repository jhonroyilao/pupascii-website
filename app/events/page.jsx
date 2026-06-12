"use client";

import { useState } from "react";
import { Search, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/custom/navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { Bricolage_Grotesque } from 'next/font/google';

// UI Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const bricolage = Bricolage_Grotesque({ subsets: ['latin'] });

// Constants
const TABS = ["Ongoing", "Past", "Upcoming"];
const CAROUSEL_SLIDES = [1, 2, 3]; 

// Events
const EVENTS = [
  {
    title: "IQ League: Vanguard",
    date: "May 26 - June 7, 2026",
    tag: "Featured",
    description:
      "IQ League: Vanguard is PUP ASCII's premier inter-organizational cognitive competition that brings together the brightest student minds across the university. Designed to test participants in calculation, reasoning, spatial awareness, and memorization, the event emphasizes not only intelligence but also teamwork, strategy, and purpose-driven collaboration. With its inaugural theme, \"Vanguard\", the competition represents innovation and leadership, pushing boundaries in academic competitions while setting the stage for future expansion beyond PUP. Key activities include Organizational War (May 26), Unity Day X Photoshoot (May 28), and the Main Match (June 7).",
    activities: [
      "Organizational War (May 26)",
      "Unity Day X Photoshoot (May 28)",
      "Main Match (June 7)",
    ],
    variant: "light",
    category: "Upcoming",
  },
  {
    title: "Usap Tayo, Sinta",
    date: "Ongoing",
    description:
      "A podcast series organized by PUP ASCII that highlights real-life experiences of CCIS students as Iskolars ng Bayan. Through open and meaningful conversation, the series explores topics such as academic transitions, culture shock, and student life, creating a safe space for shared stories and connection within the community.",
    variant: "solid",
    category: "Ongoing",
  },
  {
    title: "Street Tech Fighter (STF)",
    date: "Past Event",
    description:
      "A high-energy, week-long competition that gathers students from the College of Computer and Information Sciences (CCIS). Participants engage in challenges such as coding, web design, debugging, and quiz bees. The event develops technical expertise, teamwork, and real-world problem-solving skills in a competitive yet collaborative environment.",
    variant: "light",
    category: "Past",
  },
  {
    title: "ISKODER",
    date: "Past Event",
    description:
      "A week-long online programming tournament featuring fast-paced, esports-style coding battles. Students compete in languages such as C, Java, and Python, solving problems under pressure. ISKODER fosters both technical mastery and camaraderie, making coding both competitive and engaging.",
    variant: "solid",
    category: "Past",
  },
  {
    title: "eXcelerate",
    date: "Past Event",
    description:
      "Also known as the Excel Esports Tournament, eXcelerate is a hybrid event combining a workshop and a capstone challenge. Participants learn data handling and analysis using Microsoft Excel and apply their skills to real-world datasets. The event enhances analytical thinking, technical proficiency, and problem-solving skills in a dynamic learning environment.",
    variant: "light",
    category: "Past",
  },
  {
    title: "CCIS Kickoff Quizbee",
    date: "Past Event",
    description:
      "A two-day academic competition that marked ASCII's first face-to-face event after the pandemic. Students competed in various computer science and technology topics, promoting knowledge sharing and academic excellence within the CCIS community.",
    variant: "solid",
    category: "Past",
  },
  {
    title: "AskASCII",
    date: "Past Event",
    description:
      "An initiative designed to support incoming and current Computer Science students by addressing their academic and course-related concerns. AskASCII serves as a guidance platform, helping students navigate their college journey with clarity and confidence.",
    variant: "light",
    category: "Past",
  },
  {
    title: "PrograMEME",
    date: "Past Event",
    description:
      "A creative contest that highlights the humor and relatability of student life in technology fields. Participants create memes based on programming experiences, showcasing creativity, wit, and shared struggles within the CS community.",
    variant: "solid",
    category: "Past",
  },
  {
    title: "Piso Mo, Pag-Asa Ko",
    date: "Past Event",
    description:
      "A charity-driven donation campaign aimed at supporting Computer Science students facing financial challenges during the online learning setup in 2022. The initiative reflects ASCII's commitment to community support, empathy, and student welfare.",
    variant: "light",
    category: "Past",
  },
  {
    title: "Smurfing to the ASCIIVERSE",
    date: "Past Event",
    description:
      "The formal induction ceremony for newly appointed ASCII officers and committee members for the academic year 2024-2025. This event symbolizes the beginning of leadership, service, and commitment to the organization's mission.",
    variant: "solid",
    category: "Past",
  },
];

// Utility Components
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
  const [selectedEvent, setSelectedEvent] = useState(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));

  // Event Data Filtering
  const filteredEvents = EVENTS.filter((event) => {
    const matchesTab = event.category === activeTab;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q);
    return matchesTab && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section & Carousel */}
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
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden sm:block h-[150px] sm:h-[280px]">
             <ImagePlaceholder className="w-full h-full rounded-none" hideIcon={true} darkBorder={true} />
          </div>

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

            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/70 hover:bg-white text-[#063A80] transition-all opacity-0 group-hover:opacity-100 shadow-md z-30">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/70 hover:bg-white text-[#063A80] transition-all opacity-0 group-hover:opacity-100 shadow-md z-30">
              <ChevronRight className="w-6 h-6" />
            </button>
            
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

        {/* Global Event Search */}
        <div className="relative z-20 mx-auto mt-12 flex w-full max-w-3xl items-center gap-2 rounded-full bg-white p-1.5 shadow-xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Look for ASCII On-going Events"
            className="flex-1 bg-transparent px-4 py-2 text-sm sm:text-base text-neutral-700 outline-none placeholder:text-neutral-400"
          />
          <button
            type="button"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[#0062E4] transition-colors hover:bg-[#e6eefc]"
          >
            <span className="hidden sm:inline">Search Event</span>
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </section>

      {/* Categories & Event Feed */}
      <section className="mx-auto max-w-5xl px-4 py-16">
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

        <div className="mt-10 space-y-8">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-sm text-neutral-500">
              No events found for &ldquo;{activeTab}&rdquo;{query.trim() ? ` matching "${query.trim()}"` : ""}.
            </p>
          ) : (
            filteredEvents.map((event, i) => {
              const isSolid = event.variant === "solid";
              return (
                <article
                  key={i}
                  onClick={() => setSelectedEvent(event)}
                  className={`flex cursor-pointer flex-col gap-4 rounded-[20px] p-6 sm:flex-row sm:gap-8 shadow-md border transition-transform hover:-translate-y-1 hover:shadow-lg ${
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
                    <p className={`mt-4 text-sm leading-relaxed line-clamp-3 ${isSolid ? "text-white/90" : "text-neutral-700"}`}>
                      {event.description}
                    </p>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="relative w-full mt-4">
        <div className="absolute inset-0 z-0 flex flex-col">
          <div className="h-1/2 w-full bg-white"></div>
          <div className="h-1/2 w-full bg-[#0062E4]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-[32px] bg-white p-8 sm:p-12 shadow-2xl border-2 border-[#0062E4]">
            
            <div className="flex-1">
              <h2 className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-3 ${bricolage.className}`}>
                Join ASCII, Contact Us
              </h2>
              <p className="text-neutral-600 leading-relaxed max-w-xl text-sm sm:text-base mb-6">
                Be part of PUP ASCII and connect with students who build, learn, and grow together. Take part in events, develop your skills, and find your place in a community that keeps moving forward.
              </p>
              
              <div className="flex w-full max-w-md items-center gap-2 rounded-full bg-[#E6EFFC] p-1.5 sm:p-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-[#063A80] placeholder:text-[#063A80]/60" 
                />
                <button className="rounded-full bg-white px-8 py-2.5 text-sm font-bold text-[#0062E4] shadow-sm transition-colors hover:bg-neutral-50">
                  Submit
                </button>
              </div>
            </div>
            
            <div className="w-full max-w-[280px] shrink-0">
              <img 
                src="/folder-4.png" 
                alt="folder-4" 
                className="aspect-square w-full rounded-2xl object-cover shadow-md" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <Dialog 
        open={!!selectedEvent} 
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedEvent(null);
        }}
      >
        <DialogContent className="max-w-xl p-0 gap-0 border-none overflow-hidden sm:rounded-[24px] bg-white shadow-2xl">
          {selectedEvent && (
            <div className="flex flex-col w-full relative max-h-[90vh] overflow-y-auto">
              
              {/* Modal Header Image */}
              <div
                className="w-full"
                style={{
                  backgroundImage: "linear-gradient(135deg, #063A80 0%, #0062E4 55%, #3DCBFF 100%)",
                }}
              >
                <ImagePlaceholder className="aspect-[16/7] w-full border-b border-white/20" />
              </div>
              
              {/* Modal Content */}
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <DialogHeader className="text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <DialogTitle className={`text-2xl sm:text-3xl font-bold text-[#0062E4] ${bricolage.className}`}>
                      {selectedEvent.title}
                    </DialogTitle>
                    {selectedEvent.tag && (
                      <span className="rounded-full bg-[#0062E4] px-3 py-0.5 text-xs font-semibold text-white">
                        {selectedEvent.tag}
                      </span>
                    )}
                  </div>
                  <DialogDescription className="mt-1 text-sm font-semibold text-[#063A80]">
                    {selectedEvent.date}
                  </DialogDescription>
                </DialogHeader>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700">
                  {selectedEvent.description}
                </p>
                
                {selectedEvent.activities && selectedEvent.activities.length > 0 && (
                  <div className="mt-6 bg-[#E6EFFC] p-4 rounded-xl">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-[#063A80]">
                      Key Activities
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {selectedEvent.activities.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-[#063A80] font-medium">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0062E4]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Modal Actions */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="rounded-full bg-[#0062E4] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#063A80] shadow-md"
                  >
                    Close Event
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CinematicFooter />
    </main>
  );
}