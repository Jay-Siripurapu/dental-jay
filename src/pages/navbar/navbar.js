import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout-24.png";
import vishnu from "../../images/vlogo.png"
const Navbar = () => {
  const [loggedin, setlogin] = useState(true);

  return (
    <nav >
      <input type="checkbox" id="check" />
      
      <label htmlFor="check" className="checkbtn">
      
        <span className="tlines">|||</span>
      </label>

      <label className="logo"><img style={{height:"25px",width:"25px"}} src={vishnu}/> Vishnu_Dental</label>
      {loggedin ? (
        <ul>
          
          <li className="navli">
            <Link
              to="/admin/AddUser/"
              style={{ textDecoration: "none", color: "#edf0f1" }}
            >
              ADD USER
            </Link>
          </li>
          <br/>
          <li className="navli">
            <Link
              to="/admin/reset/"
              style={{ textDecoration: "none", color: "#edf0f1" }}
            >
              Reset User
            </Link>
          </li>
          <br/>
          <li className="navli">
            <Link to="/admin/Lab" style={{ textDecoration: "none", color: "#edf0f1" }}>
              Lab
            </Link>
          </li>
          <br/>
          <li className="navli">
            <Link to="/admin/Hospital/" style={{ textDecoration: "none", color: "#edf0f1" }}>
              Hospital
            </Link>
          </li>
            <br/>
          <li className="end">
            
            <Link
              to="/about/"
              style={{ textDecoration: "none", color: "#edf0f1" }}
            >
              Sign out <img style={{height:"15px",width:"20px"}} src={logout}/>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav_links">
          <li className="navli">
            <Link to="/" style={{ textDecoration: "none", color: "#edf0f1" }}>
              SignIn
            </Link>
          </li>
          <li>
            
              <Link
                to="/about/"
                style={{ textDecoration: "none", color: "#edf0f1" }}
              >
                About
              </Link>
          
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
