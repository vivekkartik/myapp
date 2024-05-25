import React, { useState } from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {

  const [action, setAction] = useState('welcome')
  const [name,setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action} page</div>
      </div>
      <div className="submit-container">
      <button className={action === 'login'? 'submit-grey': 'submit'} onClick={()=>{setAction('Signup')}}>signup</button>
      <button className={action === 'Signup'? 'submit-grey': 'submit'} onClick={()=>{setAction('login')}}>login</button>

      </div>
      <div className="inputs">
        { action === 'Signup' &&
        <div className="input">
          <input type="text" className="name" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>}
        <div className="input">
          <input type="email" className="username" placeholder='email' value={username} onChange={(e)=>{setUsername(e.target.value) }}/>
        </div>
        <div className="input">
          <input type="password" className="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
      </div>
      <button className="details-submit" onClick={()=>{console.log("userdetails",name? {name,username,password}:username,password); setPassword(''); setUsername(''); setName('')}}>submit</button>
    </div>
  )
}

export default LoginSignUp
