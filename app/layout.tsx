import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deepankar Mishra - Cyber Security & Full-Stack Developer",
  description:
    "Portfolio of Deepankar Mishra, a cyber security specialist and full-stack developer with expertise in web design and development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
