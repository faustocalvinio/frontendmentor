import { useEffect } from "react"
import { useState } from "react"

export const Navbar = () => {

 
    const [theme, setTheme] = useState('light')

    // console.log(theme)

    useEffect(() => {
      if(theme==="dark"){
        document.documentElement.setAttribute('data-theme','dark')
      }else if(theme==="light"){
        document.documentElement.setAttribute('data-theme','light')
      }
    }, [theme])
    
    const changeTheme=()=>{
        if(theme==="dark"){
            setTheme("light")
        }else if (theme==="light"){
            setTheme("dark")
        }
    }


    return (
        <nav className="navbar">
            <h3 className="header-title">Where in the world?</h3>
            <div className="theme-switch-container">
                {
                    theme==="light" ? <span><i className="fa-regular fa-moon"></i> <button onClick={ changeTheme }>Switch to dark</button> </span>
                    :  <span><i style={{color:"#fff"}} className="fa-solid fa-sun"></i><button onClick={ changeTheme }>Switch to light</button></span> 
                }
            </div>
        </nav>
    )
}
