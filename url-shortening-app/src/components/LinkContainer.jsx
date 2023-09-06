import React from 'react'

export const LinkContainer = ({longLink,shortLink}) => {
  return (
    <div className='link-container'>
        <p>{longLink}</p>
        <div className='short-link-container'>
            <p>{shortLink}</p>
            <button>Copy</button>
        </div>
    </div>
  )
}
