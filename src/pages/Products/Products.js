import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://floating-meadow-68096.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="mx-auto container my-5">
      <h1 className="text-center my-5">Best Selling Products</h1>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
          <CircularProgress />
        </Box>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
