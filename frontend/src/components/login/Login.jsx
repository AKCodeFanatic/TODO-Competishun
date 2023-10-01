import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Login = () => {
    const dispatch = useDispatch();
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
        .post("https://todo-competishun-bf7o43gq0-akcodefanatics-projects.vercel.app/api/v1/login" , Inputs)
        .then((response)=>{
            // toast.message(response.data.message);
            // if(response.data.messag === "User Already Exists"){
            //     alert(response.data.message);
            // } else{
            //     alert(response.data.message);
            //     setInputs({
            //         "username": "" , 
            //         "password": "" ,
            //     });
            // }

            sessionStorage.setItem("id" , response.data.others._id);
            dispatch(authActions.login())
            history("/todo");
            
            
        });
        
        
    }

  return (
    <div className="flex-container">


    <div className="signin-half2">
        <form>
            <span className="signin-title"><b>Login</b></span>

            <div className="email-div container">
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

            <button id="signin-submit"
            onClick={submit}
            >Login</button>

            
            <div className="linkDiv">
                <Link to="/register">New User ? Create Account</Link>
            </div>

            


        </form>
    </div>

</div>
  )
}

export default Login