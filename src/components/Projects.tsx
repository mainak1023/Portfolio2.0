import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Redesign - MCCS",
    description: "Redesigned the website of Computer Science Department, Mankar College.",
    image: "https://github.com/mainak1023/Portfolio2.0/blob/master/assests/project1.jpg?raw=true",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Event Page for Social Event Lahari",
    description: "A website to showcase the event details & all!",
    image: "https://github.com/mainak1023/Portfolio2.0/blob/master/assests/project2.jpg?raw=true",
    tags: ["React", "Canvas API", "Socket.io"]
  },
  {
    title: "Website of Applied Physio",
    description: "Designed the UI for the web application of Applied Physio.",
    image: "https://github.com/mainak1023/Portfolio2.0/blob/master/assests/project3.jpg?raw=true",
    tags: ["UI/UX", "React", "Tailwind CSS"]
  },
  {
    title: "Interactive Quiz Game",
    description: "A fun and interactive quiz game built using JavaScript.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400",
    tags: ["JavaScript", "Web Animations"]
  },
  {
    title: "Task Management App",
    description: "A comprehensive task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
    tags: ["React", "Firebase", "Material-UI"]
  }
];

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Projects</h2>
        <div className="relative max-w-7xl mx-auto">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-[#1a1a1a] p-2 rounded-full shadow-lg hover:bg-[#2a2a2a] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-[#1a1a1a] p-2 rounded-full shadow-lg hover:bg-[#2a2a2a] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar"
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-card bg-[#1a1a1a] rounded-2xl overflow-hidden card-hover group w-[300px] flex-shrink-0"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
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
                        <span
                          key={tagIndex}
                          className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex pt-2 gap-4">
                      <a
                        href="#"
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="flex-1 bg-[#2a2a2a] text-white px-4 py-2 rounded-lg hover:bg-[#3a3a3a] transition-colors text-center text-sm"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}