import React, { useState, useEffect } from "react";
import MoreProduct from "../MoreProduct/MoreProduct";
import Navbar from "../shared/Navbar/Navbar";

const MoreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div>
      {" "}
      <Navbar></Navbar>
      <div class="mx-auto container my-5">
        <h1 class="text-center my-5">Best Selling Products</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <MoreProduct product={product}></MoreProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
