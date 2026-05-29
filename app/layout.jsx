import "./globals.css"
import {
  Instrument_Sans,
  Inter,
  Bricolage_Grotesque,
} from "next/font/google"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
})

export const metadata = {
  title:
    "PUP ASCII - Association of Students for Computer Intelligence and Integration",
  description:
    "PUP-ASCII is an academic Computer Science organization that fosters excellence, innovation, and integration across fields while empowering students to grow as future technology leaders.",
  icons: {
    icon: [{ url: "/asciilogo.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${instrumentSans.variable}
          ${inter.variable}
          ${bricolage.variable}
          font-sans antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}

