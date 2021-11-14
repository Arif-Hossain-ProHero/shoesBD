import React, { useRef } from "react";

const AddProduct = () => {
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const img = imageRef.current.value;

    const newProducts = { name: title, description, price, img };
    fetch("https://floating-meadow-68096.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product added successfully.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-center my-5">Add Product</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4">
            {/* title */}
            <div className="mb-3 col">
              <label
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label"
              >
                Product Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                ref={titleRef}
                required
                placeholder="Title"
              />
            </div>
            {/* price */}
            <div className="mb-3 col">
              <label
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label"
              >
                Product Price
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                ref={priceRef}
                required
                placeholder="Price"
              />
            </div>
            {/* Image Url */}
            <div className="mb-3 col">
              <label
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label"
              >
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Image URL"
                ref={imageRef}
                required
              />
            </div>
            {/* Description */}
            <div className="mb-3 col">
              <label
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label"
              >
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Description"
                ref={descriptionRef}
                required
              />
            </div>
          </div>
          {/* submit button */}
          <div className="text-center">
            <input
              className="btn btn-primary"
              type="submit"
              value="ADD PRODUCT"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
