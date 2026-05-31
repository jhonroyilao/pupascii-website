"use client";
import React, { useState } from 'react';
import { ArrowUpRight } from "lucide-react";

const accordionItems = [
  { id: 1, title: 'EXECUTIVES', imageUrl: '/executives.jpg' },
  { id: 2, title: 'CREATIVES', imageUrl: '/creatives.jpg' },
  { id: 3, title: 'PROGRAMS', imageUrl: '/prog.jpg' },
  { id: 4, title: 'MARKETING', imageUrl: '/marketing.jpg' },
  { id: 5, title: 'RESEARCH & EXTENSIONS', imageUrl: '/rne.jpg' },
  { id: 6, title: 'DOCUMENTATION & SECRETARIAT', imageUrl: '/docs.jpg' },
];

const AccordionItem = ({ item, isActive, onMouseEnter }) => (
  <div
    className={`relative h-[500px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 ease-out border-[3px]
      ${isActive 
        ? 'flex-[4] border-transparent' 
        : 'flex-[0.5] bg-white border-[#0062E4] hover:bg-gray-50'}`}
    onMouseEnter={onMouseEnter}
  >
    {isActive && (
      <>
        <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
      </>
    )}
    
    <span className={`absolute font-bold transition-all duration-500 z-10 
      ${isActive 
        ? 'bottom-8 left-0 right-0 text-center text-[#0062E4] text-2xl md:text-3xl px-4' 
        : 'inset-0 flex items-center justify-center rotate-90 text-[#0062E4] text-lg whitespace-nowrap'}`}
    >
      {item.title}
    </span>
  </div>
);

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative pt-20 pb-10 bg-gradient-to-b from-[#3DCBFF] via-[#0062E4] to-[#063A80]">
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter">Meet the Leaders</h1>
            <p className="mt-6 text-lg text-blue-50 opacity-90 max-w-md">
              The driving force behind ASCII, leading the team with creativity, collaboration, and a shared vision.
            </p>
            
            {/* The Dual Button Layout */}
            <div className="mt-8 flex items-center gap-3">
              <a href="/about" className="bg-white text-[#0062E4] font-bold px-8 py-4 rounded-full transition-transform hover:scale-[1.02] flex items-center justify-center">
                LEARN MORE ABOUT US
              </a>
              <a href="/about" className="bg-transparent border border-white/30 text-white p-4 rounded-2xl transition-all hover:bg-white/10 flex items-center justify-center">
                <ArrowUpRight size={24} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex gap-3 h-[500px]">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}