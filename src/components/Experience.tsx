import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Business Development Analyst",
      company: "StudyStash - Internship",
      period: "June 2025 - Present",
      description: [
        "Developed interactive dashboards to visualize trends and insights from raw data, enhancing decision-making processes.",
        "Utilized Cursor AI to create a user-friendly website for effective dashboard display, reducing development time significantly.",
        "Executed web scraping using Playwright test automation, streamlining data collection and analysis for business strategies.",
      ],
    },
    {
      title: "Registration Hub Administrator",
      company: "University of Birmingham",
      period: "Sep 2025 - Oct 2025",
      description: [
        "Supported new students during Welcome Week by verifying passports, visas, and share codes to confirm their right to study.",
        "Assisted with online registration, ID card printing, and resolving student queries.",
        "Ensured accuracy and compliance while delivering a friendly, efficient registration experience.",
      ],
    },
    {
      title: "Data and Product Analyst",
      company: "mmob - Internship",
      period: "Sep 2025 - Oct 2025",
      description: [
       "Worked in-person with the London team to analyse the Embedded Finance API toolkit, identifying integration gaps and performance issues.",
       "Generated and tracked Jira tickets for bugs and product issues, collaborating with developers to ensure timely resolution.",
       "Conducted detailed competitor analysis (2025 landscape) on firms such as Weavr, Solaris, Marqeta, and OpenPayd, benchmarking mmob’s position in the embedding lifecycle.",
       "Produced data-backed insights and visual reports that helped refine mmob’s market strategy and improve API reliability.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "British Airways- Virtual Internship",
      period: "Jan 2025 - Mar 2025",
      description: [
        "Collected and cleaned unstructured data with beautiful soap, automated preparation pipeline.", 
        "Built predictive models(XG Boost) to forecast booking outcomes, improving accuracy by 8%.",
        "Documented methodology and communicated complex data clearly and translated the analytical findings into simple story telling.",
        "Applied statistical concepts ( sampling, balancing with SMOTE , and feature engineering) to handle imbalanced dataset and improve model robustness.",
        "Documented methodology with focus on quantitative analysis and interpretation for stakeholders.",
      ],
    },
      {
      title: "Data Analyst",
      company: "Trainity - Full Time",
      period: "Apr 2024 - Sep 2024",
      description: [
        " Conducted comprehensive data analysis to identify trends and insights, enhancing decision-making processes.", 
        "Developed interactive dashboards that visualized key performance indicators, improving stakeholder engagement.", 
        "Utilized machine learning models to predict future trends, resulting in a 15% increase in forecasting accuracy.",
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
