"use client"

import { useState, useEffect } from "react"
import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

