import { ArrowRight } from "lucide-react"

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
    <section
      id="home"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-background-dark dark:from-background-dark dark:to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground dark:text-foreground-dark">
            Mainak Majumder
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted dark:text-muted-dark">
            Full-Stack Developer & Tech Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["React.js", "JavaScript", "TypeScript", "PHP"].map((skill) => (
              <span
                key={skill}
                className="bg-card dark:bg-card-dark px-4 py-2 rounded-full text-sm text-muted dark:text-muted-dark"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4"> {/* Added flex container */}
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
    </section>
  );
}