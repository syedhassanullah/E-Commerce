import React from 'react'
import google from '../imgs/google.png'
import email from '../imgs/email.png'

function CreateAccount() {
  return (
    <>
    <div className='body'>
      <div className='card'>
        <div className='img2'>
        </div>
        <div className='texta'>
          <h2>FASCO</h2>
          <div className='text2 text2a'>
            <h3>Enter The Confirmation Code</h3>
            <div className='social'>
                <div className='google'>
                <img src={google} alt="Google" />
                <p style={{fontSize: '9px',fontWeight: '600' }} >sign up with google</p>
                </div>
                <div className='google email'>
                <img src={email} alt="Google" />
                <p style={{fontSize: '9px',fontWeight: '600' }} >sign up with email</p>
                </div>
            </div>
            <div className='or'>
            <p style={{fontSize: '20px', fontWeight:'600', color: '#484848', marginTop: '30px', marginBottom: '20px',  }} >- OR -</p>
            </div>
            <div className='name1'>
            <input type="" name="" id="" placeholder='first name'/>
            <input style={{ marginLeft: '8px' }} type="text" name="lastName" id="lastName" placeholder="Last Name" />
            </div>
            <div className='name2'>
            <input type="Email" name="" id="" placeholder='Email Address'/>
            <input style={{ marginLeft: '8px' }} type="" name="" id="" placeholder='Phone Number'/>
            </div>
            <div className='name2'>
            <input type="password" name="" id="" placeholder='password'/>
            <input style={{ marginLeft: '8px' }} type="password" name="" id="" placeholder='confirmation password'/>
            </div>
            <button className='main2'>Recover Account</button>
            <button className='main3'>Recover Account</button>
            <br/>
            <h3 className='resend2'>Forget Password?</h3>
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

export default CreateAccount