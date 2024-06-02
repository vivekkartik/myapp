import React from 'react';
import NavBar from '../NavBar';
import './Ai.css'
import { FaPlayCircle } from "react-icons/fa";

const Ai = () => {
  return (
    <>
    <NavBar />
    <div>
        <div className='Ai-container'>

          <div className="text">hello welcome to ai page</div>
          <div className="input-container">

          <input className='Ai-input' placeholder='send promt'></input>
          <FaPlayCircle className='submit-promt-btn'/>
          </div>
        </div>
    </div>
    </>
  );
}

export default Ai;
