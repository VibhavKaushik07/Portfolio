import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";


const Hero = () => {
  const roles = ["Data Analyst", "Problem Solver", "Data Enthusiast","Story Teller"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* 1) Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        autoPlay
        muted 
        loop
        playsInline
      >
        <source src="/videos/london-loop-small.mp4" type="video/mp4" />
      </video>
      {/* 2) Extra Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary text-lg tracking-wider uppercase">Data Professional</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="relative inline-block bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                Transforming Data
              </span>
              <br />
              <span className="text-foreground">Into Insights</span>
            </h1>
          </div>

          <div className="text-2xl md:text-3xl text-center max-w-2xl mx-auto h-12">
            <span className="text-muted-foreground">I'm a </span>
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="text-primary animate-pulse">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#summary"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-foreground font-semibold rounded-lg glow-effect hover:scale-105 transition-all"
            >
              View Portfolio
            </a>
            <a
              href="#experience"
              className="px-8 py-4 border-2 border-primary text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-all"
            >
              Experience
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-primary" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
