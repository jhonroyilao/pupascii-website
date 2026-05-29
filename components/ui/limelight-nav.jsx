"use client"

import React, { useState, useRef, useLayoutEffect } from "react"

export function LimelightNav({
  items = [],
  defaultActiveIndex = 0,
  onTabChange,
  className = "",
  limelightClassName = "",
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const [isReady, setIsReady] = useState(false)
  const navItemRefs = useRef([])
  const limelightRef = useRef(null)

  useLayoutEffect(() => {
    if (items.length === 0) return
    const limelight = limelightRef.current
    const activeItem = navItemRefs.current[activeIndex]
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2
      limelight.style.left = `${newLeft}px`
      if (!isReady) setTimeout(() => setIsReady(true), 50)
    }
  }, [activeIndex, isReady, items])

  const handleClick = (index, onClick) => {
    setActiveIndex(index)
    onTabChange?.(index)
    onClick?.()
  }

  return (
    <nav className={`relative inline-flex items-center h-11 ${className}`}>
      {items.map(({ id, label, href, onClick }, index) => (
        <a  // 👈 this was missing!
          key={id}
          ref={el => (navItemRefs.current[index] = el)}
          href={href}
          onClick={() => handleClick(index, onClick)}
          className="relative z-20 flex h-full cursor-pointer items-center justify-center px-5 transition-all duration-200"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: activeIndex === index ? 500 : 400,
            color: activeIndex === index ? "white" : "rgba(255,255,255,0.65)",
          }}
        >
          {label}
        </a>
      ))}

      {/* Limelight bar */}
      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-12 h-[3px] rounded-full ${limelightClassName}`}
        style={{
          left: "-999px",
          background: "white",
          boxShadow: "0 0 12px 2px rgba(255,255,255,0.8), 0 50px 15px rgba(255,255,255,0.15)",
          transition: isReady ? "left 0.35s ease-in-out" : "none",
        }}
      >
        {/* Cone glow beneath */}
        <div
          className="absolute top-[3px] pointer-events-none"
          style={{
            left: "-30%",
            width: "160%",
            height: "52px",
            clipPath: "polygon(5% 100%, 25% 0, 75% 0, 95% 100%)",
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.25), transparent)",
          }}
        />
      </div>
    </nav>
  )
}