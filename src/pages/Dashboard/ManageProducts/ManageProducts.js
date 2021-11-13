import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `https://floating-meadow-68096.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  // delete product
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://floating-meadow-68096.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("Deleted successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center my-5">Manage Products</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {/* </table> */}
        {products.map((product, index) => (
          // <table className="table table-bordered border-primary">
          <tbody>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageProducts;
