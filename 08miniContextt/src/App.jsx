import { useState } from 'react'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <Usercontextprovider>
      <h1>Confusion hi confusion</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
