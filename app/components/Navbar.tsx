"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Code, Menu, X, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  // Handle scroll events to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state based on scroll position
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md py-2" : "bg-gray-900/50 backdrop-blur-sm py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div className="flex-shrink-0 flex items-center" whileHover={{ scale: 1.05 }}>
            <Link
              href="#home"
              className="flex items-center space-x-2 text-xl font-bold group"
              onClick={() => scrollToSection("home")}
            >
              <motion.div whileHover={{ rotate: 20 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <Code className="h-6 w-6 text-blue-500 transition-transform duration-300" />
              </motion.div>
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Deepankar
              </span>
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative
                    ${activeSection === item.href.substring(1) ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}
                  `}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4 p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 mr-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors focus:outline-none"
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <X className="block h-5 w-5" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        initial={false}
        animate={{
          maxHeight: isMenuOpen ? 500 : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/90 backdrop-blur-md">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-blue-900/30 text-blue-400"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.substring(1))
                }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
