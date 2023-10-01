
import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    console.log(isLoggedIn);

    const logout = ()=>{
        sessionStorage.clear("id");
        dispatch(authActions.logout());
        history("/login");

    }
  return (
    <div>        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
        <Link className="navbar-brand" to="/"><b>TODO</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/todo">TODO</Link>
                </li>


                {!isLoggedIn && <>
                    <li className="nav-item">
                    <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/register">Register</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/login">LogIn</Link>
                </li>

                </>}

                {isLoggedIn && <>
                    <li className="nav-item">
                    <Link className="nav-link active btn-nav mx-2" aria-current="page" to="#"
                    onClick={logout}>
                    Log Out
                    </Link>
                </li>   
                </>}



               

                {/* <li className="nav-item">
                    <img className="image-fluid userImg"src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
                </li> */}

            </ul>

        </div>
    </div>
</nav></div></div>
  )
}

export default Navbar
