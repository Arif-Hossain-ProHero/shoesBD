import React, { useState, useEffect } from "react";
import MoreProduct from "../MoreProduct/MoreProduct";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const MoreProducts = () => {
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
    <div>
      {" "}
      <Navbar></Navbar>
      <div className="mx-auto container my-5">
        <h1 className="text-center my-5">Best Selling Products</h1>
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
            <CircularProgress />
          </Box>
        )}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <MoreProduct key={product._id} product={product}></MoreProduct>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MoreProducts;
