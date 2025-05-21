import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import {
  getAllMinimalProducts,
  getProductsSortedByPriceAsc,
  getProductsSortedByPriceDesc,
  getProductsSortedByCreatedAtDesc,
  searchProducts,
  getProductsByCategory,
  getProductsBySubCategory
} from "../services/ProductService";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import { FaChevronDown } from "react-icons/fa";

export default function Perfumes() {
  const [sortBy, setSortBy] = useState("Relavant");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const isSearchMode = searchParams.get("search") === "true";

  const categories = [
    { id: 2, name: "Man" },
    { id: 1, name: "Woman" },
    { id: 3, name: "Unisex" }
  ];

  const subCategories = [
    { id: 1, name: "Soft" },
    { id: 2, name: "Fresh"},
    { id: 5, name: "Woody"},
    { id: 3, name: "Floral"}
  ];

  const handleCategoryChange = (id) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    );
  };

  const handleSubCategoryChange = (id) => {
    setSelectedSubCategories(prev =>
      prev.includes(id) ? prev.filter(subId => subId !== id) : [...prev, id]
    );
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let result = [];

      const hasCategoryFilter = selectedCategories.length > 0;
      const hasSubCategoryFilter = selectedSubCategories.length > 0;

      if (!hasCategoryFilter && !hasSubCategoryFilter) {
        switch (sortBy) {
          case "Low to High":
            result = await getProductsSortedByPriceAsc();
            break;
          case "High to Low":
            result = await getProductsSortedByPriceDesc();
            break;
          case "Newest":
            result = await getProductsSortedByCreatedAtDesc();
            break;
          default:
            result = await getAllMinimalProducts();
        }
        setProducts(result.content || []);
        return;
      }

      let filteredByCategory = [];
      let filteredBySubCategory = [];

      if (hasCategoryFilter) {
        for (const catId of selectedCategories) {
          const res = await getProductsByCategory(catId);
          filteredByCategory.push(...(res.content || []));
        }
      }

      if (hasSubCategoryFilter) {
        for (const subId of selectedSubCategories) {
          const res = await getProductsBySubCategory(subId);
          filteredBySubCategory.push(...(res.content || []));
        }
      }

      let intersectedProducts;

      if (hasCategoryFilter && hasSubCategoryFilter) {
        const catIds = new Set(filteredByCategory.map(p => p.id));
        intersectedProducts = filteredBySubCategory.filter(p => catIds.has(p.id));
      } else if (hasCategoryFilter) {
        intersectedProducts = filteredByCategory;
      } else {
        intersectedProducts = filteredBySubCategory;
      }

      setProducts(intersectedProducts);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchKeyword.trim()) {
      setIsSearching(false);
      fetchProducts();
      return;
    }

    try {
      setLoading(true);
      const result = await searchProducts(searchKeyword);
      setProducts(result.content || []);
      setIsSearching(true);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSearch = () => {
    setSearchParams({});
    setSearchKeyword("");
    setIsSearching(false);
  };

  useEffect(() => {
    if (!isSearchMode || !isSearching) {
      fetchProducts();
    }
  }, [sortBy, selectedCategories, selectedSubCategories, isSearchMode, isSearching]);

  return (

    <div className="max-w-7xl mx-auto px-4 border-t border-gray-100">
      {isSearchMode && (
        <div className="w-full bg-[#f0f0f0] py-4 flex justify-center relative">
          <div className="relative w-1/2 max-w-md">
            <input
              type="text"
              placeholder="Search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-5 pr-10 py-3 text-sm rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
          <button
              onClick={handleCloseSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
            >
              <FaTimes className="w-4 h-4" />
            </button>
        </div>
      )}

      <div className="flex flex-col mt-8 px-4 md:flex-row">
        {/* Filters */}
        <div className="w-full md:w-1/4 pr-6">
          <div
            className="flex items-center justify-between mb-4 md:mb-6 cursor-pointer md:cursor-default"
            onClick={() => window.innerWidth < 768 && setShowFilters((prev) => !prev)}
          >
            <h2 className="font-sans text-xl">FILTERS</h2>
            <FaChevronDown
              className={`ml-2 text-gray-600 transition-transform duration-200 md:hidden ${showFilters ? "rotate-180" : ""}`}
            />
          </div>

          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            {/* Category Filter */}
            <div className="border border-gray-300 p-4 mb-4">
              <h5 className="font-bold text-sm mb-3">CATEGORIES</h5>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`cat-${cat.id}`}
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor={`cat-${cat.id}`} className="text-gray-600 text-sm">
                      {cat.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Subcategory Filter */}
            <div className="border border-gray-300 p-4">
              <h5 className="font-bold text-sm mb-3">TYPE</h5>
              <div className="space-y-2">
                {subCategories.map((sub) => (
                  <div key={sub.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`sub-${sub.id}`}
                      checked={selectedSubCategories.includes(sub.id)}
                      onChange={() => handleSubCategoryChange(sub.id)}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor={`sub-${sub.id}`} className="text-gray-600 text-sm">
                      {sub.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="w-full md:w-3/4 mt-6 md:mt-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <Title text="all perfumes" />
            <div className="relative">
              <select
                className="appearance-none border border-gray-300 px-4 py-2 pr-8 bg-white text-gray-900 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Relavant</option>
                <option>Low to High</option>
                <option>High to Low</option>
                <option>Newest</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaChevronDown size={16} />
              </div>
            </div>
          </div>

          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.principalImageUrl}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
