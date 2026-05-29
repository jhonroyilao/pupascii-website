export default function ArrowIcon({ color = "#0062e4" }) {
  return (
    <span
      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: color }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}