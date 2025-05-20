import { FaShoppingBag } from "react-icons/fa";
import useCartStore from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, name, price, quantity }) => {
  const addToCart = useCartStore(state => state.addToCart);
  const error = useCartStore(state => state.error);
  const clearError = useCartStore(state => state.clearError);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/perfume/${id}`)
  }

  const handleAdd = () => {
    addToCart({ id, name, image, price, stock: quantity });
    setTimeout(() => clearError(), 3000);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <img
          onClick={handleClick}
          src={image}
          alt={name}
          className="w-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={handleAdd}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaShoppingBag className="text-gray-700 text-sm" />
        </button>
      </div>
      <h3 className="px-2 text-sm text-gray-800">{name}</h3>
      <p className="px-2 text-sm font-medium text-gray-900">${price}</p>
      {error && <p className="px-2 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default ProductCard;
