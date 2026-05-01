import { useEffect, useState } from 'react'

export function TextScramble({ text, className = '', speed = 50 }) {
  const [displayText, setDisplayText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!text) return

    setIsAnimating(true)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
    let iterations = 0
    const maxIterations = text.length * 2

    const interval = setInterval(() => {
      setDisplayText(prev => {
        return text
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return char
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      })

      iterations += 1 / 3

      if (iterations >= maxIterations) {
        clearInterval(interval)
        setDisplayText(text)
        setIsAnimating(false)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span className={className}>
      {displayText}
    </span>
  )
}