import React, { useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, error } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location.state?.from || "/home";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    let newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    loginUser(loginData.email, loginData.password, history, redirect_uri);
    e.preventDefault();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container  my-5">
        {/* login section */}
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="text-center">Login</h2>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="User Email"
                  onBlur={handleOnBlur}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="User Password"
                  onBlur={handleOnBlur}
                />
              </div>

              <Link to="/register">Need to Register?</Link>
              <div className="text-center">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          {/* login poster */}
          <div className="col-12 col-md-6">
            <img
              src="https://cdn.dribbble.com/users/1018473/screenshots/5344535/login.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
