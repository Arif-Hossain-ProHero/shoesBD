import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          {/* first item */}
          <div class="carousel-item active">
            <div class="container-fluid mx-auto">
              <div class="row row-cols-2  carousel-bg">
                <div class="col">
                  <img
                    className="img-fluid carousel-img"
                    src="https://img.freepik.com/free-photo/colorful-slip-unisex-streetwear-sneakers-fashion_53876-101518.jpg?size=626&ext=jpg"
                    alt=""
                  />
                </div>
                <div class="col">
                  <div class="my-4 text-center">
                    <h1 class="fw-bold fs-1 text-warning mb-3">MEGA OFFER</h1>
                    <h3>20% OFF for Today</h3>
                    <h3 className=" my-3">
                      ONLY ON <span class="text-danger">SHOESBD</span>
                    </h3>
                  </div>
                  <div class="text-center">
                    <Link to="/more-products">
                      <button class="btn btn-primary">More Products</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid mx-auto">
              <div class="row row-cols-2  carousel-bg">
                <div class="col">
                  <img
                    className="img-fluid carousel-img"
                    src="https://xeroshoes.com/wp-content/themes/xeroshoes/assets/images/menu/xero-shoes-PRM-LNR_Prio-Lunar_LS.jpg"
                    alt=""
                  />
                </div>
                <div class="col">
                  <div class="my-4 text-center">
                    <h1 class="fw-bold fs-1 text-warning mb-3">MEGA OFFER</h1>
                    <h3>20% OFF for Today</h3>
                    <h3 className=" my-3">
                      ONLY ON <span class="text-danger">SHOESBD</span>
                    </h3>
                  </div>
                  <div class="text-center">
                    <Link to="/more-products">
                      <button class="btn btn-primary">More Products</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid mx-auto">
              <div class="row row-cols-2  carousel-bg-3">
                <div class="col">
                  <img
                    className="img-fluid carousel-img"
                    src="https://houseofheat.co/app/uploads/2020/05/nike-adapt-auto-max-infrared-ci5018-002-release-date-info-1.jpg"
                    alt=""
                  />
                </div>
                <div class="col">
                  <div class="my-5 text-white">
                    <h1>
                      KEEP MOVIENG WITH{" "}
                      <span class="text-warning">SHOESBD</span>
                    </h1>
                    <h2 class="my-4">
                      WE OFFER <span class="text-dark">EXCLUSIVE</span> SHOE
                      COLLECTION
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
