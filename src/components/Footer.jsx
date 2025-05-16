import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap lg:flex-nowrap gap-10 text-sm text-left">
        {/* Left: Logo and Description */}
        <div className="w-full lg:w-1/2">
          <div className="font-sans text-2xl font-bold tracking-widest flex items-center mb-4">
            AURELA<span className="text-pink-300 ml-1 text-3xl">.</span>
          </div>
          <p className="max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Right: Links (Company + Contact) */}
        <div className="w-full lg:w-1/2 flex flex-wrap gap-10">
          {/* Company Links */}
          <div className="w-1/2 min-w-[140px]">
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-black">Home</Link></li>
              <li><Link to="/about" className="hover:text-black">About us</Link></li>
              <li><Link to="/delivery" className="hover:text-black">Delivery</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-black">Privacy policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-[140px]">
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2">
              <li>+1-000-000-0000</li>
              <li>
                <a href="mailto:aurela.prefum@gmail.com" className="hover:text-black">
                  aurela.prefum@gmail.com
                </a>
              </li>
              <li><Link to="/instagram" className="hover:text-black">Instagram</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-200 p-6 text-center text-sm text-black">
        Copyright 2025@ Aurela – All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
