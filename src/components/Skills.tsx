"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: "fab fa-python", link: "https://www.w3schools.com/python/" },
      { name: "JavaScript", icon: "fab fa-js", link: "https://www.w3schools.com/js/" },
      { name: "PHP", icon: "fab fa-php", link: "https://www.w3schools.com/php/" },
      { name: "MySQL", icon: "fas fa-database", link: "https://www.w3schools.com/mysql/" },
    ],
    icon: "fas fa-code",
    color: "from-blue-500 to-cyan-400",
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "bg-blue-500/20",
  },
  {
    title: "Design",
    skills: [
      { name: "HTML", icon: "fab fa-html5", link: "https://www.w3schools.com/html/" },
      { name: "CSS", icon: "fab fa-css3-alt", link: "https://www.w3schools.com/css/" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", link: "https://www.w3schools.com/bootstrap/" },
      { name: "Figma", icon: "fas fa-palette", link: "https://www.figma.com/resources/learn-design/" },
    ],
    icon: "fas fa-paint-brush",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    hoverColor: "bg-purple-500/20",
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: "fab fa-react", link: "https://react.dev/learn" },
      { name: "Node", icon: "fab fa-node", link: "https://nodejs.org/en/learn" },
      { name: "Spring Boot", icon: "fas fa-leaf", link: "https://spring.io/guides" },
      { name: "Express", icon: "fas fa-server", link: "https://expressjs.com/en/starter/installing.html" },
    ],
    icon: "fas fa-cubes",
    color: "from-green-500 to-emerald-400",
    textColor: "text-green-500",
    bgColor: "bg-green-500/10",
    hoverColor: "bg-green-500/20",
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: "fas fa-comments", link: "https://www.mindtools.com/pages/article/newCS_99.htm" },
      { name: "Leadership", icon: "fas fa-user-tie", link: "https://www.mindtools.com/pages/article/leadership.htm" },
      { name: "Collaboration", icon: "fas fa-people-arrows", link: "https://www.atlassian.com/blog/teamwork" },
      {
        name: "Adaptability",
        icon: "fas fa-sync",
        link: "https://www.indeed.com/career-advice/career-development/adaptability-skills",
      },
    ],
    icon: "fas fa-hands-helping",
    color: "from-amber-500 to-orange-400",
    textColor: "text-amber-500",
    bgColor: "bg-amber-500/10",
    hoverColor: "bg-amber-500/20",
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Skills & Expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`aspect-square bg-[#1a1a1a] backdrop-blur-sm p-6 rounded-2xl transition-all duration-700 shadow-lg 
              transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} flex flex-col`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <i className={`${category.icon} text-2xl ${category.textColor}`}></i>
                  <h3 className="text-xl md:text-2xl font-bold ${category.textColor}">{category.title}</h3>
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-4 flex-grow grid grid-cols-1 content-start">
                {category.skills.map((skill, skillIndex) => (
                  <a
                    key={skillIndex}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1 text-gray-300 hover:text-white"
                  >
                    <i className={`${skill.icon} text-lg text-green-400`}></i>
                    <p className="text-sm md:text-base">{skill.name}</p>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}