import React from "react";
import Rating from "@mui/material/Rating";
import "./Product.css";

const Product = (props) => {
  const { name, img, description, rating, price, newProduct } = props.product;
  return (
    <div class="col">
      <div class="card">
        <img src={img} class="card-img-top card-img" alt="..." />
        <div class="middle">
          <div class="text">Shoe</div>
        </div>
        {/* new produc */}
        {newProduct && (
          <div class="text-block">
            <p>NEW</p>
          </div>
        )}
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div>
          <div class="price">
            <h3 class="fw-bold">${price}</h3>
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
          </div>
          <div>
            <button class="w-100 btn btn-warning">
              <i class="fas fa-shopping-cart"></i>Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
