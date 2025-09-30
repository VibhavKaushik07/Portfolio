import { Code2, Database, BarChart3, Brain, Check } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "SQL", "R", "JavaScript"],
    },
    {
      icon: Database,
      title: "Data Tools",
      skills: ["Tableau", "Power BI", "Excel", "Apache Spark"],
    },
    {
      icon: BarChart3,
      title: "Analysis",
      skills: ["Statistical Analysis", "Data Visualization", "A/B Testing", "Business Intelligence"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "Predictive Modeling", "NLP"],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              key={index}
              className="h-64 perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 bg-card border border-border/50 rounded-xl p-6 backface-hidden flex flex-col items-center justify-center text-center">
                  <div className="text-primary mb-4">
                    <IconComponent className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">Hover to see skills</p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-card/80 border border-primary/30 rounded-xl p-6 backface-hidden rotate-y-180 flex flex-col justify-center">
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
