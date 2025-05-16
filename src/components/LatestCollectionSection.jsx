import Title from "./Title";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Kid Tapered Slim Fit Trouser",
    price: 38,
    image: "/images/kid-trouser.jpg",
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 64,
    image: "/images/men-cotton.jpg",
  },
  {
    name: "Boy Round Neck Pure Cotton T-shirt",
    price: 60,
    image: "/images/boy-cotton.jpg",
  },
  {
    name: "Women Zip-Front Relaxed Fit Jacket",
    price: 74,
    image: "/images/women-jacket.jpg",
  },
  {
    name: "Men Tapered Fit Flat-Front Trousers",
    price: 58,
    image: "/images/men-trouser.jpg",
  },
  {
    name: "Girl Pink T-shirt",
    price: 35,
    image: "/images/girl-shirt.jpg",
  },
  {
    name: "Women Soft Blush Jacket",
    price: 72,
    image: "/images/women-jacket2.jpg",
  },
  {
    name: "Mint Green Wide Pants",
    price: 66,
    image: "/images/mint-pants.jpg",
  },
  {
    name: "Men Beige Shirt",
    price: 52,
    image: "/images/beige-shirt.jpg",
  },
];

const LatestCollectionSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="mb-8">
          <div className="flex justify-center mb-4">
           <Title text="latest collection" />
          </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollectionSection;
