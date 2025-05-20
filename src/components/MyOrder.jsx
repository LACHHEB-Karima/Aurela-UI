const MyOrder = ({ order }) => {
  return (
    <div className="w-full max-w-7xl border-b border-t border-gray-200 px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Order Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:w-1/3">
        <img
          src={order.principalImageUrl}
          alt={order.productName}
          className="w-20 h-20 object-cover"
        />
        <div className="text-gray-700">
          <h3 className="font-semibold text-gray-800">{order.productName}</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              ${order.priceAtPurchase} &nbsp; | &nbsp; Quantity: {order.quantity}
            </p>
            <p>Date: <span className="text-gray-400">{order.createdAt}</span></p>
            <p>Payment: <span className="text-gray-400">COD</span></p>
          </div>
        </div>
      </div>

      {/* Centered Order Status */}
      <div className="flex flex-col items-center justify-center sm:w-1/3 my-4 sm:my-0">
        <div className="flex items-center text-sm text-gray-600">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
           Order Placed
        </div>
      </div>

      {/* Track Button */}
      <div className="flex justify-end items-center sm:w-1/3">
        <button className="border border-gray-300 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded">
          Track Order
        </button>
      </div>
    </div>

  );
};

export default MyOrder;
