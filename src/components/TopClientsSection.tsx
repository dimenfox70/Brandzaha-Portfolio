import { 
  Building2, 
  Trophy, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  Globe
} from "lucide-react";

interface ClientHighlight {
  id: number;
  name: string;
  logo?: string;
  industry: string;
  services: string[];
  website?: string;
  result?: string;
}

// Top clients data - Update with your real clients
const topClients: ClientHighlight[] = [
  {
    id: 1,
    name: "NextFlex Tees",
    industry: "Fashion & Apparel",
    services: ["E-commerce", "Branding"],
    website: "https://nextflextees.com/",
    result: "+45% Sales"
  },
  {
    id: 2,
    name: "Xcelore",
    industry: "Business Solutions",
    services: ["Web Dev", "SEO"],
    website: "https://xcelore.com/",
    result: "+120% Traffic"
  },
  {
    id: 3,
    name: "Beauty Seraphina",
    industry: "Beauty & Cosmetics",
    services: ["E-commerce", "Social Media"],
    website: "https://beautyseraphina.com/",
    result: "+80% Growth"
  },
  {
    id: 4,
    name: "TechStart Solutions",
    industry: "Technology",
    services: ["Branding", "Logo Design"],
    result: "$500K Raised"
  },
  {
    id: 5,
    name: "Green Earth Organics",
    industry: "Food & Beverage",
    services: ["Packaging", "Branding"],
    result: "+60% Appeal"
  },
  {
    id: 6,
    name: "Urban Fitness Hub",
    industry: "Health & Fitness",
    services: ["Branding", "Web Dev"],
    result: "+200% Members"
  },
  {
    id: 7,
    name: "Kohinoor Jewels",
    industry: "Jewelry & Luxury",
    services: ["Branding", "Packaging"],
    result: "Premium Brand"
  },
  {
    id: 8,
    name: "Krishimart",
    industry: "Agriculture",
    services: ["Logo Design", "Web Dev"],
    result: "Market Leader"
  },
  {
    id: 9,
    name: "PlotDekho",
    industry: "Real Estate",
    services: ["Branding", "UI/UX"],
    result: "10K+ Users"
  },
  {
    id: 10,
    name: "Hoax Perfumes",
    industry: "Fragrance",
    services: ["Packaging", "Branding"],
    result: "Luxury Launch"
  },
  {
    id: 11,
    name: "Drishtikon Drones",
    industry: "Technology",
    services: ["Logo Design", "Branding"],
    result: "Tech Pioneer"
  },
  {
    id: 12,
    name: "House of Anjani",
    industry: "Fashion",
    services: ["E-commerce", "Branding"],
    result: "+150% Sales"
  }
];

const TopClientsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-accent/8 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-highlight/8 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-highlight/10 border border-highlight/20 mb-4">
            <Trophy className="w-3.5 h-3.5 text-highlight" />
            <span className="text-xs font-medium text-highlight">Our Clients</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Industry Leaders</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Partnering with amazing brands across industries to deliver exceptional results.
          </p>
        </div>

        {/* Clients Grid - Compact Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {topClients.map((client) => (
            <div
              key={client.id}
              className="group bg-card rounded-xl border border-border p-3 md:p-4 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon & Name */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center border border-accent/20 mb-2 group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                
                <h3 className="font-semibold text-xs md:text-sm text-foreground group-hover:text-accent transition-colors line-clamp-1 mb-0.5">
                  {client.name}
                </h3>
                
                <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-1 mb-2">
                  {client.industry}
                </p>

                {/* Result Badge */}
                {client.result && (
                  <div className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 mb-2">
                    <span className="text-[9px] md:text-[10px] font-semibold text-accent">
                      {client.result}
                    </span>
                  </div>
                )}

                {/* Services Tags */}
                <div className="flex flex-wrap justify-center gap-1">
                  {client.services.slice(0, 2).map((service, i) => (
                    <span 
                      key={i}
                      className="px-1.5 py-0.5 text-[8px] md:text-[9px] font-medium rounded bg-secondary/70 text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Website Link */}
                {client.website && (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-accent/70 hover:text-accent transition-colors"
                  >
                    <Globe className="w-3 h-3" />
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 via-highlight/10 to-accent/10 rounded-2xl border border-border p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to become our next success story?
          </p>
          <a
            href="https://brandzaha.com/contact-us.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-highlight text-white rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
          >
            <Sparkles className="w-5 h-5" />
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopClientsSection;

