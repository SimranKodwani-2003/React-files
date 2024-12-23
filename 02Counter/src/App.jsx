import './App.css'
import React,{ useState } from 'react'

function App() {
    const [counter,setCounter]=useState(5);
  
  return (
    <>
     <h1>Counter Part</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={()=>setCounter(counter+1)}>Add Value</button>
     <br/>
     <button onClick={()=>setCounter(counter-1)}>Remove Value</button>
    </>
  );
}

export default App
