import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink, Monitor, Smartphone, Tablet, RefreshCw, Globe, AlertCircle } from "lucide-react";
import { DesignWork } from "@/data/projects";

interface DesignPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  work: DesignWork | null;
  allWorks: DesignWork[];
  accentColor: "accent" | "highlight" | "primary";
  categoryTitle: string;
}

type DeviceView = "desktop" | "tablet" | "mobile";

const DesignPreviewModal = ({
  isOpen,
  onClose,
  work,
  allWorks,
  accentColor,
  categoryTitle,
}: DesignPreviewModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [deviceView, setDeviceView] = useState<DeviceView>("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeError, setIframeError] = useState(false);

  const currentWork = allWorks[currentIndex] || null;
  
  // Check if this work has a preview URL
  const hasLivePreview = !!(currentWork?.previewUrl);
  const previewUrl = currentWork?.previewUrl || "";
  
  // Check if it's an e-commerce site that blocks iframes
  // Most e-commerce platforms block iframe embedding for security
  const isBlockedEcommerceSite = 
    previewUrl.includes('shopify.com') || 
    previewUrl.includes('myshopify.com') ||
    previewUrl.includes('nextflextees.com') ||
    previewUrl.includes('lunardaydreamz.com') ||
    previewUrl.includes('deardiary.in') ||
    previewUrl.includes('hostingersite.com') ||
    previewUrl.includes('xcelore.com') ||
    previewUrl.includes('beautyseraphina.com') ||
    // If it has a previewUrl, assume it might block iframes - show fallback after short timeout
    hasLivePreview;
  
  // For backwards compatibility
  const isShopifyStore = previewUrl.includes('shopify.com') || previewUrl.includes('myshopify.com');

  const accentClasses = {
    accent: {
      bg: "bg-accent",
      text: "text-accent",
      border: "border-accent/30",
      lightBg: "bg-accent/10",
    },
    highlight: {
      bg: "bg-highlight",
      text: "text-highlight",
      border: "border-highlight/30",
      lightBg: "bg-highlight/10",
    },
    primary: {
      bg: "bg-primary",
      text: "text-primary",
      border: "border-primary/30",
      lightBg: "bg-primary/10",
    },
  };

  const colors = accentClasses[accentColor];

  const deviceSizes = {
    desktop: { width: "100%", maxWidth: "100%" },
    tablet: { width: "768px", maxWidth: "768px" },
    mobile: { width: "375px", maxWidth: "375px" },
  };

  useEffect(() => {
    if (work && allWorks.length > 0) {
      const index = allWorks.findIndex((w) => w.id === work.id);
      if (index !== -1) setCurrentIndex(index);
    }
  }, [work, allWorks]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
      setIframeError(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  // Set loading to false when modal opens (we're not using iframes anymore for live preview sites)
  useEffect(() => {
    if (isOpen && currentWork) {
      setIsLoading(false);
    }
  }, [isOpen, currentWork]);

  const goToPrevious = () => {
    setIsLoading(true);
    setIframeError(false);
    setCurrentIndex((prev) => (prev === 0 ? allWorks.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsLoading(true);
    setIframeError(false);
    setCurrentIndex((prev) => (prev === allWorks.length - 1 ? 0 : prev + 1));
  };

  const refreshIframe = () => {
    setIsLoading(true);
    setIframeError(false);
    setIframeKey((prev) => prev + 1);
  };

  // Early return AFTER all hooks
  if (!isOpen || !currentWork) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full h-full flex flex-col animate-scale-in">
        {/* Top Bar */}
        <div className="relative z-10 bg-[#1e1e1e] border-b border-[#333] px-4 py-2 flex items-center justify-between">
          {/* Left - Project Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all"
                title="Close"
              />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className={`px-2 py-0.5 ${colors.lightBg} ${colors.text} rounded text-xs font-medium`}>
                {categoryTitle}
              </span>
              <span className="text-[#666]">•</span>
              <span className="text-white/80 font-medium">{currentWork.title}</span>
              <span className="text-[#666]">•</span>
              <span className="text-[#888]">{currentWork.client}</span>
            </div>
          </div>

          {/* Center - URL Bar (for live preview) */}
          {hasLivePreview && (
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="w-full bg-[#2d2d2d] rounded-lg px-4 py-1.5 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#28ca41]" />
                <span className="text-[#888] text-sm truncate flex-1">{previewUrl}</span>
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888] hover:text-white transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* Right - Controls */}
          <div className="flex items-center gap-2">
            {/* Device Toggle (only for live preview) */}
            {hasLivePreview && !iframeError && (
              <div className="hidden md:flex items-center gap-1 bg-[#2d2d2d] rounded-lg p-1 mr-2">
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`p-1.5 rounded transition-all ${
                    deviceView === "desktop" ? `${colors.lightBg} ${colors.text}` : "text-[#888] hover:text-white"
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceView("tablet")}
                  className={`p-1.5 rounded transition-all ${
                    deviceView === "tablet" ? `${colors.lightBg} ${colors.text}` : "text-[#888] hover:text-white"
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`p-1.5 rounded transition-all ${
                    deviceView === "mobile" ? `${colors.lightBg} ${colors.text}` : "text-[#888] hover:text-white"
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Refresh Button */}
            {hasLivePreview && (
              <button
                onClick={refreshIframe}
                className="w-8 h-8 rounded-lg bg-[#2d2d2d] flex items-center justify-center text-[#888] hover:text-white hover:bg-[#3a3a3a] transition-colors"
                title="Refresh"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              </button>
            )}

            {/* Navigation */}
            <div className="flex items-center gap-1 bg-[#2d2d2d] rounded-lg p-1">
              <button
                onClick={goToPrevious}
                className="p-1.5 rounded text-[#888] hover:text-white hover:bg-[#3a3a3a] transition-colors"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[#888] text-xs px-2">
                {currentIndex + 1} / {allWorks.length}
              </span>
              <button
                onClick={goToNext}
                className="p-1.5 rounded text-[#888] hover:text-white hover:bg-[#3a3a3a] transition-colors"
                title="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[#2d2d2d] flex items-center justify-center text-[#888] hover:text-white hover:bg-[#3a3a3a] transition-colors ml-2"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content - Preview Area */}
        <div className="flex-1 bg-[#0a0a0a] overflow-hidden relative flex items-center justify-center">
          {/* For sites with previewUrl (e-commerce), show thumbnail + visit button directly */}
          {hasLivePreview ? (
            <div className="w-full h-full flex items-center justify-center overflow-auto py-8">
              <div className="max-w-4xl mx-auto text-center p-6">
                {/* Show thumbnail image - larger and more prominent */}
                <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl border border-[#333] group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900"
                  onClick={() => window.open(previewUrl, '_blank')}
                >
                  <img
                    src={currentWork.image}
                    alt={currentWork.title}
                    className="w-full h-auto min-h-[300px] max-h-[60vh] object-contain bg-white"
                    onError={(e) => {
                      // Fallback if image fails to load - show placeholder
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://placehold.co/800x600/1a1a2e/ffffff?text=${encodeURIComponent(currentWork.client)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className={`px-6 py-3 ${colors.bg} text-white rounded-xl font-medium flex items-center gap-2`}>
                      <ExternalLink className="w-5 h-5" />
                      Click to Visit Live Website
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  {isShopifyStore ? (
                    <>
                      <div className="w-6 h-6 rounded bg-[#96bf48] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <span className="text-white/90 font-medium">Shopify Store</span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-5 h-5 text-green-500" />
                      <span className="text-white/80">Live Website</span>
                    </>
                  )}
                </div>
                <p className="text-[#888] text-sm mb-6 max-w-md mx-auto">
                  Click the image above or the button below to explore the live website.
                </p>
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-8 py-4 ${colors.bg} text-white rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg`}
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit {currentWork.client} Website
                </a>
              </div>
            </div>
          ) : (
            /* For design work without previewUrl, show the image directly */
            <div 
              className={`h-full transition-all duration-300 ease-out ${
                deviceView !== "desktop" ? "py-8" : ""
              }`}
              style={{
                width: deviceSizes[deviceView].width,
                maxWidth: deviceSizes[deviceView].maxWidth,
              }}
            >
              <div 
                className={`h-full bg-white rounded-lg overflow-hidden shadow-2xl ${
                  deviceView !== "desktop" ? "mx-auto border-8 border-[#1a1a1a] rounded-[2rem]" : ""
                }`}
                style={deviceView !== "desktop" ? {
                  boxShadow: "0 0 0 2px #333, 0 25px 50px -12px rgba(0,0,0,0.8)"
                } : {}}
              >
                <div className="w-full h-full overflow-auto bg-[#f5f5f5]">
                  <img
                    src={currentWork.image}
                    alt={currentWork.title}
                    className="w-full h-auto"
                    onLoad={() => setIsLoading(false)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://placehold.co/800x600/1a1a2e/ffffff?text=${encodeURIComponent(currentWork.client)}`;
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Arrows - Large Screens */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all hidden lg:flex z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all hidden lg:flex z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Bar - Project Info (Mobile) */}
        <div className="md:hidden bg-[#1e1e1e] border-t border-[#333] px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium text-sm">{currentWork.title}</h3>
              <p className="text-[#888] text-xs">{currentWork.client} • {currentWork.year}</p>
            </div>
            {hasLivePreview && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 ${colors.bg} text-white rounded-lg text-xs font-medium flex items-center gap-1`}
              >
                <ExternalLink className="w-3 h-3" />
                Visit Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPreviewModal;
