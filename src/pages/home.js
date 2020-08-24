import React,{useContext, useState,useEffect} from 'react';
import queryString from "query-string";

export function Home({location}){
    var [name,setName]=useState("");
    var [pass,setPass]=useState("");
   
    const onChangeValue=(event)=> {
      console.log(event.target.value);
    }
    useEffect(()=>{
        const {name,room,loggedin}=queryString.parse(location.search);
       
        setName(name); 
        setPass(room);
      
        
        return ()=>{
           console.log("returned")
        }
    },[location.search]);
    
  return <div>
     <header>
     <div className="main-header one">
          
        <h1>Add User</h1>
       <input type="text" placeholder="Name" />
       <input type="number" placeholder="Phone Number" />
       <input type="text" placeholder="Email" />
       <input type="text" placeholder="Password" />
       
       <div onChange={onChangeValue} className="radiosys"> 
         <h4>Role</h4>
        <input type="radio" value="Male" name="gender" /> <span>Admin</span><br/>
        <input type="radio" value="Female" name="gender" /> <span>Doctoe</span><br/>
        <input type="radio" value="Other" name="gender" /> <span>Lab Technitian</span><br/>
        <input type="radio" value="Other" name="gender" /> <span>Chair Technitian</span>
        </div>
        <br/>
        <select>
        <option value="defaultvalue">Hospital Name</option>
        <option value="value1"> Type1</option>
        <option value="va1e1"> Type1</option>
        <option value="valu1"> Type1</option>
        </select>
        <br/>
        <select>
        <option value="defaultvalue">Lab Name</option>
        <option value="value1"> Type1</option>
        <option value="valu11"> Type1</option>
        <option value="valu11"> Type1</option>
        </select>
        <br/>
        <button>Create</button>
        
</div>
</header>
    
  </div>;
}
