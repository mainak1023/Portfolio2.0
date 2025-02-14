import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Terminal, Laptop } from 'lucide-react';

export function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null);
  const roles = ['Full-Stack Developer', 'Tech Enthusiast', 'Problem Solver'];
  
  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (typingRef.current) {
        if (!isDeleting) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          
          if (currentCharIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
          }
        } else {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
          
          if (currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typingSpeed = 100;
          }
        }
      }
      
      setTimeout(type, isDeleting ? 50 : typingSpeed);
    };
    
    type();
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm">
              <Code size={16} className="mr-2" /> Developer
            </span>
            <span className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm">
              <Terminal size={16} className="mr-2" /> Tech Enthusiast
            </span>
            <span className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">
              <Laptop size={16} className="mr-2" /> Problem Solver
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Mainak Majumder
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            I am a <span ref={typingRef} className="ml-2 text-blue-400"></span>
            <span className="animate-blink ml-1">|</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems. 
            Specializing in modern web technologies and system architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Let's work together
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-[#2a2a2a] transition-all duration-300 transform hover:scale-105"
            >
              View Resume
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}