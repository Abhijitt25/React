import React, { useState } from 'react'

const UseState = () => {
    const [Num, setNum] = useState(2);
    const IncreaseNum= ()=>{
        setNum(Num+5);
        setNum(Prev => Prev + 1);
        setNum(Prev => Prev + 1);
    };
    const DecreaseNum= ()=>{ 
        setNum(Prev => Prev - 1);
        setNum(Prev => Prev - 1);
        setNum(Prev => Prev - 1);
    };
  return (
    <div>
       <h1> {Num} </h1>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
    </div>
  )
}

export default UseState
