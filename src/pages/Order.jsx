import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { useState } from 'react';

const Order = () => {
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const subtotal = 100;
    const shippingFee = 10;

    return (
        <div className="w-full max-w-7xl flex flex-col m-auto mb-30 border-t border-gray-300 md:flex-row gap-10 p-8 font-sans">
            {/* Delivery Information */}
            <div className="w-full mt-10 md:w-1/2">
                <Title text="DELIVERY INFORMATION" />
                <form className="space-y-4 mt-4">
                    <div className="flex gap-4">
                        <input className="w-1/2 border border-gray-300 px-4 py-2" placeholder="First name" />
                        <input className="w-1/2 border border-gray-300 px-4 py-2" placeholder="Last name" />
                    </div>
                    <input className="w-full border border-gray-300 px-4 py-2" placeholder="Email address" />
                    <input className="w-full border border-gray-300 px-4 py-2" placeholder="Street" />
                    <div className="flex gap-4">
                        <input className="w-1/2 border border-gray-300 px-4 py-2" placeholder="City" />
                        <input className="w-1/2 border border-gray-300 px-4 py-2" placeholder="State" />
                    </div>
                    <div className="flex gap-4">
                        <input className="w-1/2 border border-gray-300 px-4 py-2" placeholder="Zipcode" />
                        <input className="w-1/2 border border-gray-300 px-4 py-2" placeholder="Country" />
                    </div>
                    <input className="w-full border border-gray-300 px-4 py-2" placeholder="Phone" />
                </form>
            </div>

            {/* Cart and Payment Section */}
            <div className="w-full flex flex-col gap-6 justify-center md:w-1/2">
                <CartTotal subtotal={subtotal} shippingFee={shippingFee} />
                <div className="mb-6 relative">
                    <Title text="payment method" />
                    <div className="flex items-center gap-4 mt-4">
                        <label className="flex items-center gap-2 cursor-pointer border border-gray-300 px-4 py-2">
                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === 'stripe'}
                                onChange={() => setPaymentMethod('stripe')}
                            />
                            <span className="text-[#6772e5] font-bold">stripe</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer border border-gray-300 px-4 py-2">
                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === 'razorpay'}
                                onChange={() => setPaymentMethod('razorpay')}
                            />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Razorpay_logo.svg/512px-Razorpay_logo.svg.png" alt="Razorpay" className="h-5" />
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer border border-gray-300 px-4 py-2">
                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === 'cod'}
                                onChange={() => setPaymentMethod('cod')}
                            />
                            <span className="font-semibold text-sm text-gray-500">CASH ON DELIVERY</span>
                        </label>
                    </div>
                    <button className="mt-4 absolute right-15 max-w-fit bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800">
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
