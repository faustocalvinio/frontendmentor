import React, { useEffect, useState } from 'react'
import { LinkContainer } from './LinkContainer'

export const ContainerURLS = () => {


  
  
  const testObject=[{
    fullLink:'https://www.frontendmentor.io/home/my-challenges',
    shortenedLink:'https://re.ink/dasdasde'
  },{
    fullLink:'https://www.frontendmentor.io/home/my-challenges',
    shortenedLink:'https://re.ink/dasdasd'
  },{
    fullLink:'https://www.frontendmentor.io/home/my-challenges',
    shortenedLink:'https://re.ink/dasdasd'
  },{
    fullLink:'https://www.frontendmentor.io/home/my-challenges',
    shortenedLink:'https://re.ink/dasdasd'
  }
  ]
  const [inputValue,setInputValue]=useState("")
  const [fullLinks, setFullLinks] = useState([])
  const [shortenedLinks, setShortenedLinks] = useState([])





  const getShortLink=async(link)=>{
    const response=await fetch(`https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`)
  
    const data=await response.json()

    const originalLink=data.result.original_link;
    const shortLink=data.result.short_link;

    const updatedArray=[...fullLinks];
    updatedArray.push({
      fullLink:originalLink,
      shortenedLink: shortLink,
    })

    setFullLinks(updatedArray)

    console.log(fullLinks)
  }




  const useLinkShortener=()=>{
    getShortLink(inputValue)
    console.log(inputValue)

    // setFullLinks([...{

    // }])


  }
  

  useEffect(() => {
    
  }, [fullLinks])

  return (
    <>
    <section id='container-input-list'>
    
    <div className="input-container">
    <input 
      type="url" 
      name="" 
      id="input-url" 
      placeholder="Shorten a link here..."
      value={ inputValue }
      onChange={ (e)=>setInputValue(e.target.value) }
      />
    <button 
      id="shorten-button" 
      type="submit"
      onClick={ useLinkShortener }
      >
      Shorten It!
      </button>
    </div>

    </section>
    <div className="links-list-cont">

    <div className="links-list">
      {
        fullLinks.map(link=><LinkContainer key={crypto.randomUUID()
        } longLink={link.fullLink} shortLink={link.shortenedLink} />)
      }
    </div>
    </div>
    </>
  )
}
