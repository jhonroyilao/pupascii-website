"use client";
import React, { useState } from 'react';
import { ArrowUpRight } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import Grainient from "@/components/Grainient";
import HeroButton from "@/components/ui/herobutton"

const accordionItems = [
  { id: 1, title: 'EXECUTIVES', imageUrl: '/execcomm.png' },
  { id: 2, title: 'CREATIVES', imageUrl: '/ccc.png' },
  { id: 3, title: 'PROGRAMS', imageUrl: '/prog.jpg' },
  { id: 4, title: 'MARKETING', imageUrl: '/marketing.jpg' },
  { id: 5, title: 'RNE', imageUrl: '/rne.jpg' },
  { id: 6, title: 'DOCUSEC', imageUrl: '/docs.jpg' },
];

const AccordionItem = ({ item, isActive, onMouseEnter }) => (
  <div
    className={`relative h-[500px] overflow-hidden cursor-pointer border-[3px] select-none
      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
      ${isActive 
        ? 'flex-[5] border-transparent rounded-[30px]' 
        : 'flex-[0.6] bg-[#F1F5F9] border-blue-600/20 hover:border-blue-500 hover:bg-gray-50 rounded-[12px]'}`}
    onMouseEnter={onMouseEnter}
  >
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${isActive ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}`}
    />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent transition-opacity duration-700
          ${isActive ? 'opacity-100' : 'opacity-0'}`} 
      />
    </div>
    
    {/* Text Layer Styles */}
    <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center pb-8 pointer-events-none font-inter">
      <span 
        className={`font-bold transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] tracking-tighter whitespace-nowrap text-[#004EB6]
          ${isActive 
            ? 'text-xl md:text-2xl opacity-100 transform-none leading-tighter' 
            : 'text-[14px] font-bold tracking-tight opacity-90 [writing-mode:vertical-rl] rotate-0 mb-2'}`}
      >
        {item.title}
      </span>
    </div>
  </div>
);

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative pt-20 pb-10 rounded-b-[50px] overflow-hidden">
      {/* Background Layer Canvas context elements wrapper */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Grainient
          color1="#3B82F6"
          color2="#0062E4"
          color3="#3DCBFF"
          timeSpeed={0.35}
          colorBalance={0}
          warpStrength={2.75}
          warpFrequency={9.3}
          warpSpeed={5.5}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.34}
          rotationAmount={740}
          noiseScale={0}
          grainAmount={0}
          grainScale={0.2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <section className="container mx-auto px-8 md:px-16 lg:px-40 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-1/2 text-white flex flex-col items-start text-left">
            <div className="flex flex-col items-start -space-y-2 md:-space-y-4">
              <TextAnimate
                animation="blurInUp"
                by="word"
                className="heading-1 font-bold tracking-tighter text-white text-5xl md:text-7xl"
              >
                Meet the
              </TextAnimate>
              <TextAnimate
                animation="blurInUp"
                by="word"
                className="heading-1 font-bold tracking-tighter text-white text-5xl md:text-7xl"
              >
                Leaders
              </TextAnimate>
            </div>

            <p className="mt-6 text-lg text-blue-50 opacity-90 max-w-xl text-left page-description">
              The driving force behind ASCII, leading the team with creativity, collaboration, and a shared vision to build meaningful experiences for the community.
            </p>
            
            <div className="mt-8 flex items-center justify-start gap-3 w-full">
              <HeroButton href="/about" label="LEARN MORE ABOUT US" />
            </div>
          </div>

          {/* Right Accordion Block */}
          <div className="w-full lg:w-1/2 flex gap-2 h-[500px] items-center">
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