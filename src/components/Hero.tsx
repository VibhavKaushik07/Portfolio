import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

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

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Data Analyst | Business Intelligence | Machine Learning Enthusiast
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#summary"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-lg glow-effect hover:scale-105 transition-all"
            >
              View Portfolio
            </a>
            <a
              href="#experience"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
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
