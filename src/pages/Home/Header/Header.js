import React from "react";

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
              <div class="row row-cols-2">
                <div class="col">
                  <img
                    className="img-fluid"
                    src="https://img.freepik.com/free-photo/colorful-slip-unisex-streetwear-sneakers-fashion_53876-101518.jpg?size=626&ext=jpg"
                    alt=""
                  />
                </div>
                <div class="col">
                  <h1>20% OFF for Today</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse assumenda quas pariatur ut inventore laudantium magni
                    necessitatibus perferendis aliquid hic officia incidunt,
                    accusantium commodi recusandae molestiae similique
                    consequatur id maiores.
                  </p>
                  <button>Explore More</button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid mx-auto">
              <div class="row row-cols-2">
                <div class="col">
                  <img
                    className="img-fluid"
                    src="https://img.freepik.com/free-photo/colorful-slip-unisex-streetwear-sneakers-fashion_53876-101518.jpg?size=626&ext=jpg"
                    alt=""
                  />
                </div>
                <div class="col">
                  <h1>20% OFF for Today</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse assumenda quas pariatur ut inventore laudantium magni
                    necessitatibus perferendis aliquid hic officia incidunt,
                    accusantium commodi recusandae molestiae similique
                    consequatur id maiores.
                  </p>
                  <button>Explore More</button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid mx-auto">
              <div class="row row-cols-2">
                <div class="col">
                  <img
                    className="img-fluid"
                    src="https://img.freepik.com/free-photo/colorful-slip-unisex-streetwear-sneakers-fashion_53876-101518.jpg?size=626&ext=jpg"
                    alt=""
                  />
                </div>
                <div class="col">
                  <h1>20% OFF for Today</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse assumenda quas pariatur ut inventore laudantium magni
                    necessitatibus perferendis aliquid hic officia incidunt,
                    accusantium commodi recusandae molestiae similique
                    consequatur id maiores.
                  </p>
                  <button>Explore More</button>
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
