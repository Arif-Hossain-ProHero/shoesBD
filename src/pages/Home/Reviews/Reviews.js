import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div class="container my-5 mx-auto">
      <h2 className="my-5 text-center">Reviews</h2>
      {reviews.map((rev) => (
        <div class=" mb-3">
          <div class="card d-flex flex-row justify-content-around">
            <div class="d-flex flex-column justify-content-center align-items-center mx-5">
              <Avatar src="/broken-image.jpg" />
              <h5>By {rev.name}</h5>
              <Rating
                name="read-only"
                value={rev.rating}
                precision={0.5}
                readOnly
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{rev.headline.toUpperCase()}</h5>
              <small className="muted">Published on: {rev.date}</small>
              <p class="card-text mt-2">{rev.review}</p>

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
