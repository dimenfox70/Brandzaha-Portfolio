import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, LucideIcon, Eye } from "lucide-react";
import { DesignWork } from "@/data/projects";
import DesignPreviewModal from "./DesignPreviewModal";

interface HorizontalGalleryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  works: DesignWork[];
  accentColor: "accent" | "highlight" | "primary";
}

const HorizontalGallery = ({
  title,
  description,
  icon: Icon,
  works,
  accentColor,
}: HorizontalGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedWork, setSelectedWork] = useState<DesignWork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPreview = (work: DesignWork) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closePreview = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  const accentClasses = {
    accent: {
      bg: "bg-accent/10",
      text: "text-accent",
      border: "border-accent/30",
      hoverBorder: "hover:border-accent/50",
      gradient: "from-accent/20",
    },
    highlight: {
      bg: "bg-highlight/10",
      text: "text-highlight",
      border: "border-highlight/30",
      hoverBorder: "hover:border-highlight/50",
      gradient: "from-highlight/20",
    },
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/30",
      hoverBorder: "hover:border-primary/50",
      gradient: "from-primary/20",
    },
  };

  const colors = accentClasses[accentColor];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="mb-16">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${colors.text}`} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full border ${colors.border} flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? `${colors.hoverBorder} hover:${colors.bg} text-foreground`
                : "opacity-30 cursor-not-allowed text-muted-foreground"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full border ${colors.border} flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? `${colors.hoverBorder} hover:${colors.bg} text-foreground`
                : "opacity-30 cursor-not-allowed text-muted-foreground"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="relative">
        {/* Left Fade */}
        <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Right Fade */}
        <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {works.map((work, index) => (
            <div
              key={work.id}
              className="group flex-shrink-0 w-[280px] md:w-[320px] animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openPreview(work)}
            >
              <div className={`relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colors.hoverBorder}`}>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Show a placeholder with client name on error
                      target.style.display = 'none';
                      const placeholder = target.parentElement?.querySelector('.img-placeholder');
                      if (placeholder) placeholder.classList.remove('hidden');
                    }}
                  />
                  {/* Placeholder shown on image error */}
                  <div className="img-placeholder hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-accent/20 to-highlight/20">
                    <div className="w-16 h-16 rounded-xl bg-accent/30 flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-accent">{work.client.charAt(0)}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground/70">{work.client}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {work.year}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`px-4 py-2 ${colors.bg} backdrop-blur-sm rounded-full border ${colors.border} flex items-center gap-2`}>
                      <Eye className="w-4 h-4" />
                      <span className={`text-sm font-medium ${colors.text}`}>Preview Design</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1 truncate group-hover:text-accent transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {work.client}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.gradient} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="flex md:hidden items-center justify-center gap-1 mt-4">
        <div className={`w-8 h-1 rounded-full ${colors.bg}`} />
        <div className="w-2 h-1 rounded-full bg-border" />
        <div className="w-2 h-1 rounded-full bg-border" />
      </div>

      {/* Preview Modal */}
      <DesignPreviewModal
        isOpen={isModalOpen}
        onClose={closePreview}
        work={selectedWork}
        allWorks={works}
        accentColor={accentColor}
        categoryTitle={title}
      />
    </div>
  );
};

export default HorizontalGallery;

