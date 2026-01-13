import { useState, useRef } from "react";
import { Plus, Check, ShoppingCart, Sparkles } from "lucide-react";
import { Service, categoryColors } from "@/data/services";
import { useCart } from "@/context/CartContext";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { addToCart, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const colors = categoryColors[service.category];
  const inCart = isInCart(service.id);

  const handleAddToCart = () => {
    if (isAdding) return;
    
    setIsAdding(true);
    
    // Trigger the flying animation
    const card = cardRef.current;
    if (card) {
      const flyingIcon = document.createElement("div");
      flyingIcon.innerHTML = "🛒";
      flyingIcon.className = "flying-cart-icon";
      flyingIcon.style.cssText = `
        position: fixed;
        font-size: 24px;
        z-index: 9999;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      `;
      
      const rect = card.getBoundingClientRect();
      flyingIcon.style.left = `${rect.left + rect.width / 2}px`;
      flyingIcon.style.top = `${rect.top + rect.height / 2}px`;
      
      document.body.appendChild(flyingIcon);
      
      // Animate to cart icon
      setTimeout(() => {
        const cartIcon = document.querySelector(".cart-icon-target");
        if (cartIcon) {
          const cartRect = cartIcon.getBoundingClientRect();
          flyingIcon.style.left = `${cartRect.left + cartRect.width / 2}px`;
          flyingIcon.style.top = `${cartRect.top + cartRect.height / 2}px`;
          flyingIcon.style.transform = "scale(0.3)";
          flyingIcon.style.opacity = "0";
        }
      }, 50);
      
      setTimeout(() => {
        flyingIcon.remove();
      }, 700);
    }
    
    addToCart(service);
    setShowCheck(true);
    
    setTimeout(() => {
      setIsAdding(false);
      setShowCheck(false);
    }, 1500);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 bg-white hover:bg-gradient-to-br ${colors.gradient}`}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-sm text-white text-xs font-semibold shadow-lg transition-all duration-300">
            <Sparkles className="w-3 h-3" />
            Popular
          </div>
        </div>
      )}

      {/* Card content */}
      <div className="relative p-6">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl ${colors.bg} group-hover:bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-all duration-300`}>
          {service.icon}
        </div>

        {/* Service name */}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 group-hover:text-white/80 text-sm mb-4 line-clamp-2 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features preview */}
        {service.features && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {service.features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 text-xs rounded-full ${colors.bg} ${colors.text} group-hover:bg-white/20 group-hover:text-white font-medium transition-all duration-300`}
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 group-hover:bg-white/20 text-gray-500 group-hover:text-white/80 font-medium transition-all duration-300">
                +{service.features.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-300">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 group-hover:text-white/60 uppercase tracking-wider transition-colors duration-300">Starting at</span>
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent group-hover:text-white group-hover:bg-none transition-all duration-300`}>
                ${service.price}
              </span>
              <span className="text-gray-400 group-hover:text-white/60 text-sm transition-colors duration-300">/project</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden
              ${inCart && !isAdding
                ? `bg-white text-gray-800 shadow-lg`
                : `bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-white hover:bg-white hover:!text-gray-800 hover:shadow-lg hover:scale-110`
              }
              ${isAdding ? "scale-110 bg-white !text-gray-800" : ""}
            `}
          >
            {showCheck ? (
              <Check className="w-5 h-5 animate-scale-in" />
            ) : inCart ? (
              <ShoppingCart className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
            
            {/* Ripple effect */}
            {isAdding && (
              <span className="absolute inset-0 bg-white animate-ping rounded-xl opacity-30" />
            )}
          </button>
        </div>

        {/* In cart indicator */}
        {inCart && !isAdding && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 group-hover:bg-white/80 transition-colors duration-300" />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
