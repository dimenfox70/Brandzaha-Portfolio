import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/Logo/Logo.jpg" 
              alt="Brandzaha Studio" 
              className="h-10 w-auto rounded-lg"
            />
            <span className="font-semibold text-lg text-foreground hidden sm:block">Brandzaha Studio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isRoute && item.label === "Services" ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Services</span>
                </Link>
              ) : item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://brandzaha.com/contact-us.php" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </a>
            <a href="https://brandzaha.com/contact-us.php" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                Start a Project
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.isRoute && item.label === "Services" ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-semibold shadow-lg shadow-purple-500/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Shop Services</span>
                  </Link>
                ) : item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`py-2 transition-colors duration-200 flex items-center gap-2 ${
                      location.pathname === item.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <a href="https://brandzaha.com/contact-us.php" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
                </a>
                <a href="https://brandzaha.com/contact-us.php" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="default" className="w-full">
                    Start a Project
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
