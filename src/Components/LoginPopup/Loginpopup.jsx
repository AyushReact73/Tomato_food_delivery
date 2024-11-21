import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

export default function Loginpopup({ setShowLogin }) {
    const [currstate, setCurrstate] = useState('Login')
    return (
        <div className='loginpopup'>
            <form className='login-popup-container'>
                <div className="loginpopup-title">
                    <h2>{currstate}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="loginpopup-inputs">
                    {currstate === 'Login' ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                <button>{currstate === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className="loginpopup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currstate === 'Login' ?
                    <p>Create a new account?<span onClick={() => setCurrstate('Sign Up')}>Click here</span></p>
                    : <p>Already have an account?<span onClick={() => setCurrstate('Login')}>Login here</span></p>
                }
            </form>
        </div>
    )
}
