import ProjectCard from "@/components/ProjectCard";
import { projectCategories } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30 gradient-mesh" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Project Categories
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in diverse domains, bringing design excellence and technical expertise to every project.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectCategories.map((project, index) => (
            <div
              key={project.slug}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard 
                icon={project.icon}
                title={project.title}
                description={project.description}
                features={project.features}
                accentColor={project.accentColor}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
