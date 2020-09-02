import React, { useState } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {Reset} from "./pages/login/reset";
import {Home} from "./pages/home/home";
import {About} from "./pages/about";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

import Navbar  from "./pages/navbar/navbar";

 
function App() {
  const [user,setUser]=useState(null);
  return (
    
  <Router>
    
 
    <Navbar/>
   
   
    <Route path="/home/" exact component={Home}/>
    <Route path="/" exact component={Login}/>
    <Route path="/about/"  component={About}/>
    <Route path="/reset/"  component={Reset}/>

  </Router>
  
  );
}

export default App;
