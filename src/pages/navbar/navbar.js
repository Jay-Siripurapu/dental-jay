import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [loggedin, setlogin] = useState(true);

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <span className="tlines">|||</span>
      </label>

      <label className="logo">Vishnu Dental</label>
      {loggedin ? (
        <ul>
          <li className="navli">
            <Link to="/" style={{ textDecoration: "none", color: "#edf0f1" }}>
              SignIn
            </Link>
          </li>
          <li className="navli">
            <Link
              to="/home/"
              style={{ textDecoration: "none", color: "#edf0f1" }}
            >
              Home
            </Link>
          </li>
          <li className="navli">
            <Link
              to="/reset/"
              style={{ textDecoration: "none", color: "#edf0f1" }}
            >
              Reset_User
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to="/about/"
              style={{ textDecoration: "none", color: "#edf0f1" }}
            >
              About
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav_links">
          <li>
            <button className="homebutton">
              <Link
                to="/about/"
                style={{ textDecoration: "none", color: "#edf0f1" }}
              >
                About
              </Link>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
