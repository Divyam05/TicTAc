import React from "react";

function Circle(props){
    const size= props.size ||100
   return(
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="white" stroke="black" strokeWidth="8"/>
    </svg>
    
   )
}
export default Circle;

