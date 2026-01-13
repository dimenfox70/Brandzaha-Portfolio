import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accentColor?: "accent" | "highlight" | "primary";
  slug: string;
}

const ProjectCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  accentColor = "accent",
  slug
}: ProjectCardProps) => {
  const accentClasses = {
    accent: "bg-accent/10 text-accent",
    highlight: "bg-highlight/10 text-highlight",
    primary: "bg-primary/10 text-primary",
  };

  const borderAccents = {
    accent: "group-hover:border-accent/30",
    highlight: "group-hover:border-highlight/30",
    primary: "group-hover:border-primary/30",
  };

  return (
    <Link to={`/projects/${slug}`} className="block">
      <div className={`group relative bg-card rounded-2xl border border-border p-8 card-hover cursor-pointer ${borderAccents[accentColor]}`}>
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl ${accentClasses[accentColor]} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="w-7 h-7" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors duration-300" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Link */}
        <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </Link>
  );
};

export default ProjectCard;
