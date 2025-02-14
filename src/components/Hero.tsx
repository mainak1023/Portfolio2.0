import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-background to-background-dark dark:from-background-dark dark:to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto">
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://avatars.githubusercontent.com/u/101183982?v=4"
              alt="Mainak Majumder"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg"
            />
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground dark:text-foreground-dark">
              Mainak Majumder
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted dark:text-muted-dark">
              Full-Stack Developer & Tech Enthusiast
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {["React.js", "JavaScript", "TypeScript", "PHP"].map((skill) => (
                <span
                  key={skill}
                  className="bg-card dark:bg-card-dark px-4 py-2 rounded-full text-sm text-muted dark:text-muted-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark px-8 py-3 rounded-full hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition-all duration-300 transform hover:scale-105"
              >
                let's work together
              </a>
              <a
                href="https://drive.google.com/file/d/1wloAj2QOjwcKgaD-Zw9dgzGjcgM3nnIH/view?usp=sharing"
                className="inline-flex items-center gap-2 bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark px-8 py-3 rounded-full hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition-all duration-300 transform hover:scale-105"
              >
                here's my resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
