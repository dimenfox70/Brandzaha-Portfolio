import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HorizontalGallery from "@/components/HorizontalGallery";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="default">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  const accentClasses = {
    accent: {
      bg: "bg-accent/10",
      text: "text-accent",
      border: "border-accent/30",
      gradient: "from-accent/20 via-accent/5 to-transparent",
      dot: "bg-accent",
    },
    highlight: {
      bg: "bg-highlight/10",
      text: "text-highlight",
      border: "border-highlight/30",
      gradient: "from-highlight/20 via-highlight/5 to-transparent",
      dot: "bg-highlight",
    },
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/30",
      gradient: "from-primary/20 via-primary/5 to-transparent",
      dot: "bg-primary",
    },
  };

  const colors = accentClasses[project.accentColor];

  return (
    <>
      <Helmet>
        <title>{project.title} | Brandzaha Studio</title>
        <meta name="description" content={project.longDescription} />
        <meta property="og:title" content={`${project.title} | Brandzaha Studio`} />
        <meta property="og:description" content={project.description} />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Background Effects */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-60`} />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Back Button */}
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Projects</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="animate-slide-up">
                {/* Icon Badge */}
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${colors.bg} border ${colors.border} mb-6`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                  <span className={`text-sm font-medium ${colors.text}`}>Project Category</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  {project.title}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {project.longDescription}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary/60 rounded-full text-sm font-medium text-foreground border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="default" size="lg" className="group">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Hero Image */}
              <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl hidden md:block">
                  <div className="grid grid-cols-2 gap-4">
                    {project.stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-3xl md:text-4xl font-bold ${colors.text} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-Categories Section (for Branding Design) */}
        {project.subCategories && project.subCategories.length > 0 && (
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6">
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className={`text-sm font-medium ${colors.text} uppercase tracking-wider mb-4 block`}>
                  Our Design Services
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Explore Our Work by Category
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Browse through our diverse portfolio of creative work across different design disciplines.
                </p>
              </div>

              {/* Horizontal Scrolling Galleries */}
              {project.subCategories.map((subCategory) => (
                <HorizontalGallery
                  key={subCategory.id}
                  title={subCategory.title}
                  description={subCategory.description}
                  icon={subCategory.icon}
                  works={subCategory.works}
                  accentColor={project.accentColor}
                />
              ))}
            </div>
          </section>
        )}

        {/* Client Work Section (for non-branding categories) */}
        {(!project.subCategories || project.subCategories.length === 0) && (
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6">
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className={`text-sm font-medium ${colors.text} uppercase tracking-wider mb-4 block`}>
                  Our Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Client Work & Case Studies
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Explore our successful projects and see how we've helped businesses achieve their goals.
                </p>
              </div>

              {/* Projects Grid - Masonry Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.clientWork.map((work, index) => (
                  <div
                    key={work.id}
                    className={`group relative bg-card rounded-2xl border border-border overflow-hidden card-hover animate-slide-up ${
                      index === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground">
                        {work.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Client */}
                      <div className="text-sm text-muted-foreground mb-2">{work.client}</div>

                      {/* Title */}
                      <h3 className={`font-semibold text-foreground mb-3 group-hover:${colors.text} transition-colors ${
                        index === 0 ? "text-2xl" : "text-xl"
                      }`}>
                        {work.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-muted-foreground leading-relaxed mb-4 ${
                        index === 0 ? "text-base" : "text-sm line-clamp-3"
                      }`}>
                        {work.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 ${colors.bg} rounded-full text-xs font-medium ${colors.text}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Testimonial (for featured project) */}
                      {work.testimonial && index === 0 && (
                        <div className={`mt-6 p-4 ${colors.bg} rounded-xl border ${colors.border}`}>
                          <Quote className={`w-6 h-6 ${colors.text} mb-3 opacity-50`} />
                          <p className="text-foreground italic mb-3">"{work.testimonial.quote}"</p>
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}>
                              <span className={`font-semibold ${colors.text}`}>
                                {work.testimonial.author.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-foreground text-sm">{work.testimonial.author}</div>
                              <div className="text-xs text-muted-foreground">{work.testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* View Details Link */}
                      <div className={`flex items-center gap-2 text-sm font-medium ${colors.text} mt-4 group-hover:gap-3 transition-all`}>
                        <span>View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Case Studies Section (for Branding - shown after galleries) */}
        {project.subCategories && project.subCategories.length > 0 && project.clientWork.length > 0 && (
          <section className="py-24 md:py-32 bg-secondary/20">
            <div className="container mx-auto px-6">
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className={`text-sm font-medium ${colors.text} uppercase tracking-wider mb-4 block`}>
                  Featured Work
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Client Success Stories
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Deep dives into our most impactful branding projects.
                </p>
              </div>

              {/* Featured Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.clientWork.slice(0, 3).map((work, index) => (
                  <div
                    key={work.id}
                    className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground">
                        {work.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{work.client}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{work.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {work.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 ${colors.bg} rounded-full text-xs font-medium ${colors.text}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-secondary/30 border-t border-border relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-40`} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Let's discuss how we can help bring your {project.title.toLowerCase()} vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="default" size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ProjectDetail;

