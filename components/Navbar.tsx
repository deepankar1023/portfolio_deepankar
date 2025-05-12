"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-white font-bold text-xl">
        Deepankar Mishra
      </Link>
      <div className="space-x-4">
        <Link href="#home" className="text-gray-300 hover:text-white">
          Home
        </Link>
        <Link href="#about" className="text-gray-300 hover:text-white">
          About
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  )
}
