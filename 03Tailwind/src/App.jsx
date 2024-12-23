import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='bg-green-400 p-4 rounded-xl text-black'>Tailwind padh rahe ho </h1>
        <Card/>
      </div>
    </>
  )
}

export default App
