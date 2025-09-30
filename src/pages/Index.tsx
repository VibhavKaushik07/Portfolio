import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular";
import Navigation from "@/components/Navigation";

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <main className="container mx-auto px-4 py-16 space-y-32">
        <section ref={addToRefs} id="summary">
          <Summary />
        </section>
        <section ref={addToRefs} id="experience">
          <Experience />
        </section>
        <section ref={addToRefs} id="skills">
          <Skills />
        </section>
        <section ref={addToRefs} id="education">
          <Education />
        </section>
        <section ref={addToRefs} id="extracurricular">
          <Extracurricular />
        </section>
      </main>
      <footer className="border-t border-border/50 py-8 mt-32">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Data Portfolio. Built with passion for data.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
