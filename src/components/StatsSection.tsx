import { Folder, Globe, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Folder,
    value: "50+",
    label: "Projects Delivered",
    description: "Successfully shipped products",
  },
  {
    icon: Globe,
    value: "10+",
    label: "Industries Served",
    description: "Diverse domain expertise",
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Design + Tech",
    description: "End-to-end capabilities",
  },
];

const StatsSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Why Work With Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Numbers That Speak
          </h2>
          <p className="text-lg text-muted-foreground">
            We bring together creative excellence and technical expertise to deliver exceptional results.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="relative group text-center p-8 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              
              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
