const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: "fab fa-python" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "PHP", icon: "fab fa-php" },
      { name: "MySQL", icon: "fas fa-database" }
    ],
    icon: "fas fa-code",
  },
  {
    title: "Design",
    skills: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "Figma", icon: "fas fa-palette" }
    ],
    icon: "fas fa-paint-brush",
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: "fab fa-react" },
      { name: "Node", icon: "fab fa-node" },
      { name: "Spring Boot", icon: "fas fa-leaf" },
      { name: "Express", icon: "fas fa-server" }
    ],
    icon: "fas fa-cubes",
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: "fas fa-comments" },
      { name: "Leadership", icon: "fas fa-user-tie" },
      { name: "Collaboration", icon: "fas fa-people-arrows" },
      { name: "Adaptability", icon: "fas fa-sync" }
    ],
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
                    <i className={`${skill.icon} text-lg text-green-400`}></i>
                    <p className="text-sm md:text-base">{skill.name}</p>
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
