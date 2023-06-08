import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Register from './pages/auth/Register'
// import Login from './pages/auth/Login'
import { LoginRegister } from "./pages/auth/LoginRegister";
// import Shop from "./pages/shop/Shop"
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import DetailProduct from "./pages/shop/product/DetailProduct"
// import Cart from "./pages/cart/Cart";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Product from './pages/dashboard/Product'
// import EditProduct from './pages/dashboard/EditProduct'
// import AddProduct from './pages/dashboard/AddProduct'
// import AddCategoryProduct from './pages/dashboard/AddCategoryProduct'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/masuk" element={<Login />} /> */}
        <Route path="/" element={<LoginRegister />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shop/product/detail-product" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/add-category-product" element={<AddCategoryProduct />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
