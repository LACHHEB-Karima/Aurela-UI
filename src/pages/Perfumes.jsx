import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

export default function Perfumes() {
  const [sortBy, setSortBy] = useState("Relavant");
  const [showFilters, setShowFilters] = useState(false); 
  
  // Sample product data
  const products = [
    {
      id: 1,
      title: "Kid Tapered Slim Fit Trouser",
      price: "38",
      image: "/api/placeholder/400/320", 
      category: "kids"
    },
    {
      id: 2,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: "64",
      image: "/api/placeholder/400/320", 
      category: "men"
    },
    {
      id: 3,
      title: "Boy Round Neck Pure Cotton T-shirt",
      price: "60",
      image: "/api/placeholder/400/320", 
      category: "kids"
    },
    {
      id: 4,
      title: "Women Zip-Front Relaxed Fit Jacket",
      price: "74",
      image: "/api/placeholder/400/320", 
      category: "women"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200 ">
       <div className="flex flex-col md:flex-row">
        {/* Filters section */}
        <div className="w-full md:w-1/4 pr-6">
          {/* FILTERS title with toggle icon only on small screens */}
          <div
            className="flex items-center justify-between mb-4 md:mb-6 cursor-pointer md:cursor-default"
            onClick={() => {
              if (window.innerWidth < 768) {
                setShowFilters((prev) => !prev);
              }
            }}
          >
            <h2 className="font-sans text-xl">FILTERS</h2>
            <FaChevronDown
              className={`ml-2 text-gray-600 transition-transform duration-200 md:hidden ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </div>
          {/* Filters content */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          
          {/* Categories filter */}
          <div className="border border-gray-300 p-4 mb-4">
            <h5 className="font-bold text-sm mb-3">CATEGORIES</h5>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="men" className="mr-2 h-4 w-4" />
                <label htmlFor="men" className="text-gray-600 text-sm">Men</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="women" className="mr-2 h-4 w-4" />
                <label htmlFor="women" className="text-gray-600 text-sm">Women</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="kids" className="mr-2 h-4 w-4" />
                <label htmlFor="kids" className="text-gray-600 text-sm">kids</label>
              </div>
            </div>
          </div>
          
          {/* Type filter */}
          <div className="border border-gray-300 p-4">
            <h5 className="font-bold text-sm mb-3">TYPE</h5>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="topwear" className="mr-2 h-4 w-4" />
                <label htmlFor="topwear" className="text-gray-600 text-sm">Topwear</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="bottomwear" className="mr-2 h-4 w-4" />
                <label htmlFor="bottomwear" className="text-gray-600 text-sm">Bottomwear</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="winterwear" className="mr-2 h-4 w-4" />
                <label htmlFor="winterwear" className="text-gray-600 text-sm">Winterwear</label>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* Products section */}
        <div className="w-full md:w-3/4 mt-6 md:mt-0">
          {/* Header with title and sort */}
          <div className="flex justify-between items-center mb-6">
            <Title text="all perfumes" />
            <div className="relative">
              <select 
                className="appearance-none border border-gray-300 px-4 py-2 pr-8 bg-white text-gray-900 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Sort by: Relavant</option>
                <option>Sort by: Low to High</option>
                <option>Sort by: High to Low</option>
                <option>Sort by: Newest</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaChevronDown size={16} />
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}