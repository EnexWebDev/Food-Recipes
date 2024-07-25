import React from 'react'
import "./login_modal.css"
const SignupModal = ({ isSignupActive, toggleSignupModal }) => {
  return (
    <>

      <div className={`loginModal ${isSignupActive ? 'active' : ''}`} onClick={toggleSignupModal}>
        <div className="loginCard" onClick={(e) => e.stopPropagation()}>
          <span className="title">
            Sign Up
          </span>

          <form action="">
            <input type="text" name='fullname' id='fullname' placeholder='firstname' />
            <input type="text" name="username" id="username" placeholder='Surname' />
            <input type="email" name='email' id='email' placeholder='Email' />
            <input type="url" name="Address" id="Address" placeholder='Address' />
            <input type="date" name="Date" id="date" />
            <input type="password" name="pwd" id="pwd" placeholder='Password' />
          </form>
          <button className='btn'>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default SignupModal