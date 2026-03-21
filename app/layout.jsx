import './globals.css'

export const metadata = {
  title: 'PUP ASCII - Association of Students for Computer Intelligence and Integration',
  description: 'PUP-ASCII is an academic Computer Science organization that fosters excellence, innovation, and integration across fields while empowering students to grow as future technology leaders.',

  icons: {
    icon: [
      {
        url: '/asciilogo.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
