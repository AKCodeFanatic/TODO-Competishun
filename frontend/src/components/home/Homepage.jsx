import React from 'react'
import './homepage.css'

const Homepage = () => {
  return (
    <div className="home">
      <div className="container content">
        <h1>Welcome To the TODOS Website</h1>
        <p>Here you can arrange and align all your day to day tasks with good ease</p> 
        <p>Hope this product will help you in increasing your productivity </p>
        <p>Happy Documenting !</p>

        <div className='home-btn-div'>
        <button className='home-btn'>Inititate your TODO list</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage


