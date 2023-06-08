import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#3C2A21]">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-1">
            {/* <h1 className="text-xl font-semibold tracking-tight text-white xl:text-2xl">
              Subscribe our newsletter to get update.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div> */}
          </div>
          <div>
            <p className="font-semibold text-white text-end">MY ACCOUNT</p>
            <div className="flex flex-col items-end mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                ACCOUNT
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                MY WISHLIST
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white text-end">PAGE</p>
            <div className="flex flex-col items-end mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                SHOP
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                EVENT
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white text-end">MY ACCOUNT</p>
            <div className="flex flex-col items-end mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                ACCOUNT
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                MY WISHLIST
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-8" />
        <div className="flex items-center justify-center">
          <h6 className="text-white">B@TIEK SOLO CORP. 2022</h6>
        </div>
      </div>
    </footer>
  );
};
