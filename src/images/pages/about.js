import React from 'react';
import dental from "../images/dental.jpg"
export function About(){
  
    const style={
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
       backgroundSize: "cover",
       overflow:"hidden",
       height:"90vh",
       width:"100vw"


    }
  return <div>
      <img src={dental} style={style}/>
     
  </div>;
}
