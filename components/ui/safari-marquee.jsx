"use client"

const SVGS = [
  "/folder-a.png",
  "/folder-s.png",
  "/folder-c.png",
  "/folder-i1.png",
  "/folder-i2.png",
   "/folder-l.png",
]

const GAP    = 10   // spacing between cards
const CARD_W = 300  // card box size
const REPS   = 4

const STRIP_W = (CARD_W + GAP) * SVGS.length * REPS

export default function SafariMarquee() {
  const strip = Array.from({ length: REPS }, (_, r) =>
    SVGS.map((src, i) => ({ src, key: `${r}-${i}` }))
  ).flat()

  return (
    <>
      <style>{`
        @keyframes safari-marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-${STRIP_W}px); }
        }
        .safari-marquee-track {
          display: flex;
          gap: ${GAP}px;
          width: max-content;
          animation: safari-marquee-left ${SVGS.length * REPS * 3.8}s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div
  style={{
    position: "relative",   // ← was absolute
    width: "100%",
    height: 400,            // tall enough to show the icons
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  }}
>
        <div className="safari-marquee-track">
          {[...strip, ...strip].map(({ src, key }, i) => (
            <div
              key={`${i}-${key}`}
              style={{ flexShrink: 0, width: CARD_W, height: CARD_W, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img src={src} alt="" aria-hidden="true" style={{ width:800 , height: 800, objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}