import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-center my-5">CATEGORIES</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col ">
            <div className="card category-img shadow p-3 mb-5 bg-body rounded">
              <div className=" overflow-hidden">
                <img
                  src="https://www.mensjournal.com/wp-content/uploads/2021/04/Toms1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body text-center">
                <button className="btn btn-warning px-4">
                  <h5 className="card-title text-white">MEN SHOE</h5>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card category-img shadow p-3 mb-5 bg-body rounded">
              <div className=" overflow-hidden">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eda4c2e9-5b2b-4931-9016-fed6be788c90/blazer-mid-77-lx-womens-shoes-tdJnmf.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body text-center">
                <button className="btn btn-warning px-4">
                  <h5 className="card-title text-white">WOMEN SHOE</h5>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card category-img shadow p-3 mb-5 bg-body rounded">
              <div className=" overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/CU/GI/SI/SELLER-96582944/s10-500x500.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body text-center">
                <button className="btn btn-warning px-4">
                  <h5 className="card-title text-white">KIDS</h5>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card category-img shadow p-3 mb-5 bg-body rounded ">
              <div className=" overflow-hidden">
                <img
                  src="https://sc04.alicdn.com/kf/H725cc9fe2dc843109013d2c87ba1fd89k.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body text-center">
                <button className="btn btn-warning px-4">
                  <h5 className="card-title text-white">SANDALS</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
