import React from 'react'
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import {Logout} from "./components/Logout"
import ErrorPage from "./ErrorPage";
import  Login  from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { useLocation,Route, Routes } from 'react-router-dom';
import {  AnimatePresence } from "framer-motion"

export const AnimateRoute = () => {

  const location=useLocation();

  return (
    <AnimatePresence >
        <Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
   </Routes>
    </AnimatePresence>
   
  )
}
