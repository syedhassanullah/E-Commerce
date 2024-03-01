import React from 'react'

function ConfirmationCode() {
  return (
    <>
    <div className='body'>
      <div className='card'>
        <div className='img'>
        </div>
        <div className='text'>
          <h2>FASCO</h2>
          <div className='text2'>
            <h3>Enter The Confirmation Code</h3>
            <input type="num" name="" id="" placeholder='confirmation code'/>
            <button className='main2'>Recover Account</button>
            <p>Didn't recive confirmation code? <button className='resend'>resend now</button></p>
          </div>
          <div className='text3'>
            <p>FASCO Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ConfirmationCode