import React from 'react'
import { Link } from "react-router-dom";
import "./header.css"

const Header = ({ isSignupActive, toggleSignupModal, toggleLoginModal }) => {

    return (
		<>
			<header class="header-nav">
				<nav>
					<div class="logo">
						<Link to={'/'}>
							Food Recipes
						</Link>
					</div>
					<input type="checkbox" id="menu-toggle" />
					<label for="menu-toggle" class="menu-icon">
						&#9776;
					</label>
					<ul class="menu text-light">
                        <li className='nav-link'> <Link to={'/'}>Home</Link></li>
                        <li className='nav-link'> <Link to={'/ingredients'}>ingredients</Link></li>	

						<li className='nav-link' onClick={toggleLoginModal}> <Link>Login </Link> </li> 
						<li className='nav-link slash'>/</li>
						<li className='nav-link' onClick={toggleSignupModal}> <Link>Sign Up </Link> </li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header