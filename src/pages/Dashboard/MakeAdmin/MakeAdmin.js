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
      {success && <Alert severity="success">Email Added Successfully.</Alert>}
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          class="form-control"
          onBlur={handleOnBlur}
          id="exampleFormControlInput1"
          placeholder="User Name"
        />
        <input type="submit" value="Make Admin" />
      </form>
    </div>
  );
};

export default MakeAdmin;
