import shortlyLogoSvg from  '../assets/images/logo.svg'

export const NavBar = () => {
 
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
                <button className="login-btn">Login</button>
                <button className="sign-up-btn">Sign Up</button>
            </ul>
        </nav>
    </>

  )
}
