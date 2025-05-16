const ProductCard = ({ image, name, price }) => {
  return (
    <div className="text-center space-y-2">
      <img src={image} alt={name} className="w-full object-cover" />
      <h3 className="text-sm font-medium text-gray-800">{name}</h3>
      <p className="text-base font-semibold text-gray-900">${price}</p>
    </div>
  );
};

export default ProductCard;
