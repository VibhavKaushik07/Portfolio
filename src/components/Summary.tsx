import { Target, TrendingUp, Database } from "lucide-react";

const Summary = () => {
  const highlights = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Expertise in extracting actionable insights from complex datasets",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Creating dashboards and reports that drive business decisions",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Using data-driven approaches to solve real-world challenges",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Professional Summary
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
          Passionate data professional with a strong foundation in statistical analysis, 
          data visualization, and machine learning. Experienced in transforming raw data 
          into meaningful insights that drive strategic business decisions. Proficient in 
          Python, SQL, and various BI tools, with a track record of delivering impactful 
          data solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
