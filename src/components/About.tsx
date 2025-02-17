import { Briefcase, GraduationCap, Building, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Professional Journey",
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    items: [
      {
        role: "Founder and CEO",
        company: "Prime-Dev Technologies",
        duration: "January 2025 - Current",
        icon: <Building className="w-5 h-5 text-blue-300" />,
      },
      {
        role: "Web-Dev Intern",
        company: "CodSoft",
        duration: "May 2024 - June 2024",
        icon: <Building className="w-5 h-5 text-blue-300" />,
      },
      {
        role: "Web-Dev Intern",
        company: "CodersCave",
        duration: "April 2024 - May 2024",
        icon: <Building className="w-5 h-5 text-blue-300" />,
      },
      {
        role: "Computer Instructor",
        company: "Computer Infotech",
        duration: "August 2022 - March 2024",
        icon: <Building className="w-5 h-5 text-blue-300" />,
      },
    ],
  },
  {
    title: "Academic Background",
    icon: <GraduationCap className="w-8 h-8 text-green-400" />,
    items: [
      {
        role: "Master in Computer Application",
        company: "Dr B C Roy Engineering College, MAKAUT",
        details: "SGPA: 6.50",
        icon: <GraduationCap className="w-5 h-5 text-green-300" />,
      },
      {
        role: "BSc. (Hon) in Computer Science",
        company: "Mankar College, University of Burdwan",
        details: "CGPA: 9.06",
        icon: <GraduationCap className="w-5 h-5 text-green-300" />,
      },
      {
        role: "10+2th",
        company: "Budbud Mahakali High School, WBCHSE",
        details: "Percentage: 79%, 2019",
        icon: <GraduationCap className="w-5 h-5 text-green-300" />,
      },
      {
        role: "10th",
        company: "Ramkrishna Ashrama Vidya Pitha, WBBSE",
        details: "Percentage: 86%, 2017",
        icon: <GraduationCap className="w-5 h-5 text-green-300" />,
      },
    ],
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div
                  className="p-3 bg-opacity-20 rounded-full mr-4"
                  style={{ backgroundColor: index === 0 ? "rgba(59, 130, 246, 0.2)" : "rgba(16, 185, 129, 0.2)" }}
                >
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
                          {item.role}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.company}</p>
                        {"duration" in item && (
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.duration}
                          </p>
                        )}
                        {"details" in item && <p className="text-sm text-gray-500 mt-1">{item.details}</p>}
                      </div>
                    </div>
                    {itemIndex < section.items.length - 1 && <div className="w-px h-8 bg-gray-700 ml-2 mt-2"></div>}
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

