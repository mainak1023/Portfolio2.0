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

  return (
    <section
      id="home"
      className="relative pt-48 pb-32 bg-black text-white"
    >
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
        </div>
      </div>
    </section>
  );
}
