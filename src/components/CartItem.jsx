import { FaTrash } from "react-icons/fa";

export default function CartItem({ item, onIncrease, onDecrease, onRemove, onQuantityChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-300 pb-4 px-2 gap-4">
      <div className="flex items-center gap-6">
        <img src={item.image} alt={item.name} className="w-20 h-auto" />
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-700">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-0">
          <button
            onClick={() => onDecrease(item.id)}
            className="px-2 py-1 border hover:bg-gray-100"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
            className="w-14 border-t border-b text-center py-1 "
          />
          <button
            onClick={() => onIncrease(item.id)}
            className="px-2 py-1 border hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-500 hover:text-red-400"
          >
            <FaTrash className="w-12 h-5"/>
          </button>
        </div>
      </div>
    </div>
  );
}
