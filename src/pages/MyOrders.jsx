import { useEffect, useState } from 'react';
import { getMyOrderItems } from '../services/OrderService';
import MyOrder from '../components/MyOrder';
import Title from '../components/Title';

const MyOrders = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMyOrderItems();
      if (data && data.content) {
        setOrderItems(data.content);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-7xl m-auto border-t border-gray-200 px-4 py-8 mb-8">
      <Title text="My Orders" className="mt-8" />
      <div className="mt-4">
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <MyOrder key={index} order={item} />
          ))
        ) : (
          <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
