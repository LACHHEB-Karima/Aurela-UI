import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStarHalf } from "react-icons/fa";
import { getProductById, getProductsByCategoryName } from "../services/ProductService";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductAndRelated() {
      try {
        const data = await getProductById(id);
        setProduct(data);

        const principal = data.images.find(img => img.principal)?.url || data.images[0]?.url;
        setMainImage(principal);

        const categoryName = data.categoryName;
        const related = await getProductsByCategoryName(categoryName, 0, 6);

        const filtered = related.content.filter(p => p.id.toString() !== id);
        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Failed to load product or related products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductAndRelated();
  }, [id]);

  if (loading || !product) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 border-t border-gray-200">
      <div className="flex flex-col gap-4 lg:flex-row gap-10">
        {/* Image Section */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {product.images.slice(0, 4).map(img => (
              <img
                key={img.id}
                src={img.url}
                alt={img.title}
                onClick={() => setMainImage(img.url)}
                className={`w-20 h-auto border cursor-pointer ${
                  mainImage === img.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <div className="flex items-center mb-2">
            <div className="text-red-400 flex">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalf />
            </div>
            <span className="ml-2 text-gray-600 text-sm">(122)</span>
          </div>
          <div className="text-2xl font-bold mb-4">${product.price}</div>
          <p className="text-gray-600 text-sm mb-6 max-w-lg">{product.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Categories</h4>
            <div className="flex gap-2">
              {["New", product.categoryName, product.subCategoryName].map((label, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-700 text-gray-900 text-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <button className="bg-black text-white py-3 px-8 text-sm font-semibold mb-6">ADD TO CART</button>

          <ul className="text-gray-600 text-sm border-t border-gray-300 w-fit space-y-1 mb-10 pt-4">
            <li>100% Original product.</li>
            <li>Cash on delivery is available on this product.</li>
            <li>Easy return and exchange policy within 7 days.</li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border border-gray-300 w-fit mt-8">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-2 text-sm font-medium border-r border-gray-300 ${
            activeTab === "description" ? "font-bold text-black bg-white" : "text-gray-600 bg-gray-100"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-6 py-2 text-sm font-medium ${
            activeTab === "reviews" ? "font-bold text-black bg-white" : "text-gray-600 bg-gray-100"
          }`}
        >
          Reviews (122)
        </button>
      </div>

      {/* Tab Content */}
      <div className="border border-t border-gray-300 p-6 text-sm text-gray-700 leading-relaxed">
        {activeTab === "description" ? (
          <p>{product.longDescription}</p>
        ) : (
          <p>Reviews will go here. You can integrate a review list, rating breakdown, and review form here.</p>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="w-full max-w-7xl mx-auto pt-16 px-4 md:px-8">
          <div className="flex justify-center mb-8">
            <Title text="Related perfumes" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {relatedProducts.map(p => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.principalImageUrl}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
