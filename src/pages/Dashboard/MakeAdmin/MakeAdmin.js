import { Alert } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        e.target.reset();
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2 class="text-center my-5">Make Admin</h2>
      {success && <Alert severity="success">Email Added Successfully.</Alert>}
      <form className="text-center" onSubmit={handleOnSubmit}>
        <div className="d-flex flex-row justify-content-center">
          <input
            type="email"
            name="email"
            class="form-control w-50"
            onBlur={handleOnBlur}
            id="exampleFormControlInput1"
            placeholder="User Email"
            required
          />
          <input className="btn btn-primary" type="submit" value="Make Admin" />
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
