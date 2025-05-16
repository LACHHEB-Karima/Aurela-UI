const MyOrder = ({ order }) => {
  return (
    <div className="w-full max-w-7xl border-b border-t border-gray-200 px-4 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      
      {/* Order Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
        {/* Image */}
        <img src={order.image} alt="product" className="w-20 h-20 object-cover border" />
        
        {/* Text */}
        <div className="text-gray-700">
          <h3 className="font-semibold text-gray-800">{order.title}</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              ${order.price} &nbsp; | &nbsp; Quantity: {order.quantity} &nbsp; | &nbsp; Size: {order.size}
            </p>
            <p>Date: <span className="text-gray-400">{order.date}</span></p>
            <p>Payment: <span className="text-gray-400">{order.paymentMethod}</span></p>
          </div>
        </div>
      </div>

      {/* Right Section: Status + Button */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
          Order Placed
        </div>        

        <button className="border border-gray-300 px-3 py-1 text-sm text-gray-800 hover:bg-gray-100">
          Track Order
        </button>
      </div>
    </div>
  );
};

export default MyOrder;
