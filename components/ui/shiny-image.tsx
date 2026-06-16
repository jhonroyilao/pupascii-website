"use client"

import React from "react"
import Image, { type ImageProps } from "next/image"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

interface ShinyImageProps extends ImageProps {
  className?: string
  wrapperClassName?: string
}

export function ShinyImage({
  className,
  wrapperClassName,
  ...props
}: ShinyImageProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[300px]",
        "transition-all duration-500",
        "hover:scale-[1.02]",
        wrapperClassName
      )}
    >
      {/* glow layer */}
      <div
        className="
          absolute inset-0 rounded-2xl
          transition-all duration-500
          hover:shadow-[0px_0px_45px_rgba(71,184,255,0.65),0px_30px_60px_-20px_rgba(58,125,233,0.5)]
        "
      />

      {/* image */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image {...props} className={cn("object-cover", className)} />
      </div>
    </div>
  )
}