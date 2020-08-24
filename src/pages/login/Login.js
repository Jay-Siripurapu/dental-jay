import React,{useContext, useState,useEffect} from 'react';

import "./style.css";
// import av from "./avatar.png"
import {Link} from "react-router-dom";
export function Login(){
  const [name,setName]=useState("");
  const [room,setRoom]=useState("");
  const loggedin=true;

  return <div>
    <header>
     <div className="main-header">
            {/* <img src={av} alt="jay"/> */}
        <h1>Sign In</h1>
        <p><input type="text" placeholder="Username" onChange={(event)=>setName(event.target.value)}/></p>
        <p><input type="password" placeholder="Password" onChange={(event)=>setRoom(event.target.value)}/></p>
        {/* onClick={event=>(!name|| !room)? event.preventDefault() :null} */}
        <Link  to={`/home/?name=${name}&room=${room}&loggedin=${loggedin}`}>
        <button className="btn btn-lg btn-primary  text-uppercase" type="submit">Sign in</button>
        </Link>
</div>
</header>
    
  </div>;
}








