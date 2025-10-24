import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Birmingham",
      year: "2024 - 2025",
      achievements: [
        "Classified: Merit",
        "Dissertation: Hybrid Fraud Detection in PCA- Anonymized CreditCard Transactions Using Unsupervised AnomalyScores and Supervised Learning ",
        "Modules: Python for Data Science, Machine Learning, Storing and Managing Data, Data Visualization, Time Series Forescasting",
      ],
    },
    {
      degree: "Bachelor of Engineering in Computer Science and Technology",
      institution: "K.S Institute of Technology",
      year: "2020 - 2024",
      achievements: [
        "CGPA: 8.12/10.0",
        "Classified: First Class with Distinction",
        
      ],
    },
  ];

  const certifications = [
    "SQL : Intermediate ( HackerRank)",
    "Statistics Foundation 1: The Basics (National Association of State Boards of Accountancy)",
    "Gold Badge in SQL (HackerRank)",
    "Communication with Emotional Intelligence (LinkedIn Learning)",
    "ChatGPT's Operator: Automating Everyday Tasks with AI Agents (LinkedIn Learning)",
    "Presenting Data Effectively to Inform and Inspire (LinkedIn Learning)",
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Degrees */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 md:p-8 card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <p className="text-muted-foreground font-semibold flex items-center gap-2">
                      <BookOpen size={16} className="text-secondary" />
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">{edu.year}</p>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 card-hover">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
