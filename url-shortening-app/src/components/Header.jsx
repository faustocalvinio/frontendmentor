import WorkingImg from '../assets/images/illustration-working.svg'
export const Header = () => {
  
      
    return (

        <>
            <div className="header-cont">
                <div className="header-text-cont">
                    <h1 className='header-title'>More than just shorter links</h1>
                    <p className='header-text'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button className='header-button'>Get Started</button>
                </div>
                <div className="header-image-cont">
                     <img src={WorkingImg} />
                </div>
                
               
            </div>
            
        </>
    )
}
