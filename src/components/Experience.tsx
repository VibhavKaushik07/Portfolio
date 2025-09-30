import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "TechCorp Analytics",
      period: "2022 - Present",
      description: [
        "Led data analysis projects resulting in 25% increase in operational efficiency",
        "Developed automated reporting systems using Python and SQL",
        "Collaborated with cross-functional teams to implement data-driven strategies",
        "Mentored junior analysts on best practices and advanced analytics techniques",
      ],
    },
    {
      title: "Data Analyst",
      company: "Digital Insights Inc",
      period: "2020 - 2022",
      description: [
        "Analyzed customer behavior data to improve retention rates by 15%",
        "Created interactive dashboards using Tableau and Power BI",
        "Performed A/B testing and statistical analysis for marketing campaigns",
        "Streamlined data collection processes reducing analysis time by 30%",
      ],
    },
    {
      title: "Junior Data Analyst",
      company: "StartUp Solutions",
      period: "2018 - 2020",
      description: [
        "Conducted exploratory data analysis on various business datasets",
        "Built and maintained SQL databases for analytics purposes",
        "Generated weekly and monthly reports for management",
        "Assisted in developing predictive models for sales forecasting",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-card border border-border/50 rounded-xl p-6 md:p-8 card-hover group"
          >
            <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full glow-effect hidden md:block" />
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase size={18} className="text-primary" />
                  <span className="font-semibold">{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                <Calendar size={18} className="text-secondary" />
                <span>{exp.period}</span>
              </div>
            </div>

            <ul className="space-y-3 ml-4">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="text-muted-foreground flex items-start gap-3 group-hover:text-foreground/80 transition-colors"
                >
                  <span className="text-primary mt-1 font-bold">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
