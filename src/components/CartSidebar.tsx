import { X, Minus, Plus, Trash2, ShoppingBag, Send, Sparkles } from "lucide-react";
import { useCart, CartItem } from "@/context/CartContext";
import { categoryColors } from "@/data/services";
import { useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail || items.length === 0) return;

    setIsSubmitting(true);

    // Prepare the service bucket data
    const servicesBucket = items.map((item) => ({
      service: item.service.name,
      quantity: item.quantity,
      price: item.service.price,
      total: item.service.price * item.quantity,
    }));

    // In production, this would send to your backend/email service
    // For now, we'll create a mailto link with the order details
    const orderDetails = `
New Service Request from Brandzaha Studio

Customer Details:
- Name: ${customerName}
- Email: ${customerEmail}
- Phone: ${customerPhone}

Services Requested:
${servicesBucket.map((s) => `- ${s.service} x${s.quantity} = $${s.total}`).join("\n")}

Total: $${getTotal()}
    `.trim();

    // Create mailto link (you can replace this with actual API call)
    const mailtoLink = `mailto:contact@brandzaha.com?subject=New Service Request&body=${encodeURIComponent(orderDetails)}`;
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    window.open(mailtoLink, "_blank");
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      clearCart();
      setSubmitted(false);
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
      onClose();
    }, 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
                <p className="text-sm text-gray-500">{items.length} services selected</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 text-sm">Add services to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItemCard
                    key={item.service.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Checkout Form */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-gray-50/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                  <p className="text-gray-500 text-sm">We'll get back to you soon</p>
                </div>
              ) : (
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <span className="text-gray-600 font-medium">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${getTotal().toLocaleString()}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We'll review your request and get back within 24 hours
                  </p>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const CartItemCard = ({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItem;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}) => {
  const colors = categoryColors[item.service.category];

  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 group hover:shadow-md transition-all duration-300">
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center text-2xl flex-shrink-0`}>
        {item.service.icon}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 truncate">{item.service.name}</h4>
        <p className={`text-sm font-medium ${colors.text}`}>
          ${item.service.price} × {item.quantity}
        </p>
      </div>

      {/* Quantity & Remove */}
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => onRemove(item.service.id)}
          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => onUpdateQuantity(item.service.id, item.quantity - 1)}
            className="w-6 h-6 rounded flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.service.id, item.quantity + 1)}
            className="w-6 h-6 rounded flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
