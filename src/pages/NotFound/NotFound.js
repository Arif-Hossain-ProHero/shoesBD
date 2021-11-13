import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="fs-1 fw-bold py-4 text-danger">Oops!</h1>
      <h1 className="fs-2 fw-bold mb-5">
        <span className="text-warning fw-bold">404</span> Page Not Found
      </h1>
      <Link to="/" className="text-primary fw-bold border rounded py-2 px-3">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
