import React, { useState } from 'react'
import './LoginSignUp.css'
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginSignUp = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('welcome')
  const [name,setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{

    if(action === 'Signup'){
      e.preventDefault()
      axios.post('http://localhost:3001/signup', {name,username,password})
      .then(result => {console.log(result)}, setAction('login'), setAllToNull())
    }else{
      e.preventDefault()
      axios.post('http://localhost:3001/login', {username,password})
      .then(result => {
        console.log(result)
         if(result.data === 'user existes'){
          console.log('inside if')
        navigate('/home')}
      })
    }
  }



const setAllToNull = ()=>{
  setName('')
  setUsername('')
  setPassword('')
}
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action} page</div>
      </div>
      <div className="submit-container">
      <button className={action === 'login'? 'submit-grey': 'submit'} onClick={()=>{setAction('Signup'); setAllToNull()}}>signup</button>
      <button className={action === 'Signup'? 'submit-grey': 'submit'} onClick={()=>{setAction('login'); setAllToNull()}}>login</button>


      </div>
      <form>
      <div className="inputs">
        { action === 'Signup' &&
        <div className="input">
          <FaUserCircle />
          <input type="text" className="name" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>}
        <div className="input">
          <MdAlternateEmail />
          <input type="email" className="username" placeholder='Email' value={username} onChange={(e)=>{setUsername(e.target.value) }}/>
        </div>
        <div className="input">
          <TbPasswordFingerprint />
          <input type="password" className="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
      </div>
      <button className="details-submit" onClick={handleSubmit}>submit</button>
    </form>
    </div>
  )
}

export default LoginSignUp
