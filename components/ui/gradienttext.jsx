import clsx from "clsx"

export default function GradientText({
  colors = ["#0062E4", "#3DCBFF"],
  animationSpeed = 4,
  className = "",
  style,
  children,
}) {
  return (
    <span
      className={clsx("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "200% auto",
        animation: `gradient-text ${animationSpeed}s ease infinite`,
        ...style,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient-text {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </span>
  )
}
