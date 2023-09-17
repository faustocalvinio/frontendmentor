import { useState } from 'react';
import shortlyLogoSvg from  '../assets/images/logo.svg'
import { useEffect } from 'react';
import { useRef } from 'react';

export const Navbar = () => {
    
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const responsiveMenu = useRef(null);

    const toggleResponsiveMenu = () => {
        if(hiddenMenu) {
            responsiveMenu.current.classList.add('show-responsive');
            responsiveMenu.current.classList.remove('hide-responsive');
            setHiddenMenu(false);

        }else{
            responsiveMenu.current.classList.remove('show-responsive');
            responsiveMenu.current.classList.add('hide-responsive');
            setHiddenMenu(true);
        }
    }

   return (
    <>
        <nav>
            <ul className="ul-navigation-container">
                <li id='logo-navbar'>
                    <img src={ shortlyLogoSvg } alt="shortly logo"  />
                </li>                
                <li>features</li>
                <li>pricing</li>
                <li>resources</li> 
            </ul>
            <ul className="responsive-menu-container" ref={responsiveMenu}>
                <li>features</li>
                <li>pricing</li>
                <li>resources</li>              
                <hr className='hr-responsive' />
                <li>login</li>
                <li id='responsive-sign-up-li'><a href="" className="sign-up-btn responsive-sign-up">Sign Up</a></li>
            </ul>
            <svg className='svg-toggle-btn' onClick={ toggleResponsiveMenu } width="512" height="512" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h22M5 16h22M5 24h22"/>
            </svg>
            
            <ul className="login-container">    
                <li>
                    <button className="login-btn">Login</button>
                </li>
                <li>
                    <button className="sign-up-btn">Sign Up</button>
                </li>
            </ul>
        </nav>
    </>

  )
}
