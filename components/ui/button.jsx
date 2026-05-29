export default function Button({ href, variant = "primary", children, className = "" }) {
  const base = "inline-flex items-center gap-2 font-semibold text-sm rounded-full transition-all duration-200"

  const variants = {
    primary: "bg-white text-[#0062e4] hover:-translate-y-0.5 hover:shadow-xl px-7 py-3",
    outline: "bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 px-7 py-3",
    solid: "bg-[#0062e4] text-white hover:bg-[#004aab] hover:-translate-y-0.5 px-7 py-3",
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}