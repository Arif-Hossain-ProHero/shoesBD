import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container mt-5 pb-4">
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
        {/* contact */}
        <div className="col">
          <h3 className="text-center text-white pb-3">CONTACT</h3>
          <div>
            <p className="text-white">
              We are the largest and most celebrated network of professional
              travel agents in North America. Wherever you want to go, however
              you want to get there, whatever you want to do—we have the ideal
              travel agent match just for you.
            </p>
            <div className="fst-italic contact">
              <address>
                <i className="fas fa-map-marker-alt pe-2"></i>4th Floor,
                Mahboob's Building, Mirpur-12
              </address>
              <p>
                <i className="fas fa-phone-alt pe-2"></i>+880-XXXXXXXXXX
              </p>
              <p>
                <i className="far fa-envelope pe-2"></i>nice-trip@support.com
              </p>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="col">
          <div>
            <h3 className="text-center text-white">SEND FEEDBACK</h3>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label text-white"
              >
                Feedback
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Leave a Message"
              ></textarea>
            </div>
            <button className="btn btn-primary">SEND</button>
          </div>
        </div>
        {/* menu */}
        <div className="col menu ">
          <h3 className="text-center text-white pb-3">MENU</h3>
          <div>
            <Link to="/about">
              <p>
                <span className="me-3 text-warning">{`>`}</span>About Us
              </p>
            </Link>
            <Link to="/blog">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Blog
              </p>
            </Link>
            <Link to="/contact">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Contact Us
              </p>
            </Link>
            <Link to="/services">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Services
              </p>
            </Link>
            <Link to="/support">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* payment and follow us section */}
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 text-center">
        <div className="col">
          <h4>Payment Method</h4>
          <img
            src="https://www.kindpng.com/picc/m/44-440249_paypal-payment-methods-icons-hd-png-download.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col">
          <h4>Follow Us</h4>
          <div className="fs-1 text-white">
            <i className="fab fa-facebook-square me-3"></i>
            <i className="fab fa-twitter-square me-3"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="col">
          <h4>Download App</h4>
          <img
            src="https://i.ibb.co/02cWN89/google-play-store.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <p className="text-center mt-4">
        Copyright &copy;2021. All Rights Reserved By SHOESBD.
        <Link to="policy" className="text-decoration-none text-white">
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
};

export default Footer;
