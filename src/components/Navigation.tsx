import React, { useState } from 'react';
import { FileText, Github, Home, Linkedin, Menu, Sun, Twitter, Youtube } from 'lucide-react';

export function Navigation() {
  const [isHovered, setIsHovered] = useState(false);

  const leftIcons = [
    { icon: <FileText size={20} />, href: "https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing", title: "Resume" },
    { icon: <Sun size={20} />, href: "#", title: "Theme", onClick: () => { } },
  ];

  const centerIcons = [
    { icon: <Home size={20} />, href: "#home", title: "Home" },
    { icon: <Github size={20} />, href: "https://github.com/mainak1023", title: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mainak-majumder/", title: "LinkedIn" },
  ];

  const rightIcons = [
    { icon: <Twitter size={20} />, href: "https://twitter.com", title: "Twitter" },
    { icon: <Youtube size={20} />, href: "https://youtube.com", title: "YouTube" },
  ];

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#1a1a1a]/90 backdrop-blur-md border border-gray-800/50 rounded-full px-4 py-2">
        <div className="flex items-center">
          {/* Left expandable section */}
          <div className={`overflow-hidden transition-all duration-300 flex ${isHovered ? 'w-auto opacity-100 mr-2' : 'w-0 opacity-0'
            }`}>
            {leftIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                onClick={item.onClick}
                className="p-2 hover:bg-gray-800/50 rounded-full transition-all duration-300 text-gray-300 hover:text-white whitespace-nowrap"
                title={item.title}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Center icons */}
          <div className="flex items-center gap-2">
            {centerIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-2 hover:bg-gray-800/50 rounded-full transition-all duration-300 text-gray-300 hover:text-white"
                title={item.title}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Right expandable section */}
          <div className={`overflow-hidden transition-all duration-300 flex ${isHovered ? 'w-auto opacity-100 ml-2' : 'w-0 opacity-0'
            }`}>
            {rightIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-2 hover:bg-gray-800/50 rounded-full transition-all duration-300 text-gray-300 hover:text-white whitespace-nowrap"
                title={item.title}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}