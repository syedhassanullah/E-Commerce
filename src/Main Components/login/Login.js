import React from 'react'
import './Login.css';


export const Login = () => {
  return (
    <div className='body'>
      <div className='card'>
        <div className='img'>
        </div>
        <div className='text'>
          <h2>FASCO</h2>
          <div className='text2'>
            <h3>Enter Your New Password</h3>
            <input type="password" name="" id="" placeholder='new password'/>
            <input type="password" name="" id="" placeholder='conformation password'/>
            <button className='main'>Submint</button>
          </div>
          <div className='text3'>
            <p>FASCO Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
