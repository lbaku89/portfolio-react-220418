import { useState } from "react";

function NaviToggler(){
  const[togglerState, togglerUpdate] = useState(false);
  const togglerFL = (t) =>{
    togglerUpdate(t)
  }
  return(
    <button onClick={()=>(togglerFL(!togglerState))}></button>
  )
}