import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCountryCard } from '../components/SingleCountryCard';

export const CountryPage = () => {
  
  const [currentCountry, setCurrentCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { countryName } = useParams();

  const getCountryByName=async(countryName)=>{
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        
      if (!res.ok) throw new Error("Something went wrong!");          
        const data = await res.json();        
        console.log(data);
        setCurrentCountry(data);
        setIsLoading(false);       
            
        } 
        catch (error) {
        console.log(error);
        setIsLoading(false);
    }
  }
    useEffect(() => {
      getCountryByName(countryName);    
    }, [])


  
    
  return (
    <>
    
      { isLoading ? <h1 className='loading'>Loading...</h1> : null}
      {!isLoading 
          ?
          <SingleCountryCard 
            name={currentCountry[0].name.common} 
            flag={currentCountry[0].flags.png}
            capital={ currentCountry[0].capital[0] }
            // ={ currentCountry[0].currencies[0][0] }
            region={ currentCountry[0].region }
            subregion={ currentCountry[0].subregion }
            population={ currentCountry[0].population }
            tld={ currentCountry[0].tld[0] }
            nativeName={ JSON.stringify(currentCountry[0].name.nativeName)  }
            currencies={ JSON.stringify(currentCountry[0].currencies) }
            borders={ currentCountry[0].borders }
            languages={ JSON.stringify(currentCountry[0].languages) }
          />
          : null
      }     
    </>
  )
}
