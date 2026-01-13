import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import TopClientsSection from "@/components/TopClientsSection";
import CTASection from "@/components/CTASection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Brandzaha Studio | Creative + Tech Agency - Branding, Design, SaaS & AI Solutions</title>
        <meta 
          name="description" 
          content="We build scalable products from brand identities to enterprise systems and AI-powered automations. View our projects in Branding, LMS, CMS, HRMS, E-Commerce, and AI Automation." 
        />
        <meta 
          name="keywords" 
          content="creative agency, tech agency, branding, design, SaaS, CMS, LMS, HRMS, ERP, e-commerce, AI automation, web development" 
        />
        <link rel="canonical" href="https://studio.agency" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brandzaha Studio | Creative + Tech Agency" />
        <meta property="og:description" content="Projects that turn ideas into scalable products. Branding, Design, SaaS, CMS & AI Automation." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brandzaha Studio | Creative + Tech Agency" />
        <meta name="twitter:description" content="Projects that turn ideas into scalable products." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TopClientsSection />
        <ProcessSection />
        <StatsSection />
        <CTASection />
        <GoogleReviewsSection 
          googlePlaceUrl="https://www.google.com/search?q=Brandzaha+Creative+Agency#lkt=LocalPoiReviews&rlimm=13260985501402579107"
        />
        <Footer />
      </main>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Brandzaha Studio",
          "description": "Creative + Tech Agency building scalable products",
          "url": "https://studio.agency",
          "sameAs": [],
          "offers": {
            "@type": "AggregateOffer",
            "offerCount": "6",
            "itemOffered": [
              { "@type": "Service", "name": "Branding & Graphic Design" },
              { "@type": "Service", "name": "Learning Management Systems" },
              { "@type": "Service", "name": "Content Management Systems" },
              { "@type": "Service", "name": "HRMS & ERP Systems" },
              { "@type": "Service", "name": "E-Commerce Platforms" },
              { "@type": "Service", "name": "AI & Automation" }
            ]
          }
        })}
      </script>
    </>
  );
};

export default Index;
