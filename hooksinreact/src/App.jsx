import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue =()=>{
    console.log("clicked", counter);
    setCounter(counter+1);
  } 
  const removeValue =()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h2>ankit yadav</h2>
      <h3>counter value: {counter}</h3>
      <button
      onClick={addValue}
      >add value {counter}</button><br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
