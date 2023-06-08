import React from "react";
import { Navbar } from "../../components/Navbar";
import HeroSwiper from "../../components/HeroSwiper";
import CollectionCard from "../../components/CollectionCard";
import BestSellerSwiper from "../../components/BestSellerSwiper.jsx";
import NewProductCard from "../../components/NewProductCard";
import { Footer } from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[120px]">
        <HeroSwiper />
        <section className="collection">
          <div className="container mx-auto py-8 grid grid-cols-1 gap-8 xl:gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CollectionCard
              title="TUNIC BESTARI"
              redirect="/shop/collection-1"
            />
            <CollectionCard
              title="LONGDRESS KAFTAN"
              redirect="/shop/collection-2"
            />
            <CollectionCard
              title="LONGDRESS LUKIS"
              redirect="/shop/collection-3"
            />
          </div>
        </section>
        <section className="best-seller bg-[#3C2A21] py-8">
          <div className="container mx-auto px-6 py-8 text-center">
            <h1 className="text-gray-200 font-semibold text-2xl">
              OUR BEST SELLER PRODUCTS
            </h1>
            <h1 className="text-white font-semibold text-4xl">BEST SELLER</h1>
            <div className="py-8 grid grid-cols-1 gap-8 xl:gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
          </div>
          <BestSellerSwiper />
        </section>
        <section className="new-products">
          <div className="container mx-auto px-6 py-8 text-center">
            <h1 className="text-[#493327] font-semibold text-2xl">
              OUR NEW PRODUCTS
            </h1>
            <h1 className="text-[#3C2A21] font-semibold text-4xl">
              NEW ARRIVAL
            </h1>
            <div className="py-8 grid grid-cols-1 gap-8 xl:gap-4 md:grid-cols-2 lg:grid-cols-3">
            <NewProductCard />
            <NewProductCard />
            <NewProductCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
