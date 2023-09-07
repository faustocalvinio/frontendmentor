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
  const [fullLinks, setFullLinks] = useState([{
    fullLink:'https://www.twitch.tv/',
    shortenedLink:'shrtco.de/lLRtub',
  }])
  const [shortenedLinks, setShortenedLinks] = useState([])





  const getShortLink=async(link)=>{
    const response=await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
  
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
    const errorTextElement=document.querySelector('.add-a-link')
    const inputElement=document.querySelector('.input-url');
    if(inputValue===""){
      errorTextElement.classList.remove('hidden')
      inputElement.classList.add('red-input')      
    }else if(inputValue!==""){

      if(inputElement.classList.contains('red-input')){
        inputElement.classList.remove('red-input')
        errorTextElement.classList.add('hidden')
      }
      getShortLink(inputValue)
      console.log(inputValue)
      setInputValue("")
    }      
      
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
      placeholder="Shorten a link here..."
      value={ inputValue }
      onChange={ (e)=>setInputValue(e.target.value) }
      className='input-url'
      />
    <button 
      id="shorten-button" 
      type="submit"
      onClick={ useLinkShortener }
      >
      Shorten It!
      </button>
      <p className="add-a-link hidden">Please add a link</p>
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
