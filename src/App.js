import React, { useState } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {Reset} from "./pages/login/reset";
import {Home} from "./pages/home/addUser";
import {About} from "./pages/about";
import {Lab} from "./pages/home/admin_pages/Lab";
import {Hospital} from "./pages/home/admin_pages/Hospital";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

import Navbar  from "./pages/navbar/navbar";

 
function App() {
  const [user,setUser]=useState(null);
  return (
    
  <Router>
    
    <div className="navbar">
    <Navbar/>
    </div>
   <div className="mainbody">
   <Route path="/admin/Hospital/" exact component={Hospital}/>
    <Route path="/admin/Lab/" exact component={Lab}/>
    <Route path="/admin/AddUser/" exact component={Home}/>
    <Route path="/" exact component={Login}/>
    <Route path="/about/" exact  component={About}/>
    <Route path="/admin/reset/" exact  component={Reset}/>

   </div>
    
  </Router>
  
  );
}

export default App;
