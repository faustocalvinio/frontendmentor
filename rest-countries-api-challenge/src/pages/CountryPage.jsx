import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCountryCard } from '../components/SingleCountryCard'

export const CountryPage = () => {
  
  const [currentCountry, setCurrentCountry] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const { countryName } = useParams()

  const getCountryByName=async(countryName)=>{
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
      
   if (!res.ok) throw new Error("Something went wrong!");
      
       const data = await res.json();
      
      console.log(data);
      setCurrentCountry(data)
      setIsLoading(false)
     
      
          
      } catch (error) {
      //  console.log(error)
       setIsLoading(false)

      }
  }
  useEffect(() => {
    getCountryByName(countryName)
    console.log(currentCountry)
    // console.log(currentCountry[0].currencies[0].name?)
  }, [])
  


    
  return (
    <>
      { isLoading && true ? <h1>Loading...</h1> : null}

      {!isLoading &&  true 
          ?
          <SingleCountryCard 
            name={currentCountry[0].name.common} 
            flag={currentCountry[0].flags.png}
            capital={ currentCountry[0].capital[0] }
            // currencies={ currentCountry[0].currencies[0].name }
            region={ currentCountry[0].region }
            subregion={ currentCountry[0].subregion }
            population={ currentCountry[0].population }
            tld={ currentCountry[0].tld[0] }
            // nativeName={ currentCountry[0].name[1][0][1] }
          />
          : null
      }
     
    </>
  )
}
