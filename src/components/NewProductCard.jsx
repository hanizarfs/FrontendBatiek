import React from "react";
import Logo from "../assets/img/LogoBuAtik.png";

const NewProductCard = () => {
  return (
      <div className="w-full p-8 text-center border border-gray-200 rounded-lg hover:bg-[rgba(60,42,33,0.1)]">
        <img src={Logo} alt="" />
        <h2 className="text-3xl font-semibold text-[#3C2A21] uppercase">
          Nama Barang
        </h2>
        <p className="font-bold text-[#3C2A21] text-2xl uppercase">Free</p>
        <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#3C2A21] rounded-md hover:bg-[#4b3529] focus:outline-none focus:bg-[#3C2A21] focus:ring focus:ring-bg-[#3C2A21] focus:ring-opacity-80">
          Beli Sekarang
        </button>
      </div>
  );
};

export default NewProductCard;
