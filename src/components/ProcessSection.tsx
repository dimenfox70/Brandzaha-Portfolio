import { Lightbulb, PenTool, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Lightbulb, label: "Idea", description: "Understanding your vision" },
  { icon: PenTool, label: "Design", description: "Crafting the experience" },
  { icon: Code, label: "Build", description: "Engineering excellence" },
  { icon: Rocket, label: "Launch", description: "Going live seamlessly" },
  { icon: TrendingUp, label: "Scale", description: "Growing together" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Every project starts with a problem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our job is to turn it into a product that works beautifully. 
              We follow a proven process that ensures clarity, quality, and results at every stage.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-sm font-medium text-secondary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+</span> successful projects delivered
              </p>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden md:block" />
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={step.label}
                  className="flex items-start gap-6 group"
                >
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <step.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {step.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
