import React from 'react';

const projects = [
  {
    title: "Spotify Clone",
    description: "A clone of Spotify's web player built using React.js.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "White-board",
    description: "An interactive whiteboard application built using React.js.",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=400",
    tags: ["React", "Canvas API", "Socket.io"]
  },
  {
    title: "QR Code Generator",
    description: "A web application that generates QR codes for given links or text.",
    image: "https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?auto=format&fit=crop&q=80&w=400",
    tags: ["JavaScript", "QR Code API"]
  },
  
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Projects</h2>
        <div className="grid grid-flow-col px-8 auto-cols-[minmax(300px,1fr)] gap-8 overflow-x-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-2xl overflow-hidden card-hover group transform transition duration-500 hover:scale-105 min-w-[300px]">
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex pt-2 gap-4">
                  <a
                    href="#"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-s-xl hover:bg-blue-700 transition-colors text-center text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-[#2a2a2a] text-white px-4 py-2 rounded-e-xl hover:bg-[#3a3a3a] transition-colors text-center text-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
