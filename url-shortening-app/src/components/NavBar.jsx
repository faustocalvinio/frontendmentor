import shortlyLogoSvg from  '../assets/images/logo.svg'

export const Navbar = () => {
 
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
