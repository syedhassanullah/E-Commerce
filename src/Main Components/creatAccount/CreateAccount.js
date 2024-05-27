import React, { useRef } from 'react'
import google from '../imgs/google.png'
import email from '../imgs/email.png'
// import UserContext from '../../ContextWork/Context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import Axios  from 'axios';


function CreateAccount() {

  // const detail = useContext(UserContext);
  const navigate = useNavigate();
  
  
  const email2 = useRef("")
  const password = useRef("")
  const cpassword = useRef("")
  const fname = useRef("")
  const lname = useRef("")
  const pnum = useRef("")

  const SignUpNow = () => {
    console.log(fname.current.value)
    console.log(lname.current.value)
    console.log(email2.current.value)
    console.log(pnum.current.value)
    console.log(password.current.value) 
    console.log(cpassword.current.value)

    const newUserDetail ={
      email: email2.current.value,
      password: password.current.value,
      fname: fname.current.value,
      lname: lname.current.value,
      phone: pnum.current.value,
      cpassword: cpassword.current.value
    }
    
    
    // detail.SetUserDetail(newUserDetail);
    console.log(newUserDetail)
    
    if (fname.current.value === ""){
      alert("First Name is required")
    }else if(lname.current.value === ""){
      alert("Last Name is required")
    }else if(password.current.value.length <= 6){
      alert("password greater then 6 digits")
    }else{

      Axios.post('http://localhost:5000/register',newUserDetail)
      .then(function (response) {
        console.log("AXIOS RESPONSE",response);
      })
      .catch(function (error) {
        console.log("AXIOS error",error);
      });
      
      
      // localStorage.setItem('userdetail',JSON.stringify(newUserDetail));
      // navigate ('/signin')

    }
    
  };
  
  
  
  
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
                  <p style={{ fontSize: '9px', fontWeight: '600' }} >sign up with google</p>
                </div>
                <div className='google email'>
                  <img src={email} alt="Google" />
                  <p style={{ fontSize: '9px', fontWeight: '600' }} >sign up with email</p>
                </div>
              </div>
              <div className='or'>
                <p style={{ fontSize: '20px', fontWeight: '600', color: '#484848', marginTop: '30px', marginBottom: '20px', }} >- OR -</p>
              </div>
              <div className='name1'>
                <input type="" name="" id="" placeholder='first name' ref={fname} />
                <input style={{ marginLeft: '8px' }} type="text" name="lastName" id="lastName" placeholder="Last Name" ref={lname} />
              </div>
              <div className='name2'>
                <input type="Email" name="" id="" placeholder='Email Address' ref={email2} />
                <input style={{ marginLeft: '8px' }} type="" name="" id="" placeholder='Phone Number' ref={pnum} />
              </div>
              <div className='name2'>
                <input type="password" name="" id="" placeholder='password' ref={password} />
                <input style={{ marginLeft: '8px' }} type="password" name="" id="" ref={cpassword} placeholder='confirmation password' />
              </div>
              <button className='main2' onClick={SignUpNow}>Create Account</button>

              <br />
              <h3 className='resend2'>Already you have an account?   .  <span><Link to={'/signin'}>Sign in</Link></span></h3>
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