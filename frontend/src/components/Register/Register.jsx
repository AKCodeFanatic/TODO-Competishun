import React from 'react'
import './register.css'

const Register = () => {
    return (
        <div className="flex-container">

            <div classNameName="signin-half2">
                <form action="">
                    <span className="signup-title"><b>Registration</b></span>


                    <div className="name-div container">
                        <input type="text" id="name-id" placeholder="  Enter username" className="input-container" />
                    </div>
                    <div className="password-div container">
                        <input type="password" id="password-id" placeholder="   Enter password" className="input-container" />
                        <i className="fa-solid fa-eye" id="eye"> </i>
                    </div>
                   
                    <button id="signup-submit">Sign Up</button>
                    <div id="login-link"><a href="/login" >Already a user ? Login</a></div>
                </form>



            </div>
        </div>






    )
}

export default Register