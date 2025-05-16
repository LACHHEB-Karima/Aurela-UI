import { useState } from "react";
import { FaStar, FaRegStarHalf } from "react-icons/fa";

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState("XXL");
    const [activeTab, setActiveTab] = useState("description");
    const sizes = ["S", "M", "L", "XL", "XXL"];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col gap-4 lg:flex-row gap-10">
                {/* Image Section */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                        <img src="/api/placeholder/120/320" alt="Thumbnail" className="w-20 h-auto border" />
                    </div>
                    <img src="/api/placeholder/400/500" alt="Main Product" className="w-full max-w-md object-cover" />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-2">Kid Tapered Slim Fit Trouser</h1>
                    <div className="flex items-center mb-2">
                        <div className="text-red-400 flex">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalf />
                        </div>
                        <span className="ml-2 text-gray-600 text-sm">(122)</span>
                    </div>
                    <div className="text-2xl font-bold mb-4">$38</div>
                    <p className="text-gray-600 text-sm mb-6 max-w-lg">
                        A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                    </p>
                    <div className="mb-6">
                        <h4 className="text-sm font-medium mb-2">Select Size</h4>
                        <div className="flex gap-2">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border text-sm ${selectedSize === size ? "border-black text-black" : "border-gray-300 text-gray-700 hover:border-black"
                                        }`}
                                >
                                    {size}
                                </button>
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
                    className={`px-6 py-2 text-sm font-medium border-r border-gray-300 ${activeTab === "description" ? "font-bold text-black bg-white" : "text-gray-600 bg-gray-100"
                        }`}
                >
                    Description
                </button>
                <button
                    onClick={() => setActiveTab("reviews")}
                    className={`px-6 py-2 text-sm font-medium ${activeTab === "reviews" ? "font-bold text-black bg-white" : "text-gray-600 bg-gray-100"
                        }`}
                >
                    Reviews (122)
                </button>
            </div>
            {/* Tab Content */}
            <div className="border border-t border-gray-300 p-6 text-sm text-gray-700 leading-relaxed">
                {activeTab === "description" ? (
                    <>
                        <p>
                            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.
                            E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                        </p>
                        <br />
                        <p>
                            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
                        </p>
                    </>
                ) : (
                    <p>Reviews will go here. You can integrate a review list, rating breakdown, and review form here.</p>
                )}
                {/* add RELATED PRODUCT SECTION HERE LATER */}
            </div>
        </div>
    );
}
