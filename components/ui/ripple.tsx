import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.4, // Slightly bumped up opacity for soft blues
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.04
        const animationDelay = `${i * 0.06}s`
        const borderStyle = "solid"

        return (
          <div
            key={i}
            // Changed bg-foreground/25 to bg-blue-500/5 for a subtle blue radial fill
            className="animate-ripple absolute rounded-full border bg-blue-500/5 shadow-inner"
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.max(opacity, 0), // Prevent negative values
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                // Set explicitly to a soft blue border
                borderColor: "rgba(96, 165, 250, 0.3)", 
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Ripple.displayName = "Ripple"