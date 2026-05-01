"use client"

import { useState, useCallback, useRef, useEffect } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

export function TextScramble({ text, className = "" }) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const intervalRef = useRef(null)
  const frameRef = useRef(0)

  const scramble = useCallback(() => {
    setIsScrambling(true)
    frameRef.current = 0
    const duration = text.length * 3
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      frameRef.current++
      const progress = frameRef.current / duration
      const revealedLength = Math.floor(progress * text.length)
      const newText = text.split("").map((char, i) => {
        if (char === " ") return " "
        if (i < revealedLength) return text[i]
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      }).join("")
      setDisplayText(newText)
      if (frameRef.current >= duration) {
        clearInterval(intervalRef.current)
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, 30)
  }, [text])

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  return (
    <span
      className={`inline-block cursor-pointer select-none ${className}`}
      onMouseEnter={() => { setIsHovering(true); scramble() }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-150"
          style={{
            color: isScrambling && char !== text[i] ? "rgba(255,255,255,0.5)" : "white",
            transitionDelay: `${i * 10}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}