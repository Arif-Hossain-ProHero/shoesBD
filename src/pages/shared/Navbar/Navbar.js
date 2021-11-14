import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = (e) => {
    logOut();
    e.preventDefault();
  };
  return (
    <div>
      <div className="navbar-container pb-2">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link to="/" className="navbar-brand fw-bold text-warning ">
              SHOESBD
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active fw-bold text-success">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/more-products"
                    className="nav-link active fw-bold text-success"
                  >
                    MORE PRODUCTS
                  </Link>
                </li>
              </ul>
              <div className="d-flex navbar-nav mb-2 mb-lg-0 me-5">
                {user.email ? (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link text-success fw-bold"
                        to="/dashboard"
                        activeStyle={{
                          backgroundColor: "rgb(232, 223, 223)",
                          borderRadius: "5px",
                        }}
                      >
                        DASHBOARD
                      </NavLink>
                    </li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-success me-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-warning">
                      Login
                    </Link>
                  </li>
                )}
                <div className="mt-2 text-warning">
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  {user.email ? user.displayName : ""}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* video */}
      </div>
    </div>
  );
};

export default Navbar;
