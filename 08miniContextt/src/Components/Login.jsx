// import { useContext, useState } from "react"
import React, {useState,useContext} from 'react'
import Usercontext from "../context/Usercontext"


function Login() {
    const[Username,setUsername]=useState("")
    const [Password, setPassword] = useState("")

    const{setUser}=useContext(Usercontext)

    const handlesubmit=(e)=>{
        e.preventDefault()
        setUser({Username,Password})

    }

  return (
    <div>
      <h1>login</h1>
      <input type="text"
      value={Username} 
      onChange={(e)=>setUsername(e.target.value)}
      placeholder="Username"/>

      {"  "}   
      {/* for space */}

      <input type="text"
      value={Password} 
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Password"/>
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
