import MyOrder from '../components/MyOrder';
import Title from '../components/Title';

const MyOrders = () => {
  const orders = [
    {
      id: 1,
      image: 'https://example.com/image.jpg',
      title: 'Men Round Neck Pure Cotton T-shirt',
      price: 64,
      quantity: 2,
      size: 'XL',
      date: 'Fri May 16 2025',
      paymentMethod: 'COD',
    },
    {
      id: 2,
      image: 'https://example.com/image.jpg',
      title: 'Men Round Neck Pure Cotton T-shirt',
      price: 64,
      quantity: 2,
      size: 'XL',
      date: 'Fri May 16 2025',
      paymentMethod: 'COD',
    },
  ];

  return (
    <div className="w-full max-w-7xl m-auto border-t border-gray-200 px-4 py-8 mb-8">
       <Title text="My orders" className="mt-8"/>
      <div className="mt-4">
        {orders.map(order => (
          <MyOrder key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
