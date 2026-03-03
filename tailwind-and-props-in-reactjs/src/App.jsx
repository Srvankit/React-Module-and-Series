import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let myObj = {
    username: "ankit yadav",
    branch: "cse"
  }

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-2xl mb-4'>Tailwind CSS</h1>
      <Card channel="ankit yadav" btnText="visit me "/>
    </>
  )  
}

export default App
