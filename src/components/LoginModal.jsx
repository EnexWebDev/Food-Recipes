import React from 'react'
import "./login_modal.css"

const LoginModal = ({ isLoginActive, toggleLoginModal }) => {

    return (
        <>
            <div className={`loginModal ${isLoginActive ? 'active' : ''}`} onClick={toggleLoginModal}>
                <div className="loginCard" onClick={(e) => e.stopPropagation()}>
                    <span className="title">
                        Login
                    </span>

                    <form action="">
                        <input type="text"  name='username' id='username' placeholder='Username'/>
                        <input type="password" name="pwd" id="pwd" placeholder='Password'/>
                        <button className='btn'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginModal