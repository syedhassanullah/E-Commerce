import React, { useRef,useContext } from 'react'
import google from '../imgs/google.png'
import email from '../imgs/email.png'
import { Link } from 'react-router-dom'
import UserContext from '../../ContextWork/Context/UserContext'

function SignIn() {

  const detail = useContext(UserContext)

  const email1 = useRef("")
  const pas = useRef("")

  const Loginow =()=>{
    console.log(email1.current.value)
    console.log(pas.current.value)

    detail.SetUserDetail({
      ...detail.UserDetail,
    email: email1.current.value,
    password: pas.current.value,
  });
  };
 
  return (
    <>
    <div className='body'>
      <div className='card'>
        <div className='img'>
        </div>
        <div className='text'>
          <h2>FASCO</h2>
          <div className='text2'>
            <h3>Sign In To FASCO</h3>
            <div className='social'>
                <div className='google'>
                <img src={google} alt="Google" />
                <p style={{fontSize: '8px',fontWeight: '600' }} >sign up with google</p>
                </div>
                <div className='google'>
                <img src={email} alt="Google" />
                <p style={{fontSize: '8px',fontWeight: '600' }} >sign up with email</p>
                </div>
            </div>
            <div className='or'>
            <p style={{fontSize: '28px', fontWeight:'600', color: '#484848' }} >- OR -</p>
            </div>
            <input type="Email" name="" id="" placeholder='Email' ref={email1} />
            <input type="password" name="" id="" placeholder='password' ref={pas} />
            <button className='main2' onClick={Loginow}>Login Now</button>
            <button className='main3'>
              <Link to = {'/signup'}> Recover Account</Link></button>
            <br/>
            <h3 className='resend2'><Link to={'/forget'}> Forget Password? </Link></h3>
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

export default SignIn