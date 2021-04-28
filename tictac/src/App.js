import React from 'react';
import Cube   from "./Cube";
import Result from "./result"
import Head from "./head"




function App(props)
{
    const [data, setdata]= React.useState({
        won: {
            name: undefined,
            indexes:[]
        },
        turn: 'cross',
        positions: new Array(9).fill(null)
    })
    console.log(data)
    return(
    <>
    <div style={{backgroundColor:"darkgray",height:800 }}>
        <br/>
    <Head/>
    <Cube
    winnIndex={data.won.indexes}
      positions={data.positions}
      setPositions={ index => {
         setdata(prevData => {
             if(!prevData.positions[index] && !prevData.won.name)  {
           const data= {...prevData}
           data.positions[index] =data.turn
           const match=[
               [0,1,2],
               [3,4,5],
               [6,7,8],
               [0,3,6],
               [1,4,7],
               [2,5,8],
               [0,4,8],
               [2,4,6],
           ]
           match.forEach(matchs =>{
               const [a,b,c]=matchs
               if(data.positions[a] && data.positions[a]===data.positions[b]&&
                data.positions[a]===data.positions[c]){
                    data.won.name=data.turn
                    data.won.indexes=matchs
                }
                
           })
           data.turn= (data.turn === 'cross') ? 'circle' : 'cross'
           return data 
             } else{
                 return prevData
             }
         })
     }}
    
    />
   <center> <Result turn ={data.turn} won ={data.won.name}/> </center>
   </div>
    </>
)
}
export default App; 
