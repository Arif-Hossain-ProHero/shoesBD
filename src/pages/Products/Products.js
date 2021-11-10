import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./productsDb.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div class="mx-auto container my-5">
      <h1 class="text-center my-5">Best Selling Products</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
