import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container my-5">
        <h2 className="text-center mb-5">ORDER NOW</h2>
        <div className="d-flex flex-md-row flex-column">
          <div className="w-50">
            <form>
              {/* user name */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="useName"
                  id="exampleFormControlInput1"
                  // value={user.displayName || ""}
                  readOnly
                />
              </div>
              {/* email */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  // value={user.email || ""}
                  readOnly
                />
              </div>
              {/* address */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Address"
                />
              </div>
              {/* phone */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                />
              </div>
              {/* date */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Date"
                />
              </div>
              {/* pacakge title */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Package Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="product-name"
                  id="exampleFormControlInput1"
                  value={product.name || ""}
                  readOnly
                />
              </div>
              {/* price */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={product.price || ""}
                  readOnly
                />
              </div>
              <input
                className="regular-btn border-0 p-2 rounded"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
          <div className="ms-3 w-50">
            {/* <h2>PACKAGE DETAILS</h2> */}
            <img className="img-fluid" src={product.img} alt="" />
            <h4 className="mt-2">
              <span className="text-success">Package Name:</span> {product.name}
            </h4>
            <p>{product.description}</p>
            <h5>
              <span className="text-success  pe-2">Price:</span>
              {product.price}
            </h5>
            <p>
              <span className="text-success pe-2">Ratings:</span>
              {product.rating}{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
