import React, { useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Alert from "@mui/material/Alert";

const Register = () => {
  const [registrationData, setRegistrationData] = useState({});
  const history = useHistory();
  const { createUser, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    let newRegistrationData = { ...registrationData };
    newRegistrationData[field] = value;
    setRegistrationData(newRegistrationData);
  };

  const handleSubmit = () => {
    createUser(
      registrationData.email,
      registrationData.password,
      registrationData.name,
      history
    );
  };
  return (
    <div>
      <Navbar></Navbar>
      <div class="container  my-5">
        {/* login section */}
        <div class="row">
          <div class="col-12 col-md-6">
            <h2 className="text-center">Register</h2>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-primary"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="user-name"
                  class="form-control"
                  onBlur={handleOnBlur}
                  id="exampleFormControlInput1"
                  placeholder="User Name"
                  onBlur={handleOnBlur}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-primary"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  onBlur={handleOnBlur}
                  id="exampleFormControlInput1"
                  placeholder="User Email"
                  onBlur={handleOnBlur}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-primary"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="User Password"
                  onBlur={handleOnBlur}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-primary"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Confirm Password"
                  onBlur={handleOnBlur}
                />
              </div>

              <Link to="/login">Already Registered?</Link>
              <div class="text-center">
                <button class="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
          {/* login poster */}
          <div class="col-12 col-md-6">
            <img
              src="https://cdn.dribbble.com/users/1018473/screenshots/5344535/login.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
