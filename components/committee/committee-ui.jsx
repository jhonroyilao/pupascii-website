"use client";
import { useState } from "react";
import React from "react";
import { Facebook, Github, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Safari } from "@/components/ui/safari";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import GradientText from "@/components/ui/gradienttext";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

import { RetroGrid } from "@/components/ui/retro-grid"
// DRAGGABLE CARD COMPONENTS
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";

const cardShadow =
  "shadow-[0px_125px_50px_rgba(0,0,0,0.01),0px_71px_42px_rgba(0,0,0,0.03),0px_31px_31px_rgba(0,0,0,0.04),0px_8px_17px_rgba(0,0,0,0.05)]";

const viewportOnce = { once: true, margin: "-10% 0px" };
const fadeUpTransition = { duration: 0.6, ease: "easeOut" };

const gridContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUpItemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: fadeUpTransition },
};

// ANIMATED TEXT 

export function AnimatedDescription({ children, className }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

// FOLDER SHELLS 
export function SirMon({}) {
  return (
    <section className="relative w-full  flex items-center justify-center overflow-visible bg-[#F4F8FF]">
     
      <div className="w-full py-20 px-6 mt-10 "
      >

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              
            {/*Main Image*/}
            <div className="w-full mx-auto lg:mx-0">
              <div className="relative w-full">
                <Image
                  src="/prof_sirmon2.png" 
                  alt="sir_montaigne"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-[20px]"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
              /ASCII ADVISER
            </p>
            <div className="w-full">
            <TextAnimate animation="blurInUp" by="word" className="text-4xl md:text-4xl font-bold leading-tight text-blue-600 text-black"
            style={{ fontFamily: "var(--font-bricolage), sans-serif"}}>
                Mr. Montaigne G. Molejon, MSIT
              </TextAnimate>
            </div>
             <p
              className="paragraph text-gray-600 text-justify"
            >
          Mr. Montaigne graduated Bachelor of Science in Computer Science (BSCS) at Adamson University, and Master of Science in Information Technology (MSIT) at Polytechnic University of the Philippines-Open University. 
          <br/> <br/>His research interests include Software Development, Web Application, Android Development, Big Data, Data Science, Human- Computer Interaction (HCI), and Internet of Things (IOT).
            </p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-blue-100">
              <a 
                href="mailto:example@pup.edu.ph" // Ilagay ang actual email dito
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium underline underline-offset-4 text-[#676E76]">/mgmolejon@pup.edu.ph</span>
              </a>

              <a 
                href="https://www.facebook.com/monmolejon" // Ilagay ang actual email dito
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Facebook className="h-5 w-5 " />
                <span className="font-medium underline underline-offset-4 text-[#676E76]"> /monmolejon</span>
              </a>
            </div>
            
            </div>
            {/* 

            <Terminal>
              <TypingAnimation>ASCII ORGANIZATION ADVISER</TypingAnimation>
              <AnimatedSpan>✔ Preflight checks.</AnimatedSpan>
              <AnimatedSpan>✔ Validating Tailwind CSS.</AnimatedSpan>
              <TypingAnimation>Success! Project initialization completed.</TypingAnimation>
            </Terminal> */}
          </div>
        </div>
      </div>
      </section>
  );
}

export function LightSectionShell({ children, id, title, animation = "blurInUp", by = "word" }) {
  return (
    <section id={id} className="w-full relative z-10 -mt-[20px] md:-mt-[40px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full"
      >
        <div className="absolute -top-[48px] left-[5%] md:left-[10%] w-[280px] h-[58px] bg-white border-t-[10px] border-x-[10px] border-[#0062E4] rounded-t-[30px] z-20" />
        
        <div className="relative bg-white border-[#0062E4] border-t-[10px] rounded-[40px] pt-24 pb-28 z-10 w-full overflow-hidden">
          
          <div className="absolute inset-0 z-0 pointer-events-none flex justify-center [perspective:1000px]">
            <div 
              className="absolute w-[200%] h-[150%] bottom-0"
              style={{
                backgroundSize: "90px 90px",
                backgroundImage: "linear-gradient(to right, #E2E8F0 2px, transparent 2px), linear-gradient(to top, #E2E8F0 2px, transparent 2px)",
                transform: "rotateX(72deg)",
                transformOrigin: "bottom center",
                WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
                maskImage: "linear-gradient(to top, black 30%, transparent 100%)"
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 z-30 relative">
            <div className="text-center mb-6">
              {/* The TextAnimate now listens to the custom props */}
              <TextAnimate 
                animation={animation} 
                by={by} 
                className="text-4xl md:text-[72px] font-bold tracking-tighter text-[#0062E4] leading-[1.2] font-bricolage"
              >
                {title}
              </TextAnimate>
            </div>
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function DarkSectionShell({ children, id, title, animation = "blurInUp", by = "word" }) {
  return (
    <section id={id} className="w-full relative z-10 -mt-[20px] md:-mt-[40px]">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full drop-shadow-[7px_10px_20px_rgba(0,0,0,0.25)]"
      >
        <div className="absolute -top-[48px] left-[5%] md:left-[10%] w-[280px] h-[58px] bg-[#0062E4] border-t-[10px] border-x-[10px] border-white rounded-t-[30px] z-20" />
        
        <div className="relative bg-gradient-to-b from-[#0062E4] to-[#003D8D] border-white border-t-10 rounded-t-[40px] pt-24 pb-28 z-10 w-full overflow-visible">
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 z-30 relative">
            <div className="text-center mb-6">
              <TextAnimate 
                animation={animation} 
                by={by} 
                className="text-4xl md:text-[72px] font-bold tracking-tight text-white leading-[1.2] font-bricolage"
              >
                {title}
              </TextAnimate>
            </div>
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function GreySectionShell({ children, id, title, animation = "blurInUp", by = "word" }) {
  return (
    <section id={id} className="w-full relative z-10 -mt-[20px] md:-mt-[40px]">
        <div className="absolute -top-[48px] left-[5%] md:left-[10%] w-[280px] h-[58px] bg-gray-800 border-t-[10px] border-x-[10px] border-white rounded-t-[30px] z-20"  />
        <div className="relative bg-gray-800 border-t-[10px] border-b-[10px] border-white rounded-t-[40px] pt-24 pb-28 z-10 w-full overflow-hidden">

          <div className="max-w-7xl mx-auto px-6 md:px-12 z-30 relative">
            <div className="text-center mb-6">
              <TextAnimate 
                animation={animation} 
                by={by} 
                className="text-4xl md:text-[72px] font-bold tracking-tight text-white leading-[1.2] font-bricolage"
              >
                {title}
              </TextAnimate>
            </div>
            {children}
          </div>
        </div>
    </section>
  );
}

// PROFILE CARDS & SAFARI COMPONENTS

function MemberCard({ role, name, position, image, links={} }) {

  const { email, facebook, github, linkedin } = links || {};
  return (
    <div
      className={`group box-border grid h-[444px] w-[306px] shrink-0 grid-rows-[278px_minmax(0,1fr)_auto] gap-2 overflow-hidden !rounded-[30px] !bg-white !px-[21px] !py-[23px] ${cardShadow} cursor-grab active:cursor-grabbing hover:z-50 transition-z`}
    >
      <div className="mx-auto flex h-[278px] w-[263px] items-start justify-center overflow-hidden rounded-[24px] bg-[#DAD8D9] transition-all duration-300 group-hover:bg-[#D9E7FB]">
         {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <h3 className="mt-[22px] text-center text-[32px] font-medium leading-[49px] tracking-[-0.04em] text-[#262425]">
            {role}
          </h3>
        )}
      </div>
      <div className="flex min-h-0 flex-col items-start justify-center overflow-hidden">
        <h4 className="text-[20px] font-semibold leading-[32px] tracking-[-0.06em] text-[#262425]">
          {name}
        </h4>
        <p className="text-[16px] leading-[24px] text-[#676E76]">{position}</p>
      </div>
      <div className="flex w-full min-w-0 items-center justify-between gap-2">
        <div className="flex shrink-0 items-center gap-[5px]">
        <a 
            href={email ? `mailto:${email}` : "#"} 
            onClick={(e) => !email && e.preventDefault()}
            className="text-[#676E76] transition-opacity hover:opacity-70"
          >
            <Mail className="h-[23px] w-[23px]" strokeWidth={2} />
          </a>
          
          <a 
            href={facebook || "#"} 
            target={facebook ? "_blank" : undefined}
            rel={facebook ? "noopener noreferrer" : undefined}
            onClick={(e) => !facebook && e.preventDefault()}
            className="text-[#676E76] transition-opacity hover:opacity-70"
          >
            <Facebook className="h-[21px] w-[21px]" strokeWidth={2} />
          </a>

          <a 
            href={github || "#"} 
            target={github ? "_blank" : undefined}
            rel={github ? "noopener noreferrer" : undefined}
            onClick={(e) => !github && e.preventDefault()}
            className="text-[#676E76] transition-opacity hover:opacity-70"
          >
            <Github className="h-[21px] w-[21px]" strokeWidth={2} />
          </a>
        </div>

        <a
          href={linkedin || "#"}
          target={linkedin ? "_blank" : undefined}
          rel={linkedin ? "noopener noreferrer" : undefined}
          onClick={(e) => !linkedin && e.preventDefault()}
          className="shrink-0 whitespace-nowrap rounded-[10px] bg-[#262425] px-[15px] py-[5px] text-[16px] font-semibold leading-[24px] text-[#E6EFFC] transition-opacity hover:opacity-90"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export function MemberCardGrid({ members = [], safariUrl, safariImageSrc }) {
  return (
    
    <motion.div className="w-full">
      {safariImageSrc && (
        <div
          className="relative mx-auto mt-20 w-full max-w-[1100px] pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <Safari url={safariUrl} imageSrc={safariImageSrc} className="w-full" />
        </div>
      )}
      {members.length > 0 && (
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div className="flex flex-row flex-wrap items-center justify-center gap-[50px] px-4 [perspective:1200px]">
            {members.map((member, index) => (
              <div key={`${member.role}-${member.position}-${index}`} variants={fadeUpItemVariants}>
                
                <MemberCard {...member} />

              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    
    </motion.div>
  );
}

export function MemberCardCarousel({ members = [], safariUrl, safariImageSrc }) {

  <div>
    
  </div>
}

export function CommModalButton({ title = "Committee", members = [] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Container ng dalawang buttons */}
        <div className="mx-auto mt-8 flex w-full max-w-sm items-center justify-center gap-3 cursor-pointer">
          
         
          {/* Main pill button */}
<div
  className="flex items-center gap-2 rounded-2xl px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg border border-[#0062E4]"
  style={{ background: "white" }}
>
  <GradientText
    colors={["#0062E4", "#063A80", "#3DCBFF"]}
    animationSpeed={10}
    className="text-sm font-medium tracking-normal uppercase"
    style={{ fontFamily: "var(--font-inter)" }}
  >
    SEE ALL MEMBERS
  </GradientText>
</div>

{/* Glass arrow button - Updated with Blue Border */}
<div
  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600/10"
  style={{
    background: "white",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1.5px solid #0062E4",
  }}
>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path 
      d="M3 13L13 3M13 3H6M13 3V10" 
      stroke="#0062E4" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</div>
        </div>
      </DialogTrigger>

      <DialogContent
        className="w-[98vw] max-w-[1350px] sm:max-w-[1350px] h-auto rounded-[32px] border border-white/10 bg-blue p-0 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/6 p-6">
          <h4 className="text-lg font-semibold text-white">Member List</h4>
          <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {members.map((member) => (
              <li
                key={`${member.name}-${member.role}`}
                className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/90"
              >
                <div className="font-semibold text-white">{member.name}</div>
                <div className="text-xs text-white/70">{member.role}</div>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// :)