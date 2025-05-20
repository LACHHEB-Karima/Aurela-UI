import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { createOrder } from '../services/OrderService';
import useCartStore from '../store/useCartStore';

const Order = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCartStore();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 10;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    setError('');
    if (cartItems.length === 0) {
      setError('Your cart is empty.');
      return;
    }

    const orderRequest = {
      ...form,
      paymentMethod: paymentMethod.toUpperCase(),
      items: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      setLoading(true);
      await createOrder(orderRequest);
      clearCart();
      navigate('/orders');
    } catch (err) {
      setError(err.message || 'Failed to place order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl flex flex-col m-auto mb-30 border-t border-gray-300 md:flex-row gap-10 p-8 font-sans">
      {/* Delivery Info */}
      <div className="w-full mt-10 md:w-1/2">
        <Title text="DELIVERY INFORMATION" />
        <form className="space-y-4 mt-4">
          <div className="flex gap-4">
            <input name="firstName" value={form.firstName} onChange={handleInputChange} className="w-1/2 border px-4 py-2" placeholder="First name" />
            <input name="lastName" value={form.lastName} onChange={handleInputChange} className="w-1/2 border px-4 py-2" placeholder="Last name" />
          </div>
          <input name="email" value={form.email} onChange={handleInputChange} className="w-full border px-4 py-2" placeholder="Email address" />
          <input name="street" value={form.street} onChange={handleInputChange} className="w-full border px-4 py-2" placeholder="Street" />
          <div className="flex gap-4">
            <input name="city" value={form.city} onChange={handleInputChange} className="w-1/2 border px-4 py-2" placeholder="City" />
            <input name="state" value={form.state} onChange={handleInputChange} className="w-1/2 border px-4 py-2" placeholder="State" />
          </div>
          <div className="flex gap-4">
            <input name="zipCode" value={form.zipCode} onChange={handleInputChange} className="w-1/2 border px-4 py-2" placeholder="Zipcode" />
            <input name="country" value={form.country} onChange={handleInputChange} className="w-1/2 border px-4 py-2" placeholder="Country" />
          </div>
          <input name="phone" value={form.phone} onChange={handleInputChange} className="w-full border px-4 py-2" placeholder="Phone" />
        </form>
      </div>

      {/* Cart & Payment */}
      <div className="w-full flex flex-col gap-6 justify-center md:w-1/2">
        <CartTotal subtotal={subtotal} shippingFee={shippingFee} />
        <div className="mb-6 relative">
          <Title text="PAYMENT METHOD" />
          <div className="flex items-center gap-4 mt-4">
            <label className="flex items-center gap-2 cursor-pointer border px-4 py-2">
              <input type="radio" name="payment" disabled checked={paymentMethod === 'stripe'} onChange={() => setPaymentMethod('stripe')} />
              <span className="text-[#6772e5] font-bold">Stripe</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer border px-4 py-2">
              <input type="radio" name="payment" disabled checked={paymentMethod === 'razorpay'} onChange={() => setPaymentMethod('razorpay')} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Razorpay_logo.svg/512px-Razorpay_logo.svg.png" alt="Razorpay" className="h-5" />
            </label>
            <label className="flex items-center gap-2 cursor-pointer border px-4 py-2">
              <input type="radio" name="payment" checked={paymentMethod === 'CASH_ON_DELIVERY'} onChange={() => setPaymentMethod('CASH_ON_DELIVERY')} />
              <span className="font-semibold text-sm text-gray-500">CACH ON DELIVERY</span>
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="mt-4 bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800"
          >
            {loading ? 'Placing Order...' : 'PLACE ORDER'}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Order;
