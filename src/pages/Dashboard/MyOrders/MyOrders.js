import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyOrders(data);
      });
  }, [myOrders]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("Deleted successfully");
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center my-5">My orders</h1>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {/* </table> */}
        {myOrders.map((order, index) => (
          // <table class="table table-bordered border-primary">
          <tbody>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>
                <button>{order.status}</button>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyOrders;
