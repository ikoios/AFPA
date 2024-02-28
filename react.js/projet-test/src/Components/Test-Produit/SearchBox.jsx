import React from "react";
import ProductList from "./ProductList";
//
export default function SearchBox() {
  return (
    <>
      <div>
        <label htmlFor="">
          <input type="search" placeholder="Search" />
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Only show products in stock
        </label>
      </div>
      <div>
        <ProductList />
      </div>
    </>
  );
}
