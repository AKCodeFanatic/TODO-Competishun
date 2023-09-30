import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex-container">


    <div className="signin-half2">
        <form>
            <span className="signin-title"><b>Login</b></span>

            <div className="email-div container">
                <input type="username" placeholder="   Enter username" className="input-container" id="email-id"/>
            </div>
            <div className="password-div container">
                <input type="password" placeholder="   Enter password" className="input-container" id="password-id"/>
                
            </div>

            <button id="signin-submit">Login</button>

            
            <div className="linkDiv">
                <Link to="/register">New User ? Create Account</Link>
            </div>

            


        </form>
    </div>

</div>
  )
}

export default Login