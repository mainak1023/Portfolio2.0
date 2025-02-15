import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = ["React.js", "JavaScript", "TypeScript", "PHP"]

  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-background to-background-dark dark:from-background-dark dark:to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <div className="mb-8 relative group">
            <img
              src="https://avatars.githubusercontent.com/u/101183982?v=4"
              alt="Mainak Majumder"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground dark:text-foreground-dark">
            Mainak Majumder
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted dark:text-muted-dark">Full-Stack Developer</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`bg-[#1a1a1a]/90 dark:bg-[#1a1a1a]/90 px-4 py-2 rounded-full text-sm text-muted dark:text-muted-dark transition-all duration-300 hover:cursor-pointer ${
                  hoveredSkill === skill ? "scale-110" : ""
                }`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-600 dark:bg-green-600 text-primary-foreground dark:text-primary-foreground-dark px-8 py-3 rounded-full hover:bg-green-700 dark:hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
              
            </a>
            <a
              href="https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark px-8 py-3 rounded-full hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition-all duration-300 transform hover:scale-105"
            >
              Here's My Resume
              
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

