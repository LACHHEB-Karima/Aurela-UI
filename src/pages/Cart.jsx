import { useState } from "react";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import CartItem from "../components/CartItem";

const initialItems = [
  {
    id: 1,
    name: "Kid Tapered Slim Fit Trouser",
    size: "M",
    price: 38,
    quantity: 1,
    image: "/api/placeholder/80/100",
  },
  {
    id: 2,
    name: "Kid Tapered Slim Fit Trouser",
    size: "XXL",
    price: 38,
    quantity: 1,
    image: "/api/placeholder/80/100",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleIncrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1); // fallback to 1 if invalid
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 10;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200">
      <div className="mb-8">
        <Title text="your cart" />
      </div>

      <div className="flex flex-col gap-10">
        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </div>

        {/* Cart Total */}
        <div className="self-end w-full sm:w-1/2 lg:w-1/3">
          <CartTotal subtotal={subtotal} shippingFee={shippingFee} />
                <button className="mt-6 w-full bg-black text-white py-3 text-sm font-semibold">
                    PROCEED TO CHECKOUT
                </button>
        </div>
      </div>
    </div>
  );
}
