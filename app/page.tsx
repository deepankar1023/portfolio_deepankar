"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Image from "next/image"
import { motion, useScroll, useInView } from "framer-motion"
import {
  ArrowRight,
  ExternalLink,
  Download,
  GitlabIcon as GitHub,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Award,
  Code,
  Server,
  Database,
  BookOpen,
  Trophy,
  Users,
  Eye,
} from "lucide-react"
import { useRef } from "react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const iconAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

// Animated section component
const AnimatedSection = ({ children, id, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp}>
        {children}
      </motion.div>
    </section>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)

  // Update scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollProgress(value)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-[#0c1322] text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 relative">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Background decorative elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />

          <motion.div className="relative z-10" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              variants={fadeInUp}
              className="inline-block mb-2 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium"
            >
              Hi, I'm
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-400 text-transparent bg-clip-text animate-gradient"
            >
              Deepankar Mishra
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-2xl text-blue-300/90 mb-8 max-w-2xl mx-auto">
              Cyber Security | Full-Stack Developer | Web Designer
            </motion.p>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-10 flex-wrap">
              <motion.a
                href="#projects"
                className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/Deepankar_Mishra_Resume.pdf"
                download="Deepankar_Mishra_Resume.pdf"
                className="group border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8 flex-wrap">
              <motion.a
                href="mailto:deepankarmishra20@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4" />
                <span>deepankarmishra20@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+917706046859"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4" />
                <span>+91 7706046859</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mishra-deepankar10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className="w-4 h-4" />
                <span>mishra-deepankar10</span>
              </motion.a>
              <motion.a
                href="https://github.com/deepankar1023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <GitHub className="w-4 h-4" />
                <span>deepankar1023</span>
              </motion.a>
            </motion.div>

            {/* Tech Icons with hover effects */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex justify-center gap-8 sm:gap-10 mt-12 opacity-80"
            >
              <motion.div variants={iconAnimation} className="group relative">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-900/30 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-900/50">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Web Dev
                </span>
              </motion.div>

              <motion.div variants={iconAnimation} className="group relative">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-900/30 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-900/50">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Cyber Security
                </span>
              </motion.div>

              <motion.div variants={iconAnimation} className="group relative">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-900/30 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-900/50">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  MERN Stack
                </span>
              </motion.div>

              <motion.div variants={iconAnimation} className="group relative">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-900/30 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-900/50">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Machine Learning
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <AnimatedSection id="about" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0c1322] to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-shrink-0 relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Deepankar Mishra"
                width={200}
                height={200}
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-gray-800"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>

            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              I'm a Computer Science and Engineering student specializing in Cyber Security at Indian Institute of
              Information Technology, Kottayam. With experience in web design and development, I build secure, scalable
              solutions that protect digital assets while delivering exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">B.Tech in CSE (Cyber Security)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">CGPA: 7.68/10.0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">Web/Graphics Designer at AICLEX</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-300">CodeChef 2-star (Top 15%)</span>
              </div>
            </div>

            <motion.div
              className="flex gap-3 mb-6 flex-wrap"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeInUp}
                className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md text-blue-300 hover:bg-gray-800 transition-colors"
              >
                Next.js
              </motion.span>
              <motion.span
                variants={fadeInUp}
                className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md text-blue-300 hover:bg-gray-800 transition-colors"
              >
                TypeScript
              </motion.span>
              <motion.span
                variants={fadeInUp}
                className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md text-blue-300 hover:bg-gray-800 transition-colors"
              >
                MERN Stack
              </motion.span>
              <motion.span
                variants={fadeInUp}
                className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md text-blue-300 hover:bg-gray-800 transition-colors"
              >
                Cyber Security
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="italic text-blue-300 border-l-2 border-blue-500 pl-4 py-1"
            >
              "Driven by curiosity, secured by design."
            </motion.p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-24 relative bg-[#0d1525]">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0d1525]"></div>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Education
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">My academic journey and qualifications</p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-blue-300">
                  Indian Institute of Information Technology, Kottayam
                </h3>
                <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">Nov 2022 – May 2026</span>
              </div>
              <h4 className="text-gray-300 mb-4">B.Tech in Computer Science and Engineering (Cyber Security)</h4>
              <p className="text-gray-400 mb-2">CGPA: 7.68/10.0</p>
              <div className="mt-4">
                <h5 className="text-blue-300 mb-2">Relevant Coursework:</h5>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Digital Forensics",
                    "Operating Systems",
                    "Computer Networks",
                    "Machine Learning",
                    "Risk Management",
                    "Economics",
                    "Financial Crime",
                    "Cloud Computing",
                    "Cryptography",
                  ].map((course, index) => (
                    <motion.span
                      key={index}
                      variants={fadeInUp}
                      className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50"
                    >
                      {course}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-blue-300">Delhi Public School, Varanasi</h3>
                <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">May 2019 – June 2021</span>
              </div>
              <h4 className="text-gray-300 mb-4">Senior Secondary (CBSE)</h4>
              <p className="text-gray-400">Percentage (12th): 90.6%</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0d1525] to-[#111827]"></div>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Experience
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">My professional journey in web design and development</p>
          </motion.div>

          <motion.div
            className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
          >
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-blue-300">AICLEX TECHNOLOGIES LLP</h3>
              <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">June 2024 – Present</span>
            </div>
            <h4 className="text-gray-300 mb-4">Web/Graphics Designer</h4>
            <motion.ul
              className="list-disc list-inside text-gray-300 space-y-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={fadeInUp}>
                Designed brand-aligned marketing assets that increased client engagement by 30% and improved conversion
                rates by 22%
              </motion.li>
              <motion.li variants={fadeInUp}>
                Developed 2 responsive websites with 98% mobile compatibility and average page load times under 2
                seconds
              </motion.li>
              <motion.li variants={fadeInUp}>
                Streamlined client collaboration process, reducing project delivery time by 40% while maintaining 100%
                client satisfaction rate
              </motion.li>
              <motion.li variants={fadeInUp}>
                Conducted UX research with 50+ participants, implementing findings that improved user retention by 35%
                across client portfolios
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-24 relative bg-[#0d1525]">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#111827] to-[#0d1525]"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Projects
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Showcasing my technical skills and problem-solving abilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              className="group bg-gradient-to-b from-[#1a2233] to-[#232b39] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-40 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 flex items-center justify-center relative overflow-hidden group-hover:h-48 transition-all duration-500">
                <motion.div
                  className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Code className="h-8 w-8 text-blue-400" />
                </motion.div>

                {/* Screenshot Preview Button */}
                <button
                  className="absolute bottom-4 right-4 bg-gray-800/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-900/80"
                  onClick={() => {
                    const images = ['/img2.png', '/img3.png'];
                    images.forEach(img => window.open(img, '_blank'));
                  }}
                  aria-label="View project screenshot"
                >
                  <Eye className="h-5 w-5 text-blue-300" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors">
                  CodeCraft
                </h3>
                <motion.div
                  className="flex gap-2 mb-4 flex-wrap"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {["Next.js", "TypeScript", "Tailwind CSS", "Monaco Editor"].map((tech, index) => (
                    <motion.span
                      key={index}
                      variants={fadeInUp}
                      className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-gray-300 mb-4 text-sm">
                  Built a multi-language code editor with real-time syntax highlighting, Judge0 API, and GitHub
                  integration, reducing setup time by 40% and enabling collaborative coding with 90% user satisfaction.
                </p>
                <p className="text-gray-300 mb-4 text-sm">
                  Achieved sub-second compilation for 100+ concurrent users with responsive dark/light UI themes and
                  performance-optimized execution environment.
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                    whileHover={{ scale: 1.05, x: 3 }}
                  >
                    <GitHub className="w-4 h-4" /> Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                    whileHover={{ scale: 1.05, x: 3 }}
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="group bg-gradient-to-b from-[#1a2233] to-[#232b39] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-40 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 flex items-center justify-center relative overflow-hidden group-hover:h-48 transition-all duration-500">
                <motion.div
                  className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Server className="h-8 w-8 text-blue-400" />
                </motion.div>

                {/* Screenshot Preview Button */}
                <button
                  className="absolute bottom-4 right-4 bg-gray-800/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-900/80"
                  onClick={() => window.open("/.png", "_blank")}
                  aria-label="View project screenshot"
                >
                  <Eye className="h-5 w-5 text-blue-300" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors">
                  College Canteen Management System - CHOWK
                </h3>
                <motion.div
                  className="flex gap-2 mb-4 flex-wrap"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {["MongoDB", "Express", "React", "Node.js"].map((tech, index) => (
                    <motion.span
                      key={index}
                      variants={fadeInUp}
                      className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-800/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed secure JWT-authenticated platform with real-time inventory, reducing unauthorized access by
                  95% and food waste by 20%.
                </p>
                <p className="text-gray-300 mb-4 text-sm">
                  Handled 1,000+ daily users with dynamic menus, cutting wait times by 50%, kitchen errors by 40%, and
                  boosting feature adoption by 15%.
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                    whileHover={{ scale: 1.05, x: 3 }}
                  >
                    <GitHub className="w-4 h-4" /> Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                    whileHover={{ scale: 1.05, x: 3 }}
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection id="achievements" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0d1525] to-[#111827]"></div>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Achievements
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">Recognition and accomplishments in my journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors flex"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <motion.div className="mr-4 flex-shrink-0" whileHover={{ rotate: 10, scale: 1.1 }}>
                <Trophy className="h-10 w-10 text-yellow-500" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">CodeChef 2-star</h3>
                <p className="text-gray-300 text-sm">
                  Top 15% percentile with 1479 peak rating; solved 100+ problems including 25+ medium/hard difficulty
                  DSA challenges
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors flex"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <motion.div className="mr-4 flex-shrink-0" whileHover={{ rotate: -10, scale: 1.1 }}>
                <Award className="h-10 w-10 text-blue-400" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">Machine Learning Certification</h3>
                <p className="text-gray-300 text-sm">
                  Udemy - Mastered predictive modeling techniques with 95%+ accuracy in final capstone project
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors flex"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <motion.div className="mr-4 flex-shrink-0" whileHover={{ rotate: 10, scale: 1.1 }}>
                <Code className="h-10 w-10 text-green-400" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">JavaScript Certification</h3>
                <p className="text-gray-300 text-sm">
                  Scaler - Built 5 production-ready applications implementing modern ES6+ features and React framework
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors flex"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <motion.div className="mr-4 flex-shrink-0" whileHover={{ rotate: -10, scale: 1.1 }}>
                <Users className="h-10 w-10 text-purple-400" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">Inter-IIIT Tournament MVP</h3>
                <p className="text-gray-300 text-sm">
                  Selected as best player among 200+ athletes in national inter-IIIT tournament
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Leadership Section */}
      <AnimatedSection id="leadership" className="py-24 relative bg-[#0d1525]">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#111827] to-[#0d1525]"></div>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Leadership & Extracurricular
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">Activities and roles that showcase my leadership abilities</p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-blue-300">Techno-Cultural Club Leader</h3>
                <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">2023–2025</span>
              </div>
              <h4 className="text-gray-300 mb-4">IIIT Kottayam</h4>
              <p className="text-gray-300">
                Led multiple techno-cultural clubs, organizing 5+ workshops and events for 500+ students in technical
                and creative skill development
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-blue-300">Sports Leadership</h3>
                <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">2023–2024</span>
              </div>
              <h4 className="text-gray-300 mb-4">Inter-IIIT Tournament MVP</h4>
              <motion.ul
                className="list-disc list-inside text-gray-300 space-y-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={fadeInUp}>
                  Selected as best player among 200+ athletes in national inter-IIIT tournament
                </motion.li>
                <motion.li variants={fadeInUp}>
                  Mentored 5 junior athletes, improving team's win rate from 20% to 82% within one season
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0d1525] to-[#111827]"></div>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Contact Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl">Let's connect and discuss potential opportunities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <h3 className="text-xl font-bold mb-6 text-blue-300">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <h3 className="text-xl font-bold mb-6 text-blue-300">Contact Information</h3>
              <div className="space-y-4">
                <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }}>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a href="mailto:deepankarmishra20@gmail.com" className="text-blue-400 hover:text-blue-300">
                      deepankarmishra20@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }}>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <a href="tel:+917706046859" className="text-blue-400 hover:text-blue-300">
                      +91 7706046859
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }}>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-gray-400">Gorakhpur, Uttar Pradesh</p>
                  </div>
                </motion.div>

                <div className="pt-6">
                  <h4 className="text-gray-300 font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://linkedin.com/in/mishra-deepankar10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-5 w-5 text-blue-400" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/deepankar1023"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <GitHub className="h-5 w-5 text-blue-400" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 bg-[#0a101e] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-400">© {new Date().getFullYear()} Deepankar Mishra. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with Next.js, Tailwind CSS, and React</p>
        </div>
      </footer>
    </main>
  )
}
