import { useState, useEffect } from "react"

export function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(() => {
    let timeoutId
    const update = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }
    const debounced = () => { clearTimeout(timeoutId); timeoutId = setTimeout(update, 250) }
    update()
    window.addEventListener("resize", debounced)
    return () => { window.removeEventListener("resize", debounced); clearTimeout(timeoutId) }
  }, [ref])
  return dimensions
}