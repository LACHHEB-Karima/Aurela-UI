import { FaUser, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import useCartStore from "../store/useCartStore";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useCartStore(state => state.cartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  const linkClass = ({ isActive }) =>
    `relative pb-1 transition 
   after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] 
   after:bottom-0 after:h-0.5 after:bg-black 
   after:transition-all after:duration-300
   ${isActive ? 'after:w-4' : 'after:w-0 hover:after:w-4'}`;

  return (
    <header className="font-sans mx-auto mt-2 w-full max-w-7xl sm:px-8 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        AURELA<span className="text-pink-300 text-3xl">.</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-8 items-center text-sm uppercase">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/perfumes" className={linkClass}>Perfumes</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4 text-lg">
        <button>
          <FaSearch className="cursor-pointer" />
        </button>
        <Link to="/login"><FaUser className="cursor-pointer" /></Link>

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
          <NavLink to="/login" onClick={() => setMenuOpen(false)} className={linkClass}>Login</NavLink>
          <NavLink to="/cart" onClick={() => setMenuOpen(false)} className={linkClass}>Shopping Bag</NavLink>
          <NavLink to="/search" onClick={() => setMenuOpen(false)} className={linkClass}>Search</NavLink>
        </div>
      )}
    </header>
  );
};

export default NavBar;
