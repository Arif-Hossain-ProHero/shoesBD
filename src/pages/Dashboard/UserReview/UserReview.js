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
    fetch("https://floating-meadow-68096.herokuapp.com/reviews", {
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
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Review Headline
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            required
            name="headline"
            onBlur={handleOnBlur}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Leave your review here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="review"
            required
            onBlur={handleOnBlur}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Give Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            required
            min="0"
            max="5"
            name="rating"
            onBlur={handleOnBlur}
          />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default UserReview;
