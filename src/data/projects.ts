import { 
  Palette, 
  GraduationCap, 
  LayoutGrid, 
  Building2, 
  ShoppingCart, 
  Brain,
  Sparkles,
  Package,
  Share2,
  Figma,
  BookOpen,
  LucideIcon
} from "lucide-react";

export interface DesignWork {
  id: string;
  title: string;
  client: string;
  image: string;
  year: string;
  previewUrl?: string; // Live website URL for iframe preview
}

export interface DesignSubCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  works: DesignWork[];
}

export interface ClientWork {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ProjectCategory {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  accentColor: "accent" | "highlight" | "primary";
  heroImage: string;
  stats: { label: string; value: string }[];
  clientWork: ClientWork[];
  subCategories?: DesignSubCategory[];
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: "branding-design",
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Logos, brand identities, packaging, and visual systems crafted to make brands unforgettable.",
    longDescription: "We create distinctive brand identities that resonate with your audience and stand the test of time. From concept to execution, our design process ensures every visual element tells your brand's unique story.",
    features: ["Logo Design", "Package Design", "Social Media Creatives", "UI/UX Design", "Branding Catalog"],
    accentColor: "accent",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    stats: [
      { label: "Brands Created", value: "150+" },
      { label: "Design Awards", value: "12" },
      { label: "Happy Clients", value: "98%" },
      { label: "Countries Served", value: "25+" },
    ],
    subCategories: [
      {
        id: "logo-design",
        title: "Logo Design",
        description: "Memorable logos that capture your brand essence",
        icon: Sparkles,
        works: [
          { id: "logo-1", title: "Brandzaha Logo", client: "Brandzaha Studio", image: "/Branding-design/Logo/Brandzaha-logo.png", year: "2024" },
          { id: "logo-2", title: "Bharti Fabrics Logo", client: "Bharti Fabrics", image: "/Branding-design/Logo/Bharti-Fabrics.png", year: "2024" },
          { id: "logo-3", title: "Carry-ista Logo", client: "Carry-ista", image: "/Branding-design/Logo/Carry-ista-logo.png", year: "2024" },
          { id: "logo-4", title: "Dainch Logo", client: "Dainch", image: "/Branding-design/Logo/Dainch-logo.jpg", year: "2024" },
          { id: "logo-5", title: "Drishtikon Drone Logo", client: "Drishtikon Drone", image: "/Branding-design/Logo/Drishtikon-drone-logo.png", year: "2024" },
          { id: "logo-6", title: "DSMT Logo", client: "DSMT", image: "/Branding-design/Logo/dsmt.jpg", year: "2023" },
          { id: "logo-7", title: "Gallora Logo", client: "Gallora", image: "/Branding-design/Logo/Gallora-Logo.jpg", year: "2024" },
          { id: "logo-8", title: "Hoax Logo", client: "Hoax", image: "/Branding-design/Logo/Hoax-logo.png", year: "2024" },
          { id: "logo-9", title: "House Of Anjani Logo", client: "House Of Anjani", image: "/Branding-design/Logo/HouseOfAnjani-logo.webp", year: "2023" },
          { id: "logo-10", title: "JRG Logo", client: "JRG", image: "/Branding-design/Logo/JRGLogo.jpg", year: "2024" },
          { id: "logo-11", title: "Kohinoor Logo", client: "Kohinoor", image: "/Branding-design/Logo/Kohinoor - Logo.jpg", year: "2024" },
          { id: "logo-12", title: "Krishimart Logo", client: "Krishimart", image: "/Branding-design/Logo/Krishimart-Logo.png", year: "2023" },
          { id: "logo-13", title: "Mr Green Logo", client: "Mr Green", image: "/Branding-design/Logo/Mr-Green-logo.jpg", year: "2024" },
          { id: "logo-14", title: "PlotDekho Logo", client: "PlotDekho", image: "/Branding-design/Logo/PlotDekho(Logo).png", year: "2024" },
          { id: "logo-15", title: "Rahunandan Traders Logo", client: "Rahunandan Traders", image: "/Branding-design/Logo/Rahunandan-Traders.png", year: "2023" },
          { id: "logo-16", title: "GhostlyMoth Studio Logo", client: "GhostlyMoth Studio", image: "/Branding-design/Logo/GhostlyMoth-Studio-Logo.png", year: "2024" },
          { id: "logo-17", title: "PluseSEO Logo", client: "PluseSEO", image: "/Branding-design/Logo/pluseseo_logo2.png", year: "2024" },
        ]
      },
      {
        id: "package-design",
        title: "Package Design",
        description: "Stunning packaging that stands out on shelves",
        icon: Package,
        works: [
          { id: "pkg-1", title: "Can Design", client: "Beverage Brand", image: "/Branding-design/Package-Design/can-design.png", year: "2024" },
          { id: "pkg-2", title: "Cosmetics Package", client: "Beauty Brand", image: "/Branding-design/Package-Design/cosmetics.png", year: "2024" },
          { id: "pkg-3", title: "Tote Bag Design", client: "Fashion Brand", image: "/Branding-design/Package-Design/Tote-bag-design.jpg", year: "2024" },
          { id: "pkg-4", title: "Tote Bag", client: "Retail Brand", image: "/Branding-design/Package-Design/Tote-bag.jpg", year: "2024" },
          { id: "pkg-5", title: "Box Creative Design", client: "Premium Brand", image: "/Branding-design/Package-Design/Box-Creative-design.png", year: "2024" },
          { id: "pkg-6", title: "Chocolate Design", client: "Artisan Sweets", image: "/Branding-design/Package-Design/choclate-design.png", year: "2024" },
          { id: "pkg-7", title: "Drop Bottle", client: "Cosmetics Brand", image: "/Branding-design/Package-Design/drop-bottle.png", year: "2024" },
          { id: "pkg-8", title: "Gym Fitness", client: "PowerFit", image: "/Branding-design/Package-Design/Gym-fitness.png", year: "2024" },
          { id: "pkg-9", title: "Newspaper Print Design", client: "Media House", image: "/Branding-design/Package-Design/News-paper-print Design.jpg", year: "2024" },
          { id: "pkg-10", title: "Paper Format Design", client: "Corporate Client", image: "/Branding-design/Package-Design/Paper-format-Design.jpg", year: "2024" },
          { id: "pkg-11", title: "Banner Design", client: "Brand Client", image: "/Branding-design/Package-Design/Banner-design.jpg", year: "2024" },
          { id: "pkg-12", title: "Bottle Package", client: "Beverage Brand", image: "/Branding-design/Package-Design/Bottle-Package.png", year: "2024" },
          { id: "pkg-13", title: "Hoax Perfume", client: "Hoax", image: "/Branding-design/Package-Design/Hoax-Perfume.jpg", year: "2024" },
          { id: "pkg-14", title: "Kohinoor Box", client: "Kohinoor", image: "/Branding-design/Package-Design/Kohinoor-Box.jpg", year: "2024" },
          { id: "pkg-15", title: "Letter Format", client: "Corporate Client", image: "/Branding-design/Package-Design/Letter-Format.jpg", year: "2023" },
          { id: "pkg-16", title: "Logo Tag Design", client: "Fashion Brand", image: "/Branding-design/Package-Design/Logo-Tag.jpg", year: "2024" },
          { id: "pkg-17", title: "Shopping Bag", client: "Retail Brand", image: "/Branding-design/Package-Design/shopping-bag.jpg", year: "2024" },
          { id: "pkg-18", title: "Stationary Mockup", client: "Corporate Client", image: "/Branding-design/Package-Design/stationary-mockup.jpg", year: "2023" },
          { id: "pkg-19", title: "Sticker Design", client: "Product Brand", image: "/Branding-design/Package-Design/Sticker-Design.jpg", year: "2024" },
          { id: "pkg-20", title: "Visiting Card Design", client: "Business Client", image: "/Branding-design/Package-Design/Visting-Card-Design.jpg", year: "2024" },
        ]
      },
      {
        id: "social-media",
        title: "Social Media Creative Design",
        description: "Scroll-stopping content for all platforms",
        icon: Share2,
        works: [
          { id: "social-1", title: "Customized Frame Photo", client: "Event Brand", image: "/Branding-design/Social-Media-Creatives/Customized-frame-photo.jpg", year: "2024" },
          { id: "social-2", title: "Festive Days Post", client: "Festival Campaign", image: "/Branding-design/Social-Media-Creatives/Festive-days.jpg", year: "2024" },
          { id: "social-3", title: "LinkedIn Banner", client: "Corporate Client", image: "/Branding-design/Social-Media-Creatives/linkedin-banner.jpg", year: "2024" },
          { id: "social-4", title: "Social Media Post 1", client: "Brand Client", image: "/Branding-design/Social-Media-Creatives/post1.jpg", year: "2024" },
          { id: "social-5", title: "Social Media Post 2", client: "Brand Client", image: "/Branding-design/Social-Media-Creatives/post2.jpg", year: "2024" },
          { id: "social-6", title: "Social Media Post 3", client: "Brand Client", image: "/Branding-design/Social-Media-Creatives/Post3.png", year: "2024" },
          { id: "social-7", title: "Social Media Post 4", client: "Brand Client", image: "/Branding-design/Social-Media-Creatives/post4.jpg", year: "2024" },
          { id: "social-8", title: "Social Media Post 7", client: "Brand Client", image: "/Branding-design/Social-Media-Creatives/post7.jpg", year: "2024" },
          { id: "social-9", title: "Real Estate Post", client: "Real Estate Agency", image: "/Branding-design/Social-Media-Creatives/Real-Estate-Post.png", year: "2024" },
          { id: "social-10", title: "Thumbnail Design", client: "YouTube Channel", image: "/Branding-design/Social-Media-Creatives/Thumbnail-design.jpg", year: "2024" },
        ]
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Design with Figma & Framer",
        description: "Beautiful, functional interfaces that users love",
        icon: Figma,
        works: [
          { id: "ui-1", title: "SaaS Dashboard", client: "DataFlow", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", year: "2024" },
          { id: "ui-2", title: "E-commerce App", client: "ShopEase", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80", year: "2024" },
          { id: "ui-3", title: "Banking Mobile App", client: "FinanceFirst", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80", year: "2023" },
          { id: "ui-4", title: "Healthcare Portal", client: "MediCare Plus", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", year: "2024" },
          { id: "ui-5", title: "Travel Booking", client: "WanderLust", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80", year: "2023" },
          { id: "ui-6", title: "Fitness Tracker", client: "FitLife", image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=600&q=80", year: "2024" },
          { id: "ui-7", title: "Food Delivery", client: "QuickBite", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", year: "2024" },
          { id: "ui-8", title: "Learning Platform", client: "EduTech", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80", year: "2023" },
        ]
      },
      {
        id: "branding-catalog",
        title: "Branding Catalog",
        description: "Complete brand guidelines and style books",
        icon: BookOpen,
        works: [
          { id: "catalog-1", title: "Corporate Guidelines", client: "TechGiant Inc.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80", year: "2024" },
          { id: "catalog-2", title: "Startup Brand Book", client: "InnovateLab", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80", year: "2024" },
          { id: "catalog-3", title: "Restaurant Style Guide", client: "Gourmet Group", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", year: "2023" },
          { id: "catalog-4", title: "Fashion Lookbook", client: "Style Avenue", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", year: "2024" },
          { id: "catalog-5", title: "Retail Brand Manual", client: "ShopWorld", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", year: "2023" },
          { id: "catalog-6", title: "Hotel Brand Standards", client: "Luxe Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", year: "2024" },
          { id: "catalog-7", title: "Agency Portfolio", client: "Creative Co.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", year: "2024" },
        ]
      }
    ],
    clientWork: [
      {
        id: "nova-rebrand",
        title: "Nova Tech Complete Rebrand",
        client: "Nova Technologies",
        description: "A comprehensive brand overhaul for a leading SaaS company, including new logo, brand guidelines, and marketing collateral that increased brand recognition by 340%.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
        tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
        year: "2024",
        testimonial: {
          quote: "Brandzaha Studio transformed our brand into something we're truly proud of. The attention to detail was exceptional.",
          author: "Sarah Chen",
          role: "CEO, Nova Technologies"
        }
      },
      {
        id: "artisan-coffee",
        title: "Artisan Coffee Packaging",
        client: "Mountain Brew Co.",
        description: "Premium packaging design for a specialty coffee brand that helped them secure shelf space in 200+ retail locations nationwide.",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
        tags: ["Packaging", "Print Design", "Brand Identity"],
        year: "2024"
      },
      {
        id: "wellness-brand",
        title: "Holistic Wellness Brand",
        client: "Serenity Studios",
        description: "Created a calming, sophisticated brand identity for a wellness center chain, including logo, signage, and digital presence.",
        image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80",
        tags: ["Logo Design", "Signage", "Digital Assets"],
        year: "2023"
      },
      {
        id: "fintech-identity",
        title: "FinTech Visual System",
        client: "PayFlow Inc.",
        description: "Developed a modern, trustworthy visual identity system for a financial technology startup, including app icons and marketing materials.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        tags: ["Visual Identity", "App Design", "Marketing"],
        year: "2023",
        testimonial: {
          quote: "The brand identity perfectly captures the innovation and trust we wanted to convey.",
          author: "Michael Torres",
          role: "Founder, PayFlow Inc."
        }
      },
      {
        id: "restaurant-branding",
        title: "Farm-to-Table Restaurant",
        client: "The Green Table",
        description: "Complete branding for an upscale farm-to-table restaurant including logo, menu design, and environmental graphics.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        tags: ["Restaurant Branding", "Menu Design", "Environmental"],
        year: "2024"
      },
      {
        id: "fashion-label",
        title: "Sustainable Fashion Label",
        client: "EcoThread",
        description: "Minimalist brand identity for an eco-conscious fashion label, featuring sustainable packaging solutions and hang tag designs.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        tags: ["Fashion Branding", "Sustainable Design", "Packaging"],
        year: "2023"
      }
    ]
  },
  {
    slug: "learning-management",
    icon: GraduationCap,
    title: "Learning Management Systems",
    description: "Custom LMS platforms designed for institutions, coaches, and corporate training.",
    longDescription: "We build powerful, intuitive learning platforms that transform how organizations educate and train. Our LMS solutions combine cutting-edge technology with pedagogical best practices.",
    features: ["Student Dashboards", "Course Management", "Certification Systems", "Progress Analytics"],
    accentColor: "highlight",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    stats: [
      { label: "Students Served", value: "500K+" },
      { label: "Courses Delivered", value: "10K+" },
      { label: "Institutions", value: "75+" },
      { label: "Completion Rate", value: "89%" },
    ],
    clientWork: [
      {
        id: "university-lms",
        title: "University Learning Platform",
        client: "Metropolitan University",
        description: "A comprehensive LMS serving 50,000+ students with live classes, assignments, grading, and analytics dashboards.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        tags: ["Higher Education", "Live Classes", "Analytics"],
        year: "2024",
        testimonial: {
          quote: "This platform revolutionized how we deliver education. Student engagement increased by 65%.",
          author: "Dr. James Wilson",
          role: "Dean, Metropolitan University"
        }
      },
      {
        id: "corporate-training",
        title: "Enterprise Training Hub",
        client: "Global Corp Industries",
        description: "Custom corporate training platform with compliance tracking, skill assessments, and personalized learning paths for 15,000 employees.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        tags: ["Corporate Training", "Compliance", "Skill Assessment"],
        year: "2024"
      },
      {
        id: "coaching-platform",
        title: "Online Coaching Academy",
        client: "MasterClass Coaches",
        description: "White-label coaching platform enabling 200+ coaches to deliver courses, manage students, and process payments seamlessly.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        tags: ["Coaching", "Video Courses", "Payment Integration"],
        year: "2023"
      },
      {
        id: "k12-learning",
        title: "K-12 Digital Classroom",
        client: "Bright Future Schools",
        description: "Interactive learning platform for K-12 students featuring gamification, parent portals, and teacher collaboration tools.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        tags: ["K-12 Education", "Gamification", "Parent Portal"],
        year: "2023",
        testimonial: {
          quote: "Parents love the visibility into their children's progress. Teachers save hours every week.",
          author: "Linda Martinez",
          role: "Principal, Bright Future Schools"
        }
      },
      {
        id: "certification-platform",
        title: "Professional Certification Hub",
        client: "TechCert Institute",
        description: "Certification management system with proctored exams, digital badges, and blockchain-verified credentials.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        tags: ["Certifications", "Proctored Exams", "Digital Badges"],
        year: "2024"
      }
    ]
  },
  {
    slug: "content-management",
    icon: LayoutGrid,
    title: "Content Management Systems",
    description: "Powerful CMS solutions that give full control without technical complexity.",
    longDescription: "We develop content management systems that empower your team to create, manage, and publish content effortlessly. From headless CMS to custom solutions, we build for scale and simplicity.",
    features: ["Custom CMS", "WordPress / Headless CMS", "Blog & Content Platforms", "Multi-language Support"],
    accentColor: "primary",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    stats: [
      { label: "CMS Built", value: "200+" },
      { label: "Pages Managed", value: "1M+" },
      { label: "Languages", value: "40+" },
      { label: "Uptime", value: "99.9%" },
    ],
    clientWork: [
      {
        id: "news-portal",
        title: "Digital News Platform",
        client: "Metro Daily News",
        description: "High-performance news CMS handling 2M+ daily visitors with real-time publishing, multimedia support, and ad management.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
        tags: ["News Media", "High Traffic", "Real-time Publishing"],
        year: "2024",
        testimonial: {
          quote: "We can now publish breaking news in seconds. The system handles our traffic spikes effortlessly.",
          author: "Robert Kim",
          role: "Editor-in-Chief, Metro Daily News"
        }
      },
      {
        id: "headless-cms",
        title: "Headless CMS for E-commerce",
        client: "StyleHub Fashion",
        description: "Headless CMS powering content across web, mobile app, and in-store displays with a unified content API.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        tags: ["Headless CMS", "Omnichannel", "API-First"],
        year: "2024"
      },
      {
        id: "multilingual-cms",
        title: "Global Corporate Website",
        client: "TechGiant International",
        description: "Enterprise CMS supporting 25 languages with workflow management, version control, and regional content variations.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        tags: ["Enterprise", "Multi-language", "Workflow"],
        year: "2023"
      },
      {
        id: "blog-platform",
        title: "Creator Blog Network",
        client: "BlogSpace",
        description: "Multi-tenant blogging platform enabling 10,000+ creators to build and monetize their content with custom themes.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
        tags: ["Multi-tenant", "Creator Economy", "Monetization"],
        year: "2023",
        testimonial: {
          quote: "The platform gave us everything we needed to scale our creator community.",
          author: "Emma Johnson",
          role: "CEO, BlogSpace"
        }
      },
      {
        id: "documentation-cms",
        title: "Developer Documentation Hub",
        client: "CloudAPI Services",
        description: "Technical documentation CMS with code highlighting, API playground, and version-controlled docs for developer audiences.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        tags: ["Documentation", "Developer Tools", "API Docs"],
        year: "2024"
      }
    ]
  },
  {
    slug: "hrms-erp",
    icon: Building2,
    title: "HRMS & ERP Systems",
    description: "Enterprise-grade systems to manage people, processes, and performance.",
    longDescription: "We build comprehensive HR and enterprise resource planning systems that streamline operations, boost productivity, and provide actionable insights for data-driven decisions.",
    features: ["HRMS", "ERP Solutions", "Payroll & Attendance", "Inventory & Operations"],
    accentColor: "accent",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    stats: [
      { label: "Employees Managed", value: "250K+" },
      { label: "Companies", value: "120+" },
      { label: "Time Saved", value: "60%" },
      { label: "ROI Increase", value: "340%" },
    ],
    clientWork: [
      {
        id: "enterprise-hrms",
        title: "Enterprise HR Suite",
        client: "MegaCorp Industries",
        description: "Full-featured HRMS for 20,000+ employees including recruitment, onboarding, performance management, and succession planning.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        tags: ["Enterprise HR", "Performance Management", "Recruitment"],
        year: "2024",
        testimonial: {
          quote: "HR processes that took days now take minutes. The ROI was visible within the first quarter.",
          author: "Patricia Adams",
          role: "CHRO, MegaCorp Industries"
        }
      },
      {
        id: "manufacturing-erp",
        title: "Manufacturing ERP",
        client: "PrecisionParts Co.",
        description: "Integrated ERP system managing production planning, inventory, quality control, and supply chain for 5 manufacturing plants.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        tags: ["Manufacturing", "Supply Chain", "Quality Control"],
        year: "2024"
      },
      {
        id: "payroll-system",
        title: "Multi-Country Payroll",
        client: "GlobalTech Solutions",
        description: "Payroll management system handling compliance, tax calculations, and payments across 15 countries with different regulations.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        tags: ["Payroll", "Multi-country", "Compliance"],
        year: "2023"
      },
      {
        id: "retail-erp",
        title: "Retail Operations Platform",
        client: "QuickMart Stores",
        description: "Unified retail ERP connecting POS, inventory, workforce management, and analytics across 500+ store locations.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        tags: ["Retail", "POS Integration", "Inventory"],
        year: "2023",
        testimonial: {
          quote: "Real-time visibility across all stores transformed our operations completely.",
          author: "David Park",
          role: "COO, QuickMart Stores"
        }
      },
      {
        id: "healthcare-hrms",
        title: "Healthcare Staff Management",
        client: "CareFirst Hospitals",
        description: "Specialized HRMS for healthcare with shift scheduling, credential tracking, and compliance management for 8,000 medical staff.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        tags: ["Healthcare", "Scheduling", "Credential Management"],
        year: "2024"
      }
    ]
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "Scalable e-commerce solutions built for growth and conversion.",
    longDescription: "We create e-commerce experiences that convert browsers into buyers. From Shopify stores to custom multi-vendor marketplaces on CodeIgniter, our platforms are built for performance, security, and scale.",
    features: ["Shopify E-commerce", "WooCommerce", "Custom Single Vendor", "Multi-Vendor on CI"],
    accentColor: "highlight",
    heroImage: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80",
    stats: [
      { label: "GMV Processed", value: "$500M+" },
      { label: "Stores Launched", value: "300+" },
      { label: "Conversion Lift", value: "45%" },
      { label: "Countries", value: "50+" },
    ],
    subCategories: [
      {
        id: "shopify-ecommerce",
        title: "Shopify E-commerce",
        description: "Beautiful, high-converting Shopify stores with custom themes",
        icon: ShoppingCart,
        works: [
          { id: "shopify-1", title: "NextFlex Tees - Fashion T-Shirts Store", client: "NextFlex Tees", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnextflextees.com%2F?w=600", year: "2024", previewUrl: "https://nextflextees.com/" },
          { id: "shopify-2", title: "Dras - Premium Water & Ice Delivery", client: "Dras", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdras-6033.myshopify.com%2F?w=800&h=600", year: "2024", previewUrl: "https://dras-6033.myshopify.com/" },
          { id: "shopify-3", title: "Lunar Daydreamz - Lifestyle Store", client: "Lunar Daydreamz", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flunardaydreamz.com%2F?w=600", year: "2024", previewUrl: "https://lunardaydreamz.com/" },
          { id: "shopify-4", title: "Dear Diary - Stationery & Gifts", client: "Dear Diary", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdeardiary.in%2F?w=600", year: "2024", previewUrl: "https://deardiary.in/" },
        ]
      },
      {
        id: "woocommerce",
        title: "WooCommerce",
        description: "Powerful WordPress-based e-commerce solutions",
        icon: LayoutGrid,
        works: [
          { id: "woo-1", title: "Fashion & Lifestyle Store", client: "Moccasin Viper", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmoccasin-viper-492974.hostingersite.com%2F?w=600", year: "2024", previewUrl: "https://moccasin-viper-492974.hostingersite.com/" },
          { id: "woo-2", title: "E-commerce Store", client: "Lime Woodcock", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flime-woodcock-125752.hostingersite.com%2F?w=600", year: "2024", previewUrl: "https://lime-woodcock-125752.hostingersite.com/" },
          { id: "woo-3", title: "Xcelore - Business Solutions", client: "Xcelore", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fxcelore.com%2F?w=600", year: "2024", previewUrl: "https://xcelore.com/" },
          { id: "woo-4", title: "Beauty Seraphina - Beauty Products", client: "Beauty Seraphina", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fbeautyseraphina.com%2F?w=600", year: "2024", previewUrl: "https://beautyseraphina.com/" },
          { id: "woo-5", title: "Gold Butterfly Store", client: "Gold Butterfly", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fgold-butterfly-576401.hostingersite.com%2F?w=600", year: "2024", previewUrl: "https://gold-butterfly-576401.hostingersite.com/" },
        ]
      },
      {
        id: "custom-single-vendor",
        title: "Custom E-commerce - Single Vendor",
        description: "Fully custom single-vendor stores built from scratch",
        icon: Building2,
        works: [
          { id: "single-1", title: "Premium Furniture Store", client: "WoodCraft Elite", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "single-2", title: "Luxury Car Parts", client: "AutoPremium", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "single-3", title: "Industrial Equipment", client: "HeavyDuty Co.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80", year: "2023", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "single-4", title: "Gourmet Food Store", client: "Taste Masters", image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "single-5", title: "Medical Supplies", client: "HealthFirst", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "single-6", title: "Office Furniture B2B", client: "WorkSpace Pro", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", year: "2023", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "single-7", title: "Wine & Spirits", client: "Cellar Select", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "single-8", title: "Designer Eyewear", client: "OpticLux", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
        ]
      },
      {
        id: "multi-vendor-ci",
        title: "Multi-Vendor Marketplace on CI",
        description: "Scalable multi-vendor marketplaces built on CodeIgniter",
        icon: Brain,
        works: [
          { id: "multi-1", title: "Fashion Marketplace", client: "TrendSetters", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "multi-2", title: "Handmade Crafts Market", client: "ArtisanHub", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "multi-3", title: "Electronics Marketplace", client: "GadgetWorld", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80", year: "2023", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "multi-4", title: "Food Delivery Platform", client: "FoodieMarket", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "multi-5", title: "Service Marketplace", client: "ProConnect", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "multi-6", title: "Wholesale B2B Market", client: "TradeHub", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", year: "2023", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "multi-7", title: "Rental Marketplace", client: "RentItAll", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
          { id: "multi-8", title: "Local Vendors Platform", client: "ShopLocal", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", year: "2024", previewUrl: "https://preview.themeforest.net/item/flavor-starter-template/full_screen_preview/12345" },
        ]
      }
    ],
    clientWork: [
      {
        id: "fashion-marketplace",
        title: "Fashion Marketplace",
        client: "TrendSetters",
        description: "Multi-vendor fashion marketplace connecting 500+ designers with millions of shoppers, featuring AI-powered recommendations.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
        tags: ["Marketplace", "Fashion", "AI Recommendations"],
        year: "2024",
        testimonial: {
          quote: "Sales increased 280% in the first year. The platform handles peak traffic beautifully.",
          author: "Jessica Lee",
          role: "Founder, TrendSetters"
        }
      },
      {
        id: "b2b-ecommerce",
        title: "B2B Wholesale Platform",
        client: "SupplyChain Direct",
        description: "B2B e-commerce platform with custom pricing, bulk ordering, credit management, and ERP integration for wholesale distribution.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        tags: ["B2B", "Wholesale", "ERP Integration"],
        year: "2024"
      },
      {
        id: "subscription-box",
        title: "Subscription Box Platform",
        client: "CurateBox",
        description: "Subscription commerce platform managing 100K+ subscribers with flexible plans, personalization, and churn prediction.",
        image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80",
        tags: ["Subscription", "Personalization", "Retention"],
        year: "2023"
      },
      {
        id: "grocery-delivery",
        title: "Grocery Delivery App",
        client: "FreshCart",
        description: "Full-stack grocery delivery platform with real-time inventory, route optimization, and 30-minute delivery promise.",
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&q=80",
        tags: ["Grocery", "Delivery", "Real-time Inventory"],
        year: "2023",
        testimonial: {
          quote: "We went from idea to 50,000 daily orders in 18 months with this platform.",
          author: "Alex Thompson",
          role: "CEO, FreshCart"
        }
      },
      {
        id: "luxury-ecommerce",
        title: "Luxury E-Commerce Experience",
        client: "Prestige Collections",
        description: "High-end e-commerce platform for luxury goods with AR try-on, white-glove delivery tracking, and VIP customer portal.",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
        tags: ["Luxury", "AR Experience", "Premium UX"],
        year: "2024"
      },
      {
        id: "digital-products",
        title: "Digital Products Store",
        client: "CreatorHub",
        description: "Platform for selling digital products including courses, templates, and software with instant delivery and license management.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        tags: ["Digital Products", "Instant Delivery", "Licensing"],
        year: "2024"
      }
    ]
  },
  {
    slug: "ai-automation",
    icon: Brain,
    title: "AI & Automation",
    description: "Smart automation that saves time, reduces cost, and scales operations.",
    longDescription: "We harness the power of artificial intelligence to automate workflows, enhance customer experiences, and unlock insights from your data. Our AI solutions are practical, scalable, and deliver measurable ROI.",
    features: ["AI Chatbots", "Voice Agents", "Workflow Automation", "CRM & Business Automation"],
    accentColor: "primary",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    stats: [
      { label: "Automations Built", value: "500+" },
      { label: "Hours Saved/Month", value: "100K+" },
      { label: "Cost Reduction", value: "70%" },
      { label: "Accuracy Rate", value: "99.2%" },
    ],
    clientWork: [
      {
        id: "customer-service-ai",
        title: "AI Customer Service Suite",
        client: "TelecomGiant",
        description: "AI-powered customer service handling 80% of inquiries automatically via chat and voice, reducing support costs by $2M annually.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
        tags: ["AI Chatbot", "Voice AI", "Customer Service"],
        year: "2024",
        testimonial: {
          quote: "Customer satisfaction improved while we reduced support costs by 65%. The AI handles complex queries remarkably well.",
          author: "Mark Stevens",
          role: "VP Customer Experience, TelecomGiant"
        }
      },
      {
        id: "sales-automation",
        title: "Sales Intelligence Platform",
        client: "SalesForce Pro",
        description: "AI-driven sales automation with lead scoring, email personalization, and predictive analytics that increased close rates by 40%.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        tags: ["Sales AI", "Lead Scoring", "Predictive Analytics"],
        year: "2024"
      },
      {
        id: "document-processing",
        title: "Intelligent Document Processing",
        client: "LegalEase Firm",
        description: "AI system processing 10,000+ legal documents daily, extracting key information and flagging risks with 99% accuracy.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        tags: ["Document AI", "Legal Tech", "Data Extraction"],
        year: "2023"
      },
      {
        id: "workflow-automation",
        title: "Enterprise Workflow Engine",
        client: "FinanceFirst Bank",
        description: "End-to-end workflow automation for loan processing, reducing approval time from 5 days to 4 hours while ensuring compliance.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        tags: ["Workflow", "Banking", "Compliance"],
        year: "2023",
        testimonial: {
          quote: "Loan processing that took a week now happens in hours. Our customers are thrilled.",
          author: "Rachel Green",
          role: "CTO, FinanceFirst Bank"
        }
      },
      {
        id: "voice-assistant",
        title: "Enterprise Voice Assistant",
        client: "HealthCare Plus",
        description: "HIPAA-compliant voice AI for appointment scheduling, prescription refills, and patient inquiries handling 50,000 calls monthly.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
        tags: ["Voice AI", "Healthcare", "HIPAA Compliant"],
        year: "2024"
      },
      {
        id: "predictive-maintenance",
        title: "Predictive Maintenance AI",
        client: "Industrial Dynamics",
        description: "IoT + AI solution predicting equipment failures 2 weeks in advance, reducing unplanned downtime by 85%.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        tags: ["IoT", "Predictive AI", "Manufacturing"],
        year: "2024"
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectCategory | undefined => {
  return projectCategories.find(project => project.slug === slug);
};

export const getClientWorkById = (slug: string, workId: string): ClientWork | undefined => {
  const category = getProjectBySlug(slug);
  return category?.clientWork.find(work => work.id === workId);
};

