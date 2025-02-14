"use client"

import React, { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Youtube, FileText, Home, Sun, Moon, Menu, X } from "lucide-react"

interface NavigationProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const mainIcons = [
    { icon: <Home size={20} />, href: "#home", title: "Home" },
    { icon: <Github size={20} />, href: "https://github.com/mainak1023", title: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mainak-majumder/", title: "LinkedIn" },
  ]

  const expandedIcons = [
    { icon: <FileText size={20} />, href: "https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing", title: "Resume" },
    {
      icon: mounted ? darkMode ? <Sun size={20} /> : <Moon size={20} /> : null,
      href: "#",
      title: "Theme",
      onClick: toggleDarkMode,
    },
    { icon: <Twitter size={20} />, href: "https://twitter.com", title: "Twitter" },
    { icon: <Youtube size={20} />, href: "https://youtube.com", title: "YouTube" },
  ]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card dark:bg-card-dark backdrop-blur-md border border-border dark:border-border-dark rounded-full px-4 py-2">
        <div className="flex items-center gap-2">
          {mainIcons.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-card-hover dark:hover:bg-card-hover-dark rounded-full transition-all duration-300"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 flex ${isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"}`}
          >
            {expandedIcons.map((item, index) => item.icon && <NavItem key={index} {...item} />)}
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItem({
  href,
  icon,
  title,
  onClick,
}: { href: string; icon: React.ReactNode; title: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="p-2 hover:bg-card-hover dark:hover:bg-card-hover-dark rounded-full transition-all duration-300 group"
      title={title}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: "group-hover:text-primary dark:group-hover:text-primary-dark transition-colors",
      })}
    </a>
  )
}

