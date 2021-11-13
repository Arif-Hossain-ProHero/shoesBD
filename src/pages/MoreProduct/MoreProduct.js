import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
const MoreProduct = (props) => {
  const { name, img, description, rating, price, newProduct, _id } =
    props.product;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top card-img" alt="..." />
        <div title="Add to Wish list" className="middle">
          <div className="text">
            <i className="fas fa-heart"></i>
          </div>
        </div>
        {/* new produc */}
        {newProduct && (
          <div className="text-block">
            <p>NEW</p>
          </div>
        )}
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 40)}...</p>
        </div>
        <div>
          <div className="price text-center">
            <h3 className="fw-bold">${price}</h3>
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
          </div>
          <div>
            <Link to={`/products/${_id}`}>
              <button className="w-100 btn btn-warning">
                <i className="fas fa-shopping-cart"></i>Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProduct;
