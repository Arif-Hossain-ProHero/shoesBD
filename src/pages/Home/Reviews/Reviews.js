import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://floating-meadow-68096.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="container my-5 mx-auto">
      <h2 className="my-5 text-center">Reviews</h2>
      {reviews.map((rev) => (
        <div className=" mb-3">
          <div className="card d-flex flex-row justify-content-around">
            <div className="d-flex flex-column justify-content-center align-items-center mx-5">
              <Avatar src="/broken-image.jpg" />
              <h5>By {rev.name}</h5>
              <Rating
                name="read-only"
                value={rev.rating}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{rev.headline.toUpperCase()}</h5>
              <small className="muted">Published on: {rev.date}</small>
              <p className="card-text mt-2">{rev.review}</p>

              <Link to="/read-review" className="btn btn-primary">
                Read Review
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
