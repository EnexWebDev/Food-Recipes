import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaEnvelope,FaAddressCard, FaPhoneSlash } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className='Container'>
            <div className='footer_container'>
                <div className='wrapper'>
                    <div className='footer_tab1'>
                        <h2>Matty Food Recipes</h2>
                        <p>
                            You can find variety of recipes that are delicious, much more than tasty, really appetizing, lip-smacking: the king of food to have you licking your lips in anticipation
                        </p>
                    </div>
                    <div className='footer_tab2'>
                        <h2>Navigate</h2>
                        <ul>
                            <li> <Link to={'/'}>Home</Link></li>
                            <li><Link to={'/Ingredients'}>Ingredients</Link> </li>
                        </ul>
                    </div>
                    <div className='footer_tab3 ' >
                        <h2>Opening</h2>
                        <h5 className=''>
                            Monday - Saturday
                        </h5>
                        <p>09AM - 09PM </p>
                        <h5>Sunday</h5>
                        <p>08AM - 010PM</p>

                    </div>
                    <div className='footer_tab4'>
                        <h2>  Useful Links</h2>
                        <ul className=' d-grid'>
                            <Link>FAQs</Link>
                            <Link>Contacts</Link>
                            <Link>Privacy</Link>
                            <Link>Policy</ Link>
                        </ul>
                    </div>
                    <div className='footer_tab5'>
                        <h2>Contact us</h2>

                        <p class=""> <FaEnvelope /> 123 AKJ Lagos</p>
                        <p class=""> <FaPhoneSlash/>  +234 76230 0213</p>
                        <p class=""><FaAddressCard /> Recipe@example.com</p>


                    </div>
                </div>
                <div className='copy_right'>
                    <p>© 2024 Project Food Recipes</p>
                </div>
            </div>


        </footer>
    )
}

export default Footer