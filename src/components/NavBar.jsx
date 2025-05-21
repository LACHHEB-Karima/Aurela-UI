import { FaUser, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useCartStore from "../store/useCartStore";
import { useAuth } from "../context/AuthContext"; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };


  const handleSearchClick = () => {
    navigate("/perfumes?search=true");
  };

  const linkClass = ({ isActive }) =>
    `relative pb-1 transition 
     after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] 
     after:bottom-0 after:h-0.5 after:bg-black 
     after:transition-all after:duration-300
     ${isActive ? "after:w-4" : "after:w-0 hover:after:w-4"}`;

  return (
    <header className="font-sans mx-auto mt-2 w-full max-w-7xl sm:px-8 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex items-center">
        AURELA<span className="text-pink-300 text-3xl">.</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-8 items-center text-sm uppercase">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/perfumes" className={linkClass}>Perfumes</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4 text-lg relative">
        <button>
          <FaSearch onClick={handleSearchClick} className="cursor-pointer" />
        </button>

        {/* User Icon and Dropdown */}
        <div className="relative">
          {isAuthenticated ? (
            <>
              <FaUser
                className="cursor-pointer"
                onClick={() => setDropdownOpen((prev) => !prev)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 top-8 mt-1 w-40 bg-gray-100 shadow-lg rounded-md z-50">
                  <button
                    onClick={() => {
                      navigate("/orders");
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm border-b border-gray-300 hover:bg-white"
                  >
                    Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to="/login">
              <FaUser className="cursor-pointer" />
            </Link>
          )}
        </div>

        {/* Shopping Bag with Count */}
        <div className="relative">
          <Link to="/cart">
            <FaShoppingBag className="cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -bottom-2 -right-2 bg-pink-400 text-white text-xs font-bold rounded-full px-1.5">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <FaBars onClick={() => setMenuOpen(true)} className="lg:hidden cursor-pointer" />
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t lg:hidden flex flex-col items-center gap-4 py-4 z-20">
          <button onClick={() => setMenuOpen(false)} className="absolute top-2 right-4 text-2xl">
            <IoClose />
          </button>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/perfumes" onClick={() => setMenuOpen(false)} className={linkClass}>Perfumes</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={linkClass}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={linkClass}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default NavBar;
