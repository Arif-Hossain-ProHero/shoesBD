import React from "react";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

const Reviews = () => {
  const reviews = [
    {
      name: "Arif",
      review: "The product is very good but need improvement.bla bla bla...",
      date: "5th Nov 2021",
      rating: 4,
    },
    {
      name: "Arif",
      review: "The product is very good but need improvement.bla bla bla...",
      date: "5th Nov 2021",
      rating: 4,
    },
    {
      name: "Arif",
      review: "The product is very good but need improvement.bla bla bla...",
      date: "5th Nov 2021",
      rating: 4,
    },
  ];
  return (
    <div class="container mx-auto">
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
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">{rev.review}</p>
              <a href="#" class="btn btn-primary">
                Read Review
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
