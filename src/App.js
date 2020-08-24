import React, { useState,useMemo } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {Reset} from "./pages/login/reset";
import {Home} from "./pages/home";
import {About} from "./pages/about";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { UserContext } from './context/UserContext';

function App() {
  const [user,setUser]=useState(null);
  const provider=useMemo(()=>({user,setUser}),[user,setUser]);
  const [loggedin,setlogin]=useState(true);
  // this useMemo wont change the object every time like switching from pages it only changes when actually changes
  //usrcontext is used to create a wrap around set of items and pass data that avalable o alla elemnts
  
  return (
    
  <Router>
  {loggedin?(
    <nav className="navbar navbar-dark bg-primary">
    <h3 className="logo">Vishnu Dental</h3>
        <ul className="nav_links">
          <li>
            <Link to="/" style={{ textDecoration: 'none',color:"#edf0f1" }}>SignIn</Link>
          </li>
          <li>
            <Link to="/home/" style={{ textDecoration: 'none',color:"#edf0f1" }}>Home</Link>
          </li>
          
          <li>
            <Link to="/reset/" style={{ textDecoration: 'none',color:"#edf0f1" }}>Reset Password</Link>
          </li>
          <li>
           <button><Link to="/about/" style={{ textDecoration: 'none',color:"#edf0f1" }}>About</Link></button> 
          </li>
        </ul>
    </nav>
  ):
   (
    <nav className="navbar navbar-dark bg-primary">
    <h3 className="logo">Vishnu Dental</h3>
    <ul className="nav_links">
          <li>
           <button><Link to="/about/" style={{ textDecoration: 'none',color:"#edf0f1" }}>About</Link></button> 
          </li>
        </ul>
    </nav>
   ) 
  }
  
   
    <UserContext.Provider value={provider}>
    <Route path="/home/" exact component={Home}/>
    <Route path="/" exact component={Login}/>
    <Route path="/about/"  component={About}/>
    <Route path="/reset/"  component={Reset}/>

    </UserContext.Provider>
  </Router>
  
  );
}

export default App;
