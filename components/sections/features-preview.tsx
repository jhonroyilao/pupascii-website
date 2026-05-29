"use client";

import HeroButton from "@/components/ui/herobutton"
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { TextAnimate } from "../ui/text-animate";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "CS Study Session",
      description:
        "are focused review sessions for departmental exams, providing curated study materials and guided live discussions to help students prepare effectively and strengthen their understanding of key topics.",
      skeleton: <SkeletonOne />,
      className: "md:col-span-1 md:border-r md:border-b border-neutral-200",
    },
    {
      title: "CCIS Week 2025",
      description:
        "a week-long college event featuring booths, a scavenger hunt, and a research colloquium that showcase creativity, collaboration, and academic excellence in the college.",
      skeleton: <SkeletonTwo />,
      className: "md:col-span- md:border-b border-neutral-200",
    },
    {
      title: "Usap Tayo, Sinta! Year 2",
      description:
        "are focused review sessions for departmental exams, providing curated study materials and guided live discussions to help students prepare effectively and strengthen their understanding of key topics.",
      skeleton: <SkeletonThree />,
      className: "md:col-span-1 md:border-r border-neutral-200",
    },
    {
      title: "ASCII Merch",
      description:
        "features official PUP ASCII merchandise that lets students represent the organization while promoting identity, creativity, and univ spirit.",
      skeleton: <SkeletonFour />,
      className: "md:col-span-1",
    },
  ];

  return (
    <div 
      className="relative z-20 mx-auto w-full py-5 lg:py-24 px-4 md:px-8" 
      style={{ background: "linear-gradient(180deg, #3DCBFF 0%, #0062E4 50%, #063A80 100%)" }}
    >
      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-white/100 tracking-widest uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          /our previous events
        </p>
        <h4 className="mx-auto max-w-5xl text-center font-bold tracking-tight text-white">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-4xl md:text-6xl lg:text-7xl leading-tight"
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
          >
            the things we made happen
          </TextAnimate>
        </h4>
      </div>

      {/* --- CONTENT BOX --- */}
      <div className="mx-auto max-w-7xl bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title + idx} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="mt-8 w-full h-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>


      <div className="hero-animate-4 flex flex-wrap justify-center py-10">
              <HeroButton href="/events" label="CHECK MORE OF OUR EVENTS" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              UI COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(`relative overflow-hidden p-8 sm:p-12 flex flex-col`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 
      className="text-left text-2xl md:text-4xl lg:text-5xl leading-tight font-bold text-black"
      style={{ fontFamily: "Instrument Sans, sans-serif" }}
    >
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p 
      className="text-gray-600 text-[15px] leading-relaxed max-w-l mt-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {children}
    </p>
  );
};

/* -------------------------------------------------------------------------- */
/*                           SKELETONS & EFFECTS                              */
/* -------------------------------------------------------------------------- */

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 py-4">
      <div className="group mx-auto h-full w-full bg-white">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          <img
            src="study_sesh.png"
            alt="CS Study Session"
            className="aspect-video h-full w-full rounded-xl object-cover object-center"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-20 w-full bg-gradient-to-t from-white via-white/50 to-transparent" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    { src: "ccisweek1.png", angle: "-8deg" },
    { src: "ccisweek2.png", angle: "2deg" },
    { src: "ccisweek3.png", angle: "8deg" },
    { src: "ccisweek4.png", angle: "-5deg" },
    { src: "ccisweek5.png", angle: "5deg" },
  ];

  return (
    <div className="relative w-full py-10 flex flex-col items-center overflow-hidden">
      <div className="flex justify-center -space-x-4 mb-4">
        {images.slice(0, 3).map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, zIndex: 50 }}
            style={{ rotate: img.angle }}
            className="w-28 h-28 md:w-40 md:h-40 bg-white p-2 rounded-xl shadow-sm border border-xl border-blue-500 overflow-hidden shrink-0"
          >
            <img src={img.src} alt="CCIS Week" className="w-full h-full object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center -space-x-8">
        {images.slice(3, 5).map((img, i) => (
          <motion.div
            key={i + 3}
            whileHover={{ scale: 1.05, zIndex: 50 }}
            style={{ rotate: img.angle }}
            className="w-28 h-28 md:w-40 md:h-40 bg-white p-2 rounded-xl shadow-sm border border-xl border-blue-500 overflow-hidden shrink-0"
          >
            <img src={img.src} alt="CCIS Week" className="w-full h-full object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

      
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a href="https://www.youtube.com/watch?v=yM1Ax2qvdMM&t=1145s" target="__blank" className="group/image relative flex h-full">
      <div className="relative flex h-full w-full flex-1 flex-col">
        <IconBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-16 w-16 text-red-500 transition-transform duration-300 group-hover/image:scale-110" />
        <img
          src="group-photo.jpg"
          alt="Podcast"
          className="aspect-video h-full w-full rounded-xl object-cover object-center transition-all duration-300 group-hover/image:blur-sm shadow-md"
        />
      </div>
    </a>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative flex h-full gap-10 py-4">
      <div className="group mx-auto h-full w-full bg-white">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          <img
            src="merch.png"
            alt="ASCII Merch"
            className="aspect-video h-full w-full rounded-xl object-cover object-center"
          />
        </div>
      </div>
      {/* Matching the gradient fade-out effect from the first skeleton */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-20 w-full bg-gradient-to-t from-white via-white/50 to-transparent" />
    </div>
  );
};