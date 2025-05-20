import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ id, image, name, price }) => {
  return (
    <div className="space-y-2">
      <div className="relative">
        <Link to={`/perfume/${id}`} className="block overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Floating Bag Icon */}
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaShoppingBag className="text-gray-700 text-sm" />
        </button>
      </div>
    
             <h3 className="font-sans px-2 text-sm text-gray-800">{name}</h3>
             <p className="px-2 text-sm font-medium text-gray-900">${price}</p>
    
     
    </div>
  );
};

export default ProductCard;
