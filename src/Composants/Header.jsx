import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css'

import logo from '../Assets/Img/logo.png'
import user from '../Assets/Img/user.png'
import notif from '../Assets/Img/notif.png'




const Header = () => {
  return (
    <div class="header">
        <nav>
            <img src={logo} class="logo" />
            <ul>
                <li><Link to=''>Home</Link></li>
                <li><Link to=''>About</Link></li>
                <li><Link to=''>Contact</Link></li>
            </ul>
            <div class="btn">
                <button><img src={user} /></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M15 17.5H9V18.5C9 20.1569 10.3431 21.5 12 21.5C13.6569 21.5 15 20.1569 15 18.5V17.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 17.5H19C19.5523 17.5 20 17.0523 20 16.5V15.9142C20 15.649 19.8946 15.3947 19.7071 15.2071L19.1963 14.6963C19.0706 14.5706 19 14.4001 19 14.2224V10.5C19 6.634 15.866 3.49999 12 3.5C8.134 3.50001 5 6.63401 5 10.5V14.2224C5 14.4002 4.9294 14.5706 4.80372 14.6963L4.29289 15.2071C4.10536 15.3947 4 15.649 4 15.9142V16.5C4 17.0523 4.44772 17.5 5 17.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
            </div> 
        </nav>
    </div>
  )
}

export default Header