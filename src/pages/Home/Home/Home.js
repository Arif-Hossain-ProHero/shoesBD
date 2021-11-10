import React from "react";
import Products from "../../Products/Products";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Products></Products>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
