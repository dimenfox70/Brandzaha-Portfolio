import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed">
            Let's build something impactful together. From concept to launch, 
            we're here to turn your vision into reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://brandzaha.com/contact-us.php" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="secondary" 
                size="xl" 
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="https://brandzaha.com/contact-us.php" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
