export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "design" | "marketing" | "tech";
  icon: string;
  popular?: boolean;
  features?: string[];
}

export const services: Service[] = [
  // Design Services
  {
    id: "logo-design",
    name: "Logo Design",
    description: "Custom logo with brand identity guidelines",
    price: 299,
    category: "design",
    icon: "✨",
    popular: true,
    features: ["3 Concepts", "Unlimited Revisions", "Source Files", "Brand Guidelines"],
  },
  {
    id: "brand-identity",
    name: "Brand Identity Package",
    description: "Complete visual identity system for your brand",
    price: 899,
    category: "design",
    icon: "🎨",
    features: ["Logo Suite", "Color Palette", "Typography", "Brand Book"],
  },
  {
    id: "social-media-design",
    name: "Social Media Kit",
    description: "30 custom templates for all platforms",
    price: 449,
    category: "design",
    icon: "📱",
    popular: true,
    features: ["Instagram", "Facebook", "LinkedIn", "Story Templates"],
  },
  {
    id: "packaging-design",
    name: "Packaging Design",
    description: "Eye-catching product packaging design",
    price: 599,
    category: "design",
    icon: "📦",
    features: ["3D Mockups", "Print Ready", "Dieline", "Material Specs"],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description: "User-centered interface design in Figma",
    price: 1299,
    category: "design",
    icon: "🖥️",
    features: ["User Research", "Wireframes", "Prototypes", "Design System"],
  },

  // Marketing Services
  {
    id: "social-media-handling",
    name: "Social Media Management",
    description: "Monthly content creation & community management",
    price: 799,
    category: "marketing",
    icon: "📣",
    popular: true,
    features: ["30 Posts/Month", "Stories", "Engagement", "Analytics"],
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    description: "ROI-focused ad campaigns across platforms",
    price: 999,
    category: "marketing",
    icon: "🚀",
    popular: true,
    features: ["Meta Ads", "Google Ads", "A/B Testing", "Weekly Reports"],
  },
  {
    id: "seo-optimization",
    name: "SEO Optimization",
    description: "Boost your organic search rankings",
    price: 649,
    category: "marketing",
    icon: "🔍",
    features: ["Keyword Research", "On-Page SEO", "Technical Audit", "Link Building"],
  },
  {
    id: "content-strategy",
    name: "Content Strategy",
    description: "Strategic content planning & calendar",
    price: 549,
    category: "marketing",
    icon: "📝",
    features: ["Content Audit", "Editorial Calendar", "Brand Voice", "KPIs"],
  },
  {
    id: "influencer-marketing",
    name: "Influencer Marketing",
    description: "Connect with the right influencers",
    price: 1499,
    category: "marketing",
    icon: "⭐",
    features: ["Influencer Research", "Outreach", "Campaign Management", "ROI Tracking"],
  },

  // Tech Services
  {
    id: "shopify-website",
    name: "Shopify Store",
    description: "Premium e-commerce store setup",
    price: 1499,
    category: "tech",
    icon: "🛍️",
    popular: true,
    features: ["Custom Theme", "Payment Setup", "SEO Ready", "Mobile Optimized"],
  },
  {
    id: "wordpress-website",
    name: "WordPress Website",
    description: "Custom WordPress site with CMS",
    price: 999,
    category: "tech",
    icon: "🌐",
    features: ["Custom Design", "SEO Plugin", "Contact Forms", "Speed Optimized"],
  },
  {
    id: "custom-website",
    name: "Custom Web Development",
    description: "Fully custom coded solution",
    price: 2499,
    category: "tech",
    icon: "💻",
    features: ["React/Next.js", "Custom Backend", "API Integration", "Scalable"],
  },
  {
    id: "automation-basic",
    name: "Business Automation",
    description: "Streamline your workflows with automation",
    price: 799,
    category: "tech",
    icon: "⚡",
    features: ["Workflow Design", "Tool Integration", "Email Automation", "CRM Setup"],
  },
  {
    id: "chatbot-ai",
    name: "AI Chatbot Integration",
    description: "24/7 customer support automation",
    price: 1199,
    category: "tech",
    icon: "🤖",
    features: ["Custom Training", "Multi-platform", "Analytics", "Human Handoff"],
  },
  {
    id: "app-development",
    name: "Mobile App Development",
    description: "Cross-platform mobile application",
    price: 4999,
    category: "tech",
    icon: "📲",
    features: ["iOS & Android", "UI/UX Design", "Backend", "App Store Launch"],
  },
];

export const categoryLabels = {
  design: "Design",
  marketing: "Marketing",
  tech: "Tech",
};

export const categoryColors = {
  design: {
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/30",
  },
  marketing: {
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
    text: "text-pink-500",
    border: "border-pink-500/30",
  },
  tech: {
    gradient: "from-teal-500 to-cyan-500",
    bg: "bg-teal-500/10",
    text: "text-teal-500",
    border: "border-teal-500/30",
  },
};
