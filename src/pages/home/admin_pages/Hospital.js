import React,{useContext, useState,useEffect} from 'react';

import "./style.css";
// import av from "./avatar.png"
import {Link} from "react-router-dom";
export function Hospital(){
  const [hsp,sethspName]=useState("");
  const [num,setNum]=useState("");
  const loggedin=true;

  return <div>
    <header>
     <div className="main-header1">
            
        <h1>Add Hospital</h1>
        <p><input type="text" placeholder="Hospital" onChange={(event)=>sethspName(event.target.value)}/></p>
        <p><input type="password" placeholder="Phone Number" onChange={(event)=>setNum(event.target.value)}/></p>
        {/* onClick={event=>(!name|| !room)? event.preventDefault() :null} */}
        <Link  to={`/home/?name=${hsp}&room=${num}&loggedin=${loggedin}`}>
        <button className="btn btn-lg btn-primary  text-uppercase" type="submit">Submit</button>
        </Link>
</div>
<div className="main-header1 one">
            
        <h1>Remove Hospital</h1>
        <p><input type="text" placeholder="Hospital" onChange={(event)=>sethspName(event.target.value)}/></p>
    
        {/* onClick={event=>(!name|| !room)? event.preventDefault() :null} */}
        <Link  to={`/home/?name=${hsp}&room=${num}&loggedin=${loggedin}`}>
        <button className="btn btn-lg btn-primary  text-uppercase" type="submit">Remove</button>
        </Link>
</div>
</header>
    
  </div>;
}








