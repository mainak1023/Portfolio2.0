const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "PHP", "MySQL"],
    icon: "fas fa-code",
  },
  {
    title: "Design",
    skills: ["HTML", "CSS", "Bootstrap", "Figma"],
    icon: "fas fa-paint-brush",
  },
  {
    title: "Frameworks",
    skills: ["React", "Node", "Spring Boot", "Express"],
    icon: "fas fa-cubes",
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Collaboration", "Adaptability"],
    icon: "fas fa-hands-helping",
  },
]

export function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <i className={`${category.icon} text-3xl text-blue-400`}></i>
                <h3 className="text-xl md:text-2xl font-bold gradient-text">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <p className="text-sm md:text-base">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
