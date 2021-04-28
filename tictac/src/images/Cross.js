import React from "react";

function Cross(props){
    const size= props.size ||100
    return(
        <svg width={size} height= {size} viewBox="0 0 70 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-4" x2="94.8472" y2="-4" transform="matrix(-0.674769 0.738029 -0.345697 -0.938346 67 0)" stroke="black" strokeWidth="8"/>
<line y1="-4" x2="94.8472" y2="-4" transform="matrix(-0.674769 -0.738029 0.345697 -0.938346 67 70)" stroke="black" strokeWidth="8"/>
</svg>

    )
}
export default Cross;