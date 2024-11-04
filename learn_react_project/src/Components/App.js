import React from "react";
import Banner from './LMJ/Banner';
import Cart from './LMJ/Cart';
import ShoppingList from './LMJ/ShoppingList'
import Footer from "./LMJ/Footer";
import { useState } from "react";
import "react-bootstrap";
import { Container } from "react-bootstrap";

export default function App() {
  const [cart, updateCart] = useState([]);
  return (
    <>
      <Banner />
      <div className="d-flex justify-content-between">
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
};