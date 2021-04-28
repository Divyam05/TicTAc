import React from 'react';
import './cube.css'
import Circle from "./images/Circle";
import Cross from "./images/Cross"
 
const display= svg =>{
    if(svg === 'cross'){
        return <Cross size={40}/>
    }
    else if(svg ==='circle'){
        return <Circle size={40}/>
    }
    else{
        return null
    }
}

function Cube(props){
    const divs =props.positions.map((value,index) =>{
        
        return (
            <div key={index} onClick= {() => {
              props.setPositions(index)   
            }}>
                {display(value)}
            </div>
        )
    }) 
    return(
      <center>  <div className="container" >
            {divs}
        </div></center>
    ) 
}
export default Cube;