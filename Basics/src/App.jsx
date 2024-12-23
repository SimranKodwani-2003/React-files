import { useState } from 'react'
import './App.css'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Lets learn React | Simran Kodwani</h1>
        <Chai/>
      </div>
      
    </>
  )
}

export default App
