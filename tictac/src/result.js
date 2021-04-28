import React from  'react'

function Result(props){
    <br/>
    
    const element = props.won ? <h1>Winner: {props.won}</h1> : <h2>Turn: {props.turn}</h2>
    return element
}
export default Result;