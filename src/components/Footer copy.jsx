import React from "react";
import Logo from "../assets/img/LogoBuAtik.png";
import Cart from "../assets/img/icon/Cart.png";
import Account from "../assets/img/icon/Account.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white">
      <div className="bg-[#3C2A21] w-full p-3">
        <h6 className="text-base font-semibold text-white">
          Surakarta, Jawa Tengah, Indonesia
        </h6>
      </div>
      <nav className="shadow">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-between w-full py-4">
              <Link to="/">
                <img className="w-auto h-7 sm:h-20" src={Logo} alt="Logo" />
              </Link>
              <div className="py-3 overflow-y-auto whitespace-nowrap scroll-hidden flex justify-center">
                <Link
                  to="/"
                  className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:my-0"
                >
                  HOME
                </Link>
                <Link
                  to="/shop"
                  className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:my-0"
                >
                  SHOP
                </Link>
                <Link
                  to="/about-us"
                  className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:my-0"
                >
                  ABOUT US
                </Link>
                <Link
                  to="/contact-us"
                  className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:my-0"
                >
                  CONTACT US
                </Link>
              </div>
              <div className="flex flex-col md:flex-row md:mx-1">
                <Link
                  to="/cart"
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:mx-1 md:my-0"
                >
                  <img src={Cart} alt="Cart" className="w-8 md:w-10" />
                </Link>
                <Link
                  to="/login-register"
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:mx-1 md:my-0"
                >
                  <img src={Account} alt="Account" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-1">
              <Link to="/cart"
                className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:mx-4 md:my-0"
              >
                <img src={Cart} alt="Cart" className="w-8 md:w-10" />
              </Link>
              <Link to="/login-register"
                className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-900 hover:underline md:mx-4 md:my-0"
              >
                <img src={Account} alt="Account" className="w-8 md:w-10" />
              </Link>
            </div>
            <div className="my-4 md:hidden">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-yellow-800 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Search"
                />
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
