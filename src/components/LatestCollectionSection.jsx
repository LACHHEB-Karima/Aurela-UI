import { useEffect, useState } from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { getProductsSortedByCreatedAtDesc } from "../services/ProductService";

const LatestCollectionSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductsSortedByCreatedAtDesc(0, 10);
        setProducts(data.content);
      } catch (error) {
        console.error("Error fetching latest products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

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

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.principalImageUrl}
              id={product.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestCollectionSection;
