"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { DotPattern } from "@/components/ui/dot-pattern"

type Card = {
  title: string;
  description: string;
  image: string;
  className: string;
  config: {
    y: number;
    x: number;
    rotate: number;
    zIndex: number;
  };
};

type SpringConfig = {
  type: "spring";
  bounce?: number;
  visualDuration?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
};

export interface CardsProps {
  spring?: SpringConfig;
  activeScale?: number;
  cardSpacing?: number;
}

const defaultSpring: SpringConfig = {
  type: "spring",
  visualDuration: 0.6,
  bounce: 0.25,
};

export const controls = {
  spring: defaultSpring,
  activeScale: [1.15, 1, 1.6, 0.01],
  cardSpacing: [180, 40, 320, 5],
};

export const Cards = ({
  spring = defaultSpring,
  activeScale = 1.15,
  cardSpacing = 180,
}: CardsProps = {}) => {
  // Blue / black / grey palette, content pulled from your old timelineData
  const cards: Card[] = [
    {
      title: "2010–2014",
      description:
        "where it all began — the roots of PUP ASCII were built through student-driven learning, collaboration, and community involvement. From peer-to-peer programming tutorials to mock exams and campus initiatives, the organization established a culture grounded in growth and shared passion for technology.",
      image: "/history/2013.png",
      className: "bg-[#0062E4] [&_h2]:text-white",
      config: { y: -20, x: 0, rotate: -15, zIndex: 2 },
    },
    {
      title: "2015–2019",
      description:
        "beyond the classroom — ASCII began expanding its reach through major seminars, bootcamps, and technology-centered initiatives that connected students with real-world innovation, while strengthening humanitarian efforts alongside technical excellence.",
      image: "/history/2016.png",
      className: "bg-neutral-800 [&_h2]:text-white",
      config: { y: 20, x: 180, rotate: 8, zIndex: 3 },
    },
    {
      title: "2020–2023",
      description:
        "connected from a distance — when the pandemic reshaped student life, ASCII transformed its digital platforms into spaces for support, accessibility, and connection through online initiatives and relief campaigns.",
      image: "/history/2023.jpg",
      className: "bg-[#0062E4] [&_h2]:text-white",
      config: { y: -50, x: 360, rotate: -5, zIndex: 4 },
    },
    {
      title: "2024–present",
      description:
        "redefining student tech culture — ASCII evolved into a modern, highly organized tech collective that reimagined academic engagement through competitive events, creative initiatives, and immersive student experiences.",
      image: "/history/2025.jpg",
      className: "bg-neutral-800 [&_h2]:text-white",
      config: { y: 20, x: 540, rotate: 12, zIndex: 5 },
    },
  ];

  const [active, setActive] = useState<Card | null>(null);
  const [spacing, setSpacing] = useState(cardSpacing);

  const ref = useRef<HTMLDivElement>(null);

  const cardSpring = spring;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () =>
      setSpacing(mq.matches ? cardSpacing : Math.round(cardSpacing * 0.39));
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [cardSpacing]);

  const middle = (cards.length - 1) / 2;

  const isAnyCardActive = () => {
    return active?.title;
  };

  const isCurrentActive = (card: Card) => {
    return active?.title === card.title;
  };

  return (
   
    <div className="relative flex h-full w-full items-center justify-center overflow-visible">
      
      <motion.div
        ref={ref}
        onClick={() => setActive(null)}
        className="relative mx-auto flex h-160 w-full max-w-5xl items-center justify-center [--height:340px] [--width:240px] lg:[--height:460px] lg:[--width:340px]"
      >
        {cards.map((card, index) => {
          const offsetX = (index - middle) * spacing;
          return (
            <motion.div key={card.title}>
              <motion.button
                initial={{
                  x: 0,
                  scale: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(card);
                }}
                animate={{
                  y: isCurrentActive(card)
                    ? 0
                    : isAnyCardActive()
                      ? 400
                      : card.config.y,
                  x: isCurrentActive(card)
                    ? 0
                    : isAnyCardActive()
                      ? offsetX * 0.4
                      : offsetX,
                  rotate: isCurrentActive(card)
                    ? 0
                    : isAnyCardActive()
                      ? 0.2 * card.config.rotate
                      : card.config.rotate,
                  scale: isCurrentActive(card)
                    ? activeScale
                    : isAnyCardActive()
                      ? 0.7
                      : 1,
                }}
                whileHover={{
                  scale: isCurrentActive(card)
                    ? activeScale
                    : isAnyCardActive()
                      ? 0.7
                      : 1.05,
                }}
                transition={cardSpring}
                style={{
                  width: `var(--width)`,
                  height: `var(--height)`,
                  marginLeft: `calc(var(--width) / -2)`,
                  marginTop: `calc(var(--height) / -2)`,
                  zIndex: isCurrentActive(card) ? 50 : card.config.zIndex,
                }}
                className={cn(
                  "absolute top-1/2 left-1/2 flex cursor-pointer flex-col items-start justify-between overflow-hidden rounded-2xl p-2 md:p-4",
                  card.className,
                )}
              >
                {/* Image now takes up most of the card (h-64 / lg:h-80 instead of h-50) */}
                <div className="relative h-64 w-full overflow-hidden rounded-xl lg:h-80">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="mt-5">
                  <motion.h2
                    layoutId={card.title + "title"}
                    className="font-regular max-w-40 text-left text-base md:text-xl"
                  >
                    {card.title}
                  </motion.h2>
                  <AnimatePresence mode="popLayout">
                    {active?.title === card.title && (
                      <motion.p
                        layoutId={card.title + "description"}
                        initial={{ opacity: 0, x: 20, y: 20, height: 0 }}
                        animate={{ opacity: 1, x: 0, y: 0, height: "auto" }}
                        exit={{ opacity: 0, x: 40, y: 40 }}
                        transition={cardSpring}
                        className="paragraph !text-[13px] text-justify mt-3 max-w-[280px] text-left text-white/80 md:max-w-[340px]"
                      >
                        {card.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cards;