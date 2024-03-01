import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='wapper'>
            <div className='navlogo'>
                <h1>FASCO</h1>
            </div>
            <div className='navitem'>
            <ul>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/deals"}>
                        Deals
                    </Link>
                </li>
                <li>
                    <Link to={"/newarrivals"}>
                        New Arrivals
                    </Link>
                </li>
                <li>
                    <Link to={"/packages"}>
                        Packages
                    </Link>
                </li>
                <li>
                    <Link to={"/signin"}>
                        Sign in
                    </Link>
                </li>
                <button>
                    <Link to={"/signup"}>
                        Sign Up
                    </Link>
                </button>
            </ul>
            </div>
            </div>
        </div>
        </>
  )
}

export default Navbar