import React,{useContext} from 'react';
import { UserContext } from '../context/UserContext';
import dental from "./images/dental.jpg";
export function About(){
    const {user,setUser}=useContext(UserContext);
    const style={
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
       backgroundSize: "cover",
       overflow:"hidden",
       height:"91vh",
       width:"100vw"


    }
  return <div>
      <img src={dental} style={style}/>
      {/* <h3>{JSON.stringify(user,null,2)}</h3>
      <button onClick={()=>setUser("changed from About")}>change value</button> */}
  </div>;
}