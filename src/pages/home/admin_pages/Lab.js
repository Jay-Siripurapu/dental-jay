import React,{useContext, useState,useEffect} from 'react';

import "./style.css";
// import av from "./avatar.png"
import {Link} from "react-router-dom";
export function Lab(){
  const [lab,setLab]=useState("");
  const [num,setNum]=useState("");
  const loggedin=true;

  return <div>
    <header>
     <div className="main-header1">
            
        <h1>Add Lab</h1>
        <p><input type="text" placeholder="Lab Name" onChange={(event)=>setLab(event.target.value)}/></p>
        <p><input type="password" placeholder="Phone Number" onChange={(event)=>setNum(event.target.value)}/></p>
        {/* onClick={event=>(!name|| !room)? event.preventDefault() :null} */}
        <Link  to={`/home/?name=${lab}&room=${num}&loggedin=${loggedin}`}>
        <button className="btn btn-lg btn-primary  text-uppercase" type="submit">Add_Lab</button>
        </Link>
      </div>
      <div className="main-header1 one">
            
            <h1>Remove Lab</h1>
            <p><input type="text" placeholder="Lab Name" onChange={(event)=>setLab(event.target.value)}/></p>
            
            {/* onClick={event=>(!name|| !room)? event.preventDefault() :null} */}
            <Link  to={`/home/?name=${lab}&room=${num}&loggedin=${loggedin}`}>
            <button className="btn btn-lg btn-primary  text-uppercase" type="submit">Remove_Lab</button>
            </Link>
          </div>
</header>
    
  </div>;
}








