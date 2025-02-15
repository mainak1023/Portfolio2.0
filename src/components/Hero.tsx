<<<<<<< HEAD
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = ["React.js", "JavaScript", "TypeScript", "PHP"]
=======
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const jobTitles = ["Full-Stack Developer", "Tech Enthusiast", "Open Source Contributor"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(jobTitles[index]);
      index = (index + 1) % jobTitles.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);
>>>>>>> 5e705a286d5465bdbd4b37b80bc8baab1ed96cd3

  return (
    <section
      id="home"
      className="relative pt-48 pb-32 bg-black text-white"
    >
<<<<<<< HEAD
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
                className={`bg-card dark:bg-card-dark px-4 py-2 rounded-full text-sm text-muted dark:text-muted-dark transition-all duration-300 ${
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
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark px-8 py-3 rounded-full hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition-all duration-300 transform hover:scale-105"
            >
              Here's My Resume
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
=======
      {/* Floating Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64">
        <img
          src="https://avatars.githubusercontent.com/u/101183982?v=4"
          alt="Mainak Majumder"
          className="w-full h-full rounded-full shadow-2xl transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          Mainak Majumder
        </h2>

        {/* Typewriter effect */}
        <p className="text-2xl md:text-3xl mt-4 text-gray-200 font-medium transition-opacity duration-500">
          {text}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["React.js", "JavaScript", "TypeScript", "PHP"].map((skill) => (
            <span
              key={skill}
              className="bg-white bg-opacity-10 px-6 py-3 rounded-full text-sm text-gray-300 backdrop-blur-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-6 mt-10">
          <a
            href="#contact"
            className="bg-green-500 px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            Let's Work Together
          </a>
          <a
            href="https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing"
            className="bg-blue-500 px-8 py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
          >
            Here's My Resume
          </a>
>>>>>>> 5e705a286d5465bdbd4b37b80bc8baab1ed96cd3
        </div>
      </div>
    </section>
  )
}

