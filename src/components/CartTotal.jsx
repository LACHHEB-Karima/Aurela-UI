import Title from "./Title";
export default function CartTotal({ subtotal, shippingFee }) {

  const total = subtotal + shippingFee;

  return (
    <div className="pt-6 max-w-md">
      <Title text="cart total"/>
      <div className="mt-2 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between pt-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-300 pt-2">
          <span>Shipping Fee</span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-black border-t border-gray-300 pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
