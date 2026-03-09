import React, {useState, useContext} from 'react'
import userContext from '../context/userContext'


function login() {

    const [username, setUsername] = useState('')
    const [passwowrd, setPassword] = useState('')
    const handleSubmit = ()=>{
    
}

  return (
    <div>
        <h2>Login</h2>
    <input type='text' 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    placeholder='username' />
    <input type='text' 
    value={passwowrd}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='password' />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login 