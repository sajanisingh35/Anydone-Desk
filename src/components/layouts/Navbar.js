import React from "react";
import logo from "../images/logo.png";
import anydone from "../images/anydone.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light fixed-top  font-weight-normal  bg-white box-shadow-down">
      <div className="navbarall pl-0 pr-1 pl-md-4">
        <a className="photo" href="#">
          <img src={logo} alt="logo" />
          <img src={anydone} className="d-none d-sm-inline" alt="anydone" />
        </a>
      </div>

      <div className="collapse navbar-collapse" id="anydone-navbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a
              className="nav-link text-capitalize"
              aria-current="page"
              href="/index"
            >
              <Link className=" nav-link" to="/">
                Home
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-capitalize" href="aboutus">
              {" "}
              <Link className=" nav-link" to="/aboutus">
                About Us
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-capitalize" href="features">
              <Link className=" nav-link" to="/features">
                Features
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-capitalize" href="pricing">
              <Link className=" nav-link" to="/pricing">
                Pricing
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown text-capitalize" data-mdb-toggle="dropdown"
              aria-expanded="false" href="">
              <Link className="nav-link" to="/solutions">
                Solutions
              </Link>

            </a>
          </li>
                  
          

          <li className="nav-item">
            <a className="nav-link text-capitalize" href="#">
              Sign In
            </a>
          </li>
          {/* <button className="btn btn-primary btn-lg  cta-button-primary_rounded text-capitalize" href="" target="_blank">Try Now
         </button> */}
          <li className="nav-item ">
            {/* <a className="
									btn1 btn-primary cta-button-primary_rounded
									text-capitalize
										cta-button-primary_lg cta-button-primary_rounded_lg
										text-uppercase
										mb-4 mb-sm-0
										mt-2
									" href="#" target="_blank">Try Now</a> */}
            <button
              type="button"
              className=" nav-button  btn-primary btn-rounded-lg text-capitalize btn-lg"
            >
              Try Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
