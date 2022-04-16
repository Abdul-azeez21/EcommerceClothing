import "./App.css";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Homepage from "./components/Pages/homepage";
import Shop from "./components/Pages/Shop";
import Gentlemen from "./components/Pages/gentlemen";
import Product from "./components/Pages/Productdetail";
import Payment from "./components/Pages/Payment";
import Cart from "./components/Pages/Cart";
import { Component } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="gentlemen" element={<Gentlemen />} />
      <Route path="product" element={<Product />} />
      <Route path="payment" element={<Payment />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
