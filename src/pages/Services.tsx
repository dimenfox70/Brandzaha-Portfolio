import { useState, useEffect } from "react";
import { ShoppingCart, Filter, Sparkles, ArrowRight, Search, Package, Palette, ChevronRight } from "lucide-react";
import { services, categoryLabels, categoryColors, Service } from "@/data/services";
import { useCart } from "@/context/CartContext";
import ServiceCard from "@/components/ServiceCard";
import CartSidebar from "@/components/CartSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type CategoryFilter = "all" | "design" | "marketing" | "tech";

const Services = () => {
  const { getItemCount, getTotal } = useCart();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeFilter === "all" || service.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemCount = getItemCount();
  const total = getTotal();

  const filterButtons: { label: string; value: CategoryFilter; gradient: string }[] = [
    { label: "All Services", value: "all", gradient: "from-gray-600 to-gray-800" },
    { label: "Design", value: "design", gradient: "from-purple-500 to-pink-500" },
    { label: "Marketing", value: "marketing", gradient: "from-pink-500 to-rose-500" },
    { label: "Tech", value: "tech", gradient: "from-teal-500 to-cyan-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shop Creative Services
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-gray-900">Build Your</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Service Bucket
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Pick the services you need, add them to your cart, and we'll create a custom package just for you.
            </p>

            {/* Search Bar */}
            <div
              className={`max-w-xl mx-auto transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {filterButtons.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeFilter === filter.value
                      ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg shadow-purple-500/20`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="cart-icon-target relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center animate-scale-in">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-500">
              Showing <span className="font-semibold text-gray-900">{filteredServices.length}</span> services
              {activeFilter !== "all" && (
                <span>
                  {" "}
                  in{" "}
                  <span className={`font-semibold ${categoryColors[activeFilter as keyof typeof categoryColors].text}`}>
                    {categoryLabels[activeFilter as keyof typeof categoryLabels]}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
            </div>
          )}

          {/* CTA Cards Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Branding Package Card */}
            <a
              href="https://brandzaha.com/contact-us.php"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              </div>
              
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Want a Full Branding Package?
                  </h3>
                  <p className="text-white/70 text-sm md:text-base mb-4">
                    Get logo, brand identity, social media kit, and website — all in one comprehensive package with special pricing.
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Get Started</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </a>

            {/* Create Custom Package Card */}
            <div
              onClick={() => setIsCartOpen(true)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 p-8 md:p-10 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-1"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              </div>
              
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Create Your Custom Package
                  </h3>
                  <p className="text-white/70 text-sm md:text-base mb-4">
                    Mix and match services above to build your perfect package. Add what you need to your cart and checkout.
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Cart ({itemCount} items)</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      {itemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200 py-4 shadow-2xl shadow-purple-500/10 animate-slide-up">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between gap-4">
              {/* Summary */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    {itemCount} {itemCount === 1 ? "service" : "services"} selected
                  </p>
                  <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ${total.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <span className="hidden sm:inline">Proceed to Checkout</span>
                <span className="sm:hidden">Checkout</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Extra padding for sticky bar */}
      {itemCount > 0 && <div className="h-24" />}

      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Services;
