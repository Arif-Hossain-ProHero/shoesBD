import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const UserReview = () => {
  const { user } = useAuth();
  const [reviewDetail, setReviewDetail] = useState({});
  const date = new Date().toLocaleDateString();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewDetail = { ...reviewDetail };
    newReviewDetail[field] = value;
    setReviewDetail(newReviewDetail);
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    const newReview = { ...reviewDetail, date, name: user.displayName };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Review Placed Successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center">Review</h1>
      <form className="mx-auto w-75" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Review Headline
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            required
            name="headline"
            onBlur={handleOnBlur}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Leave your review here
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="review"
            required
            onBlur={handleOnBlur}
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Give Rating
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            required
            min="0"
            max="5"
            name="rating"
            onBlur={handleOnBlur}
          />
        </div>
        <input type="submit" value="Submit Review" />
      </form>
    </div>
  );
};

export default UserReview;