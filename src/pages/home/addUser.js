import React,{useContext, useState,useEffect} from 'react';

// import {Button} from 'react-bootstrap'
// import Card from "react-bootstrap/Card";
import "./addUser.css";

export function Home(){
   const [role,setRole]=useState("defVal");
    
  return <div>
  
    <header>
     <div className="home-card">
          
        <h1>Add User</h1>
       <input type="text" placeholder="Name" />
       <input type="number" placeholder="Phone Number" />
       <input type="text" placeholder="Email" />
       <input type="text" placeholder="Password" />
       
       
        <select 
        name="rolesurvey"
        value={role}
        onChange={(evt)=>{
          setRole(evt.target.value);
        }}
        >
        <option value="defVal">Role</option>
        <option value="admin"> Admin</option>
        <option value="doctor"> Doctor</option>
        <option value="Lt"> Lab Technician</option>
        <option value="Ct"> Chair Technician</option>
        </select>
        <br/>
        {role==="doctor" ?(
               <select>
               <option value="defaultvalue">Hospital Name</option>
               <option value="value1"> Type1</option>
               <option value="va1e1"> Type1</option>
               <option value="valu1"> Type1</option>
               </select>
        ):(
          role==="Lt"?(
            <select>
            <option value="defaultvalue">Lab Name</option>
            <option value="value1"> Type1</option>
            <option value="valu11"> Type1</option>
            <option value="valu11"> Type1</option>
            </select>
            
        
          ):(
           <div></div>
          )
        )}
        
       
        
        <button  className="btn btn-lg btn-primary">Create</button>
        
        
</div>
</header>
    
  </div>;
}
