"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Code, Server, Zap } from "lucide-react"

export function Hero() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const skills = [
    { name: "React.js", icon: Zap },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "PHP", icon: Server },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#111111] to-[#0a0a0a] pt-20"
    >
      <div
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
        style={{
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background dark:bg-background-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          style={{
            clipPath: "circle(50% at 50% 50%)",
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 50}px, ${(mousePosition.y - window.innerHeight / 2) / 50
              }px)`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <div className="mb-8 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="https://avatars.githubusercontent.com/u/101183982?v=4"
              alt="Mainak Majumder"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient-x">
            Mainak Majumder
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-400">Full-Stack Developer & Digital Innovator</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`relative bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:cursor-pointer ${hoveredSkill === skill.name ? "scale-110" : ""
                  }`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <skill.icon className="inline-block mr-2 w-4 h-4" />
                {skill.name}
                {hoveredSkill === skill.name && (
                  <span className="absolute inset-0 bg-blue-500/40 rounded-full animate-ping" />
                )}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Let's Work Together</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            </a>
            <a
              href="https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-[#2a2a2a] text-white px-8 py-3 rounded-lg hover:bg-[#3a3a3a] transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Here's My Resume</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

