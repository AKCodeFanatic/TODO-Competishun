
import './register.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const history = useNavigate();
    const [Inputs,setInputs] = useState({
        "username": "" , 
        "password": "" ,
    });
    const change = (e) =>{
        const {name , value} = e.target;
        setInputs({...Inputs , [name]:value});
    };

    const submit = async (e)=>{

        e.preventDefault();
        await axios
        .post("https://todo-competishun-bf7o43gq0-akcodefanatics-projects.vercel.app/api/v1/register" , Inputs)
        .then((response)=>{
            // toast.message(response.data.message);
            if(response.data.messag === "User Already Exists"){
                alert(response.data.message);
            } else{
                alert(response.data.message);
                setInputs({
                    "username": "" , 
                    "password": "" ,
                });
                history("/login");
            }
            
            
        });
        
        
    }





    return (
        <div className="flex-container">
            {/* <ToastContainer /> */}

            <div classNameName="signin-half2">
                <form action="">
                    <span className="signup-title"><b>Registration</b></span>


                    <div className="name-div container">
                        <input type="username" id="name-id" 
                        name='username'
                        placeholder="Enter username" 
                        onChange={change}
                        value={Inputs.username}                    
                        className="input-container" />
                    </div>

                    
                    <div className="password-div container">
                        <input type="password" id="password-id" 
                        name='password'
                        placeholder="Enter password" 
                        onChange={change}
                        value={Inputs.password}
                        className="input-container" />
                    </div>
                   
                    <button 
                    id="signup-submit" 
                    onClick={submit}
                    >Sign Up</button>
                    <div id="login-link"><a href="/login" >Already a user ? Login</a></div>
                </form>



            </div>
        </div>






    )
}

export default Register