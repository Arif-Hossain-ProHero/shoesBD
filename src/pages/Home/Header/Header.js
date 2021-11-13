import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* first item */}
          <div className="carousel-item active">
            <div className="container-fluid mx-auto">
              <div className="row row-cols-2  carousel-bg">
                <div className="col">
                  <img
                    className="img-fluid carousel-img"
                    src="https://img.freepik.com/free-photo/colorful-slip-unisex-streetwear-sneakers-fashion_53876-101518.jpg?size=626&ext=jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="my-4 text-center">
                    <h1 className="fw-bold fs-1 text-warning mb-3">
                      MEGA OFFER
                    </h1>
                    <h3>20% OFF for Today</h3>
                    <h3 className=" my-3">
                      ONLY ON <span className="text-danger">SHOESBD</span>
                    </h3>
                  </div>
                  <div className="text-center">
                    <Link to="/more-products">
                      <button className="btn btn-primary">More Products</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid mx-auto">
              <div className="row row-cols-2  carousel-bg">
                <div className="col">
                  <img
                    className="img-fluid carousel-img"
                    src="https://xeroshoes.com/wp-content/themes/xeroshoes/assets/images/menu/xero-shoes-PRM-LNR_Prio-Lunar_LS.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="my-4 text-center">
                    <h1 className="fw-bold fs-1 text-warning mb-3">
                      MEGA OFFER
                    </h1>
                    <h3>20% OFF for Today</h3>
                    <h3 className=" my-3">
                      ONLY ON <span className="text-danger">SHOESBD</span>
                    </h3>
                  </div>
                  <div className="text-center">
                    <Link to="/more-products">
                      <button className="btn btn-primary">More Products</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid mx-auto">
              <div className="row row-cols-2  carousel-bg-3">
                <div className="col">
                  <img
                    className="img-fluid carousel-img"
                    src="https://houseofheat.co/app/uploads/2020/05/nike-adapt-auto-max-infrared-ci5018-002-release-date-info-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="my-5 text-white">
                    <h1>
                      KEEP MOVIENG WITH{" "}
                      <span className="text-warning">SHOESBD</span>
                    </h1>
                    <h2 className="my-4">
                      WE OFFER <span className="text-dark">EXCLUSIVE</span> SHOE
                      COLLECTION
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
