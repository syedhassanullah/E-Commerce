import React from 'react'

function Forget() {
  return (
    <>
    <div className='body'>
      <div className='card'>
        <div className='img'>
        </div>
        <div className='text'>
          <h2>FASCO</h2>
          <div className='text2'>
            <h3>Forget Password</h3>
            <div className='name1'>
            <input type="" name="" id="" placeholder='first name'/>
            <input style={{ marginLeft: '8px' }} type="text" name="lastName" id="lastName" placeholder="Last Name" />
            </div>
            <div className='name2'>
            <input type="Email" name="" id="" placeholder='Email Address'/>
            <input style={{ marginLeft: '8px' }} type="" name="" id="" placeholder='Phone Number'/>
            </div>
            <button className='main2'>Send Confirmation Code</button>
            <p>Already have an Account? <button className='resend'>Login</button></p>
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

export default Forget