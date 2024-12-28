import { useState } from 'react'

import './App.css'
import { ThemeProvider } from './Context/Theme'
import { useEffect } from 'react'
import Button from './Component/Button'
import Card from './Component/Card'

function App() {
  const[ThemeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

// Actual change in theme:-
useEffect(()=>{
  document.querySelector("html").classList.remove("light",'dark')
  document.querySelector("html").classList.add(ThemeMode)
},[ThemeMode])

  return (
    < ThemeProvider value={{ThemeMode,lightTheme,darkTheme}}>
    
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/*ThemeButton*/}
              <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              {/*Card*/}
              <Card/>
          </div>
      </div>
    </div>

    </ThemeProvider>
  )
}

export default App
