import { Code2, Database, BarChart3, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 95 },
        { name: "R", level: 75 },
        { name: "JavaScript", level: 70 },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Tools",
      skills: [
        { name: "Tableau", level: 88 },
        { name: "Power BI", level: 85 },
        { name: "Excel", level: 92 },
        { name: "Apache Spark", level: 72 },
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analysis",
      skills: [
        { name: "Statistical Analysis", level: 87 },
        { name: "Data Visualization", level: 90 },
        { name: "A/B Testing", level: 83 },
        { name: "Business Intelligence", level: 88 },
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 70 },
        { name: "Predictive Modeling", level: 78 },
        { name: "NLP", level: 68 },
      ],
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
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-card border border-border/50 rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary">{category.icon}</div>
              <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out glow-effect"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
