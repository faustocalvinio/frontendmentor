import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
      
      // console.log(data);
      setCurrentCountry(data)
      setIsLoading(false)
     
      
          
      } catch (error) {
      //  console.log(error)
       setIsLoading(false)

      }
  }
  useEffect(() => {
    // getCountryByName(countryName)
    
  }, [])
  


    
  return (
    <>

      <SingleCountryCard />
      {/* <Link to={'/'}>Back</Link>
      { isLoading&&true ? <h4>Loading info...</h4>:<div>{currentCountry[0].name['common']}</div>} */}
      {/* <div>{currentCountry.name[0]}</div> */}
    </>
  )
}
