import React, { useState } from 'react'

export const LinkContainer = ({longLink,shortLink}) => {

  const [clicked, setClicked] = useState(false)

  const onCopyText=()=>{
    navigator.clipboard.writeText(shortLink)
    setClicked(true)
  }

  return (
    <div className='link-container'>
        <p>{longLink}</p>        
        <div className='short-link-container'>
            <p>{shortLink}</p>
            {clicked             
              ? <button className='copy-button copied-button' onClick={ ()=>{}}>Copied!</button>
              :<button className='copy-button'onClick={ onCopyText }>Copy</button>
            }            
        </div>
    </div>
  )
}
