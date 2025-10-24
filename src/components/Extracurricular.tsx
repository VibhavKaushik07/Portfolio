import { Users, Trophy, Heart, Lightbulb } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Volunteer Organizer",
      organization: "British Heart Foundation",
      description: "Help BHF organize community events and fundraisers to support heart disease research and awareness.",
      period: "2021 - Present",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Kaggle Competitions",
      organization: "Kaggle",
      description: "Active participant in data science competitions, achieved Expert rank with top 5% finishes in multiple challenges.",
      period: "2024 - Present",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: " Data Analyst Volunteer",
      organization: "Co-Lab",
      description: "Helped with data cleaning, analysis, and visualization for social impact projects focused on community development.",
      period: " Oct 2025 - Present",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Active SQL Contributor",
      organization: "HackeRank",
      description: "Regularly solve SQL challenges and contribute to discussions, maintaining a 95% accuracy rate across various problem sets.",
      period: "2024 - Present",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Extracurricular Activities
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-card border border-border/50 rounded-xl p-6 card-hover group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                {activity.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {activity.title}
                </h3>
                <p className="text-secondary font-semibold text-sm">
                  {activity.organization}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              {activity.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {activity.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;
