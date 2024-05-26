import React, { useState } from 'react'
import './LoginSignUp.css'
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const LoginSignUp = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('welcome')
  const [name,setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(username.trim() === "" || password.trim() === "" || name.trim() === ""){
      alert("all fields are required")
    }else{
    if(action === "Signup"){
      const existingUsers = JSON.parse(localStorage.getItem("user")) || [];
      const newUser = { name, username, password };
      const existingUser = existingUsers.find(user => user.username === newUser.username);

      if (existingUser) {
        alert("User already exists. Please try with another username.");
      } else {
        existingUsers.push(newUser);
        localStorage.setItem("user", JSON.stringify(existingUsers));
        navigate('/home');
      }
    }
    else
    {
      const storedUser = localStorage.getItem("user");
      const users = JSON.parse(storedUser) || [];
      
      if (users.length > 0) {
        const isUserValid = users.some((element) => {
          return element.username === username && element.password === password;
        });
      
        if (isUserValid) {
          navigate("/home");
        } else {
          alert("Invalid Credentials");
        }
      } else {
        alert("User Not Found");
      }
    }
  }
}
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
          <FaUserCircle />
          <input type="text" required className="name" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>}
        <div className="input">
          <MdAlternateEmail />
          <input type="email" className="username" placeholder='email' value={username} onChange={(e)=>{setUsername(e.target.value) }}/>
        </div>
        <div className="input">
          <TbPasswordFingerprint />
          <input type="password" className="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
      </div>
      <button className="details-submit" onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default LoginSignUp
