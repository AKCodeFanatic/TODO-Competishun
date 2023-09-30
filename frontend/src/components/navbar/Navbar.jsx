
import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
        <a className="navbar-brand" href="#"><b>TODO</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active btn-nav mx-2" aria-current="page" href="#">Register</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active btn-nav mx-2" aria-current="page" href="#">LogIn</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active btn-nav mx-2" aria-current="page" href="#">Log Out</a>
                </li>

                <li className="nav-item">
                    <img className="image-fluid userImg"src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
                </li>

            </ul>

        </div>
    </div>
</nav></div></div>
  )
}

export default Navbar
