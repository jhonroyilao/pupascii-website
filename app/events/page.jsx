"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  MapPin,
  Search,
  X,
} from "lucide-react";
import Navbar from "@/components/custom/navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TABS = ["Upcoming", "Ongoing", "Past"];

const EVENTS = [
  // TEMPLATE FOR FUTURE USE
  // {
  //   title: "",
  //   date: "",
  //   status: "Past|Ongoing|Upcoming",
  //   location: "PUP Manila",
  //   image: "/",
  //   description:
  //     "",
  // },
  {
    title: "Usap Tayo, Sinta",
    date: "Ongoing",
    status: "Ongoing",
    location: "ASCII Podcast",
    image: "/UTS.jpg",
    description:
      "A podcast series organized by PUP ASCII that highlights real-life experiences of CCIS students as Iskolars ng Bayan. Through open and meaningful conversation, the series explores topics such as academic transitions, culture shock, and student life, creating a safe space for shared stories and connection within the community.",
  },
  {
    title: "CS Midterm Study Session",
    date: "April 13-17, 2026",
    status: "Past",
    location: "Online",
    image: "/SSMidterms2ndSem2526.jpg",
    description:
      "New semester, new goals! 🚀 As examinations approach, don't let the new lessons stack up. We're here to help you navigate everything from the first few lectures to those heavy, complex algorithms so you can stay ahead of the curve! 📈",
  },
  {
    title: "CCIS Week",
    date: "December 9-13, 2025",
    status: "Past",
    location: "PUP Manila",
    image: "/CCISWeek6.jpg",
    description:
      "",
  },
  {
    title: "Research Colloquium",
    date: "December 9-13, 2025",
    status: "Past",
    location: "PUP Manila - Main Building",
    image: "/CSResearchColloquium.jpg",
    description:
      "",
  },
  {
    title: "Piso Mo, Pag-Asa Ko",
    date: "Past Event",
    status: "Past",
    location: "Donation Campaign",
    image: "/PMPK.jpg",
    description:
      "A charity-driven donation campaign aimed at supporting Computer Science students facing financial challenges during the online learning setup in 2022. The initiative reflects ASCII's commitment to community support, empathy, and student welfare.",
  },
  {
    title: "ASCII Kickoff Ceremony 2025-2026",
    date: "Past Event",
    status: "Past",
    location: "PUP Accenture Room",
    image: "/ASCIIKOC2025.jpg",
    description:
      "It's time to bring the 'Ohana together! PUP ASCII officially welcomed 2025-2026 officers and kick-start an amazing year as one community. A chance to connect and meet everyone.",
  },
  {
    title: "CS Final Study Session",
    date: "January 8-9, 2026",
    status: "Past",
    location: "Online",
    image: "/SSFinals1stSem2526.jpg",
    description:
      "Gear up for finals season with the ASCII Study Session!Ditch the stressful, last-minute cramming and join a supportive community of peers and expert study leads. Whether you need to sharpen your logic for upcoming lab exams or memorize key concepts for written tests, we have you covered.Our dedicated study leads are ready to break down complex topics, clear up your confusion, and help you master the lessons of the past semester. Don't just review—build the knowledge and skill you need to walk into the exam room with total confidence. Open your books, sharpen your mind, and study stellar this semester!",
  },
  {
    title: "CCIS New Students' Orientation for A.Y. 2025-2026",
    date: "Past Event",
    status: "Past",
    location: "PUP Manila",
    image: "/NSO2526.jpg",
    description:
      "The CCIS halls were shining bright with the colors blue and yellow as our new batch of Teknolohista ng Bayan took their first step into the world of innovation and discovery.",
    activities: [
      "Welcome remarks by the CCIS Dean",
      "Speech by the PUP ASCII President",
      "Organization fair featuring CCIS student groups",
    ],
  },
  {
    title: "CS Midterm Study Session",
    date: "October 20-24, 2025",
    status: "Past",
    location: "Online",
    image: "/SSMidterms1stSem2526.jpg",
    description:
      "This event aims to gather Computer Science students across all year levels for collaborative learning, shared insights, and academic support. Got something you still don't understand? Questions you want to clarify? Topics you'd like to discuss more deeply? Don't worry, the CS Study Sessions have got you covered. 💡",
  },
  {
    title: "Smurfing to the ASCIIVERSE",
    date: "Past Event",
    status: "Past",
    location: "Induction Ceremony",
    image: "/execcomm.JPG",
    description:
      "The formal induction ceremony for newly appointed ASCII officers and committee members for the academic year 2024-2025. This event symbolizes the beginning of leadership, service, and commitment to the organization's mission.",
  },
  {
    title: "CCIS Kickoff Quizbee",
    date: "Past Event",
    status: "Past",
    location: "PUP Manila",
    image: "/CCISKickoffQuizbee.jpg",
    description:
      "A two-day academic competition that marked ASCII's first face-to-face event after the pandemic. Students competed in various computer science and technology topics, promoting knowledge sharing and academic excellence within the CCIS community.",
  },
  {
    title: "AskASCII",
    date: "Past Event",
    status: "Past",
    location: "Student Support",
    image: "/AskASCII.jpg",
    description:
      "An initiative designed to support incoming and current Computer Science students by addressing their academic and course-related concerns. AskASCII serves as a guidance platform, helping students navigate their college journey with clarity and confidence.",
  },
  {
    title: "PrograMEME",
    date: "Past Event",
    status: "Past",
    location: "Creative Challenge",
    image: "/Programeme3.jpg",
    description:
      "A creative contest that highlights the humor and relatability of student life in technology fields. Participants create memes based on programming experiences, showcasing creativity, wit, and shared struggles within the CS community.",
  },
  {
    title: "IQ League: Vanguard",
    date: "June 7, 2025",
    status: "Past",
    location: "PUP Manila",
    image: "/iqleague.jpg",
    description:
      'IQ League: Vanguard is PUP ASCII\'s premier inter-organizational cognitive competition that brings together the brightest student minds across the university. Designed to test participants in calculation, reasoning, spatial awareness, and memorization, the event emphasizes not only intelligence but also teamwork, strategy, and purpose-driven collaboration. With its inaugural theme, "Vanguard", the competition represents innovation and leadership, pushing boundaries in academic competitions while setting the stage for future expansion beyond PUP.',
    activities: [
      "Organizational War",
      "Unity Day X Photoshoot",
      "Main Match",
    ],
  },
  {
    title: "Street Tech Fighter (STF)",
    date: "Past Event",
    status: "Past",
    location: "CCIS Week",
    image: "/streettechfighter.jpg",
    description:
      "A high-energy, week-long competition that gathers students from the College of Computer and Information Sciences (CCIS). Participants engage in challenges such as coding, web design, debugging, and quiz bees. The event develops technical expertise, teamwork, and real-world problem-solving skills in a competitive yet collaborative environment.",
  },
  {
    title: "ISKODER",
    date: "Past Event",
    status: "Past",
    location: "Online Tournament",
    image: "/iskoder.jpg",
    description:
      "A week-long online programming tournament featuring fast-paced, esports-style coding battles. Students compete in languages such as C, Java, and Python, solving problems under pressure. ISKODER fosters both technical mastery and camaraderie, making coding both competitive and engaging.",
  },
  {
    title: "eXcelerate",
    date: "Past Event",
    status: "Past",
    location: "Hybrid Workshop",
    image: "/excelerate.jpg",
    description:
      "Also known as the Excel Esports Tournament, eXcelerate is a hybrid event combining a workshop and a capstone challenge. Participants learn data handling and analysis using Microsoft Excel and apply their skills to real-world datasets. The event enhances analytical thinking, technical proficiency, and problem-solving skills in a dynamic learning environment.",
  },
];

const CAROUSEL_SLIDES = EVENTS.slice(0, 5).map((event) => ({
  title: event.title,
  eyebrow: event.status,
  image: event.image,
}));

function EventImage({ src, alt, className = "", priority = false }) {
  if (!src) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden bg-[#eef4ff] ${className}`}>
        <ImageIcon className="h-8 w-8 text-[#0062E4]/35" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      priority={priority}
    />
  );
}

function EventMeta({ icon: Icon, children, light = false }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${light ? "text-white/85" : "text-[#063A80]"}`}>
      <Icon className="h-4 w-4" />
      {children}
    </span>
  );
}

export default function Events() {
  const [activeTab, setActiveTab] = useState("Ongoing"); // Default to "Ongoing" to highlight current activities. Change to "Upcoming" if you want to focus on future events.
  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const prefersReducedMotion = useRef(false);
  const autoplayRef = useRef(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));

  useEffect(() => {
    if (typeof window !== "undefined") {
      prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setQuery(rawQuery.trim()), 250);
    return () => clearTimeout(id);
  }, [rawQuery]);

  useEffect(() => {
    if (prefersReducedMotion.current) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    if (!isCarouselHovered) {
      autoplayRef.current = setInterval(nextSlide, 5000);
    }

    return () => clearInterval(autoplayRef.current);
  }, [isCarouselHovered, currentSlide]);

  const tabCounts = useMemo(() => {
    return TABS.reduce((counts, tab) => {
      counts[tab] = EVENTS.filter((event) => event.status === tab).length;
      return counts;
    }, {});
  }, []);

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return EVENTS.filter((event) => {
      const matchesTab = event.status === activeTab;
      const searchableText = `${event.title} ${event.description} ${event.location} ${event.date}`.toLowerCase();
      return matchesTab && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeTab, query]);

  const featuredEvent = EVENTS.find((event) => event.tag === "Featured");

  return (
    <main className="min-h-screen bg-[#E6EFFC] text-neutral-950">
      <Navbar />

      <section
        className="relative overflow-hidden px-4 pb-12 pt-24 text-white sm:pb-16 sm:pt-28"
        style={{
          background:
            "radial-gradient(136.74% 156.21% at 17.55% 30.27%, #3DCBFF 0%, #0062E4 50%, #063A80 100%)",
        }}
      >
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
              Events and activities
            </span>
            <h1 className="mt-5 font-bricolage text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">
              PUP-ASCII Events
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Explore upcoming competitions, ongoing community stories, and the student-led programs that shape the ASCII experience.
            </p>
          </div>

          <div
            className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") prevSlide();
              if (e.key === "ArrowRight") nextSlide();
            }}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Featured event images"
          >
            <div
              className="flex aspect-[16/10] h-full w-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: prefersReducedMotion.current ? "none" : "transform 500ms ease-in-out",
              }}
            >
              {CAROUSEL_SLIDES.map((slide, index) => (
                <div key={slide.title} className="relative h-full w-full shrink-0">
                  <EventImage
                    src={slide.image}
                    alt={slide.title}
                    priority={index === 0}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9EE7FF]">{slide.eyebrow}</p>
                    <p className="mt-1 font-bricolage text-2xl font-bold text-white sm:text-3xl">
                      {slide.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-[#063A80] shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-[#063A80] shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
              {CAROUSEL_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to ${slide.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-4xl">
          <div className="flex items-center gap-3 rounded-full border border-white/25 bg-white p-2 shadow-xl">
            <Search className="ml-3 h-5 w-5 shrink-0 text-[#0062E4]" />
            <input
              type="text"
              value={rawQuery}
              onChange={(e) => setRawQuery(e.target.value)}
              placeholder="Search event name, topic, or location"
              aria-label="Search events"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 sm:text-base"
            />
            {rawQuery && (
              <button
                type="button"
                onClick={() => {
                  setRawQuery("");
                  setQuery("");
                }}
                aria-label="Clear search"
                className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="sr-only" aria-live="polite">
            {filteredEvents.length} events
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {featuredEvent && (
          <button
            type="button"
            onClick={() => setSelectedEvent(featuredEvent)}
            className="grid w-full overflow-hidden rounded-[24px] border-2 border-[#0062E4] bg-white text-left shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4] lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="relative min-h-[260px]">
              <EventImage
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <span className="inline-flex rounded-full bg-[#0062E4] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  Featured
                </span>
                <h2 className="mt-4 font-bricolage text-3xl font-bold leading-tight text-[#063A80] sm:text-5xl">
                  {featuredEvent.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  <EventMeta icon={CalendarDays}>{featuredEvent.date}</EventMeta>
                  <EventMeta icon={MapPin}>{featuredEvent.location}</EventMeta>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {featuredEvent.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0062E4]">
                View event details <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </button>
        )}

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">/browse events</p>
            <h2 className="section-title mt-2 text-3xl sm:text-5xl">
              Find what is happening
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "border-[#0062E4] bg-[#0062E4] text-white shadow-md"
                      : "border-[#c3d8f7] bg-white text-[#063A80] hover:border-[#0062E4] hover:bg-[#eef5ff]"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4]`}
                >
                  {tab} <span className={active ? "text-white/75" : "text-[#0062E4]"}>{tabCounts[tab]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {filteredEvents.length === 0 ? (
            <div className="rounded-[20px] border border-dashed border-[#abc8f2] bg-white p-8 text-center">
              <p className="text-sm font-semibold text-neutral-700">
                No {activeTab.toLowerCase()} events match {query ? `"${query}"` : "that filter"}.
              </p>
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setRawQuery("");
                    setQuery("");
                  }}
                  className="mt-4 rounded-full bg-[#0062E4] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#063A80] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4]"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2">
              {filteredEvents.map((event) => (
                <li key={event.title}>
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(event)}
                    className="group flex h-full w-full flex-col overflow-hidden rounded-[18px] border-2 border-[#b9d5fb] bg-white text-left shadow-md transition hover:-translate-y-0.5 hover:border-[#0062E4] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4]"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e8f1ff]">
                      <EventImage
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0062E4] shadow-sm">
                        {event.status}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bricolage text-2xl font-bold leading-tight text-[#063A80]">
                        {event.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <EventMeta icon={CalendarDays}>{event.date}</EventMeta>
                        <EventMeta icon={MapPin}>{event.location}</EventMeta>
                      </div>
                      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">
                        {event.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0062E4]">
                        View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section
        className="px-4 py-12"
        style={{
          background:
            "linear-gradient(180deg, #E6EFFC 0%, #3DCBFF 20%, #0062E4 100%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[28px] border-2 border-[#0062E4] bg-white p-6 shadow-2xl sm:p-8 md:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="section-label">/get involved</p>
            <h2 className="section-title mt-3 text-3xl sm:text-5xl">
              Join the next ASCII activity
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Be part of a community that learns in public, builds with curiosity, and makes space for students to grow through competitions, talks, workshops, and shared projects.
            </p>

            <div className="mt-6 flex w-full max-w-lg flex-col gap-3 rounded-[18px] bg-[#eef5ff] p-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#063A80] outline-none placeholder:text-[#063A80]/55"
              />
              <button
                type="button"
                className="rounded-[14px] bg-[#0062E4] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#063A80] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4]"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[22px] bg-[#e8f1ff]">
            <Image
              src="/folder-4.png"
              alt="ASCII event folder artwork"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedEvent(null);
        }}
      >
        <DialogContent className="max-w-2xl overflow-hidden border-none bg-white p-0 shadow-2xl sm:rounded-[24px]">
          {selectedEvent && (
            <div className="max-h-[90vh] overflow-y-auto">
              <div className="relative aspect-[16/8] bg-[#063A80]">
                <EventImage
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0062E4]">
                  {selectedEvent.status}
                </span>
              </div>

              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-bricolage text-3xl font-bold leading-tight text-[#063A80] sm:text-4xl">
                    {selectedEvent.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Event details for {selectedEvent.title}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 flex flex-wrap gap-4">
                  <EventMeta icon={CalendarDays}>{selectedEvent.date}</EventMeta>
                  <EventMeta icon={MapPin}>{selectedEvent.location}</EventMeta>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  {selectedEvent.description}
                </p>

                {selectedEvent.activities?.length > 0 && (
                  <div className="mt-6 rounded-[18px] bg-[#eef5ff] p-5">
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#063A80]">
                      Key Activities
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {selectedEvent.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-3 text-sm font-medium text-[#063A80]">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0062E4]" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="rounded-full bg-[#0062E4] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#063A80] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4]"
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
