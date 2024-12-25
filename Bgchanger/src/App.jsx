import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("grey")

  return (
      <div className='w-full h-screen'
       style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-3xl'>
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"red"}}>
              Red
            </button>

            <button onClick={()=>setColor("olive")}  className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"olive"}}>
              Olive
            </button>

            <button onClick={()=>setColor("magenta")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"magenta"}}>
              magenta
            </button>

            <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"purple"}}>
              Purple
            </button>

            <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"black"}}>
              Black
            </button>

            <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"orange"}}>
              Orange
            </button>

            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"green"}}>
              Green
            </button>

            <button onClick={()=>setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"cyan"}}>
              Cyan
            </button>

            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"blue"}}>
              Blue
            </button>
          </div>
        </div>
      </div>
  )
}

export default App
