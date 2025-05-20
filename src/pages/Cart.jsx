import useCartStore from "../store/useCartStore";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    error,
    clearError,
  } = useCartStore();

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto flex flex-col px-4 py-12 border-t border-gray-200">
      <Title text="Your Cart" />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-6 mt-8 border-t border-gray-300 py-4">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => {
              increaseQuantity(item.id);
              setTimeout(() => clearError(), 3000);
            }}
            onDecrease={() => decreaseQuantity(item.id)}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>
      <div className="self-end w-full sm:w-1/2 lg:w-1/3 mt-8 flex-end">
        <CartTotal subtotal={subtotal} shippingFee={10} />
        <button className="mt-6 w-full bg-black text-white py-3 text-sm font-semibold">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}
