"use client"
import React, { useCallback, useMemo, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { v4 as uuidv4 } from "uuid"
import { cn } from "@/lib/utils"
import { useDimensions } from "@/hooks/use-debounced-dimensions"

const PixelDot = React.memo(({ id, size, fadeDuration, delay, className }) => {
  const controls = useAnimationControls()
  const animatePixel = useCallback(() => {
    controls.start({ opacity: [1, 0], transition: { duration: fadeDuration / 1000, delay: delay / 1000 } })
  }, [])
  const ref = useCallback(node => { if (node) node.__animatePixel = animatePixel }, [animatePixel])
  return (
    <motion.div id={id} ref={ref} className={cn("cursor-none", className)}
      style={{ width: `${size}px`, height: `${size}px` }}
      initial={{ opacity: 0 }} animate={controls} />
  )
})
PixelDot.displayName = "PixelDot"

export function PixelTrail({ pixelSize = 20, fadeDuration = 500, delay = 0, className, pixelClassName }) {
  const containerRef = useRef(null)
  const dimensions = useDimensions(containerRef)
  const trailId = useRef(uuidv4())
  const columns = useMemo(() => Math.ceil(dimensions.width / pixelSize), [dimensions.width, pixelSize])
  const rows = useMemo(() => Math.ceil(dimensions.height / pixelSize), [dimensions.height, pixelSize])

  const handleMouseMove = useCallback(e => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) / pixelSize)
    const y = Math.floor((e.clientY - rect.top) / pixelSize)
    const el = document.getElementById(`${trailId.current}-pixel-${x}-${y}`)
    if (el?.__animatePixel) el.__animatePixel()
  }, [pixelSize])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 w-full h-full pointer-events-auto", className)}
      onMouseMove={handleMouseMove}>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex">
          {Array.from({ length: columns }).map((_, c) => (
            <PixelDot key={`${c}-${r}`} id={`${trailId.current}-pixel-${c}-${r}`}
              size={pixelSize} fadeDuration={fadeDuration} delay={delay} className={pixelClassName} />
          ))}
        </div>
      ))}
    </div>
  )
}