import { Settings, BookOpen, Code } from "lucide-react"

const experiences = [
  {
    title: "Professional Journey",
    items: [
      {
        icon: <Settings className="text-blue-500" size={24} />,
        role: "Co-founder & CTO",
        company: "Prime-Dev Technologies Pvt. Ltd.",
        bgColor: "bg-blue-600/10",
      },
      {
        icon: <BookOpen className="text-purple-500" size={24} />,
        role: "Mentor & Educator",
        company: "Guided 20+ students in their coding journey",
        bgColor: "bg-purple-600/10",
      },
    ],
  },
  {
    title: "Academic Background",
    items: [
      {
        icon: <Code className="text-green-500" size={24} />,
        role: "Master in Computer Application",
        company: "Dr B C Roy Engineering College, MAKAUT",
        bgColor: "bg-green-600/10",
      },
      {
        icon: <BookOpen className="text-yellow-500" size={24} />,
        role: "B.Sc in Computer Science",
        company: "Mankar College, The University of Burdwan",
        bgColor: "bg-yellow-600/10",
      },
    ],
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((section, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 gradient-text">{section.title}</h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-4 group">
                    <div
                      className={`p-3 ${item.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">{item.role}</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.company}</p>
                    </div>
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

