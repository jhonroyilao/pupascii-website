"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Make sure to import Next.js Image component

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// 1. Reusable Image component that handles the clean border and the zoom hover animation safely
export const TimelineImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full relative"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-w-768px) 100vw, 50vw"
          className="object-cover object-center" 
          priority
        />
      </motion.div>
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-bricolage md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* Left — year + dot */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              
              {/* Glowing dot */}
              <div className="absolute left-0 md:left-0 flex items-center justify-center w-10 h-10">
                <div
                  className="w-5 h-5 rounded-full bg-white border-2"
                  style={{
                    borderColor: "#0062E4",
                  }}
                />
              </div>

              {/* Year badge — desktop */}
              <div className="hidden md:block md:pl-16">
                <span
                  className="inline-block rounded-2xl border-none px-6 py-2 font-bold text-white text-xl md:text-3xl"
                  style={{
                    background: "linear-gradient(325deg, #0044ff 0%, #2ccfff 55%, #0044ff 90%)",
                    backgroundSize: "280% auto",
                  }}
                >
                  {item.title}
                </span>
              </div>
            </div>

            {/* Right — content */}
            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              {/* Year badge — mobile */}
              <div className="md:hidden mb-4">
                <span
                  className="inline-block rounded-2xl border-none px-5 py-2 font-bold text-white text-lg"
                  style={{
                    background: "linear-gradient(325deg, #0044ff 0%, #2ccfff 55%, #0044ff 90%)",
                    backgroundSize: "280% auto",
                  }}
                >
                  {item.title}
                </span>
              </div>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical line track */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[18px] md:left-[18px] top-0 overflow-hidden w-[4px] rounded-full bg-neutral-100"
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[4px] rounded-full"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: "linear-gradient(to bottom, #0044ff, #2ccfff, #0044ff)",
            }}
          />
        </div>
      </div>
    </div>
  );
};