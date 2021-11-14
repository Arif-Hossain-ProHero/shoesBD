import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { isLoading, setIsLoading } = useAuth();

  useEffect(() => {
    fetch("https://floating-meadow-68096.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [allOrders]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      setIsLoading(true);
      const url = `https://floating-meadow-68096.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount == 1) {
            alert("Deleted successfully");
            const remaining = allOrders.filter((order) => order._id !== id);
            setAllOrders(remaining);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleUpdate = (id) => {
    for (const singleOrder of allOrders) {
      if (singleOrder._id == id) {
        const updatedOrder = { ...singleOrder };
        updatedOrder.status = "Approved";
        setIsLoading(true);
        fetch(`https://floating-meadow-68096.herokuapp.com/orders/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedOrder),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount == 1) {
              console.log(result);
              alert("Updated Successfully.");
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  };
  //spinner
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-24">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center my-5">All Orders</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">User</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {/* </table> */}
        {allOrders.map((order, index) => (
          // <table className="table table-bordered border-primary">
          <tbody>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{order.title}</td>
              <td>{order.userName}</td>
              <td>
                <button
                  className="btn btn-danger me-1"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleUpdate(order._id)}
                >
                  {order.status}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageOrders;
