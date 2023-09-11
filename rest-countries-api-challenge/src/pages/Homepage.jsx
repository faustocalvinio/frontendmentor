import { useEffect, useState } from 'react';
import { data } from '../mocks/data'
import { CountryCard } from '../components/';

export const Homepage = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchValue, setSearchValue] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("")


    const mockData=()=>{
      setCountries(data)
      setIsLoading(false)
    }

    useEffect(()=>{
      mockData()
    },[])


    // const getCountryByRegion=async(region)=>{
      
    //   fetch(`https://restcountries.com/v3.1/region/${region}`)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }       
    //     return response.json();
    //   })
    //   .then((data) => {        
    //     setCountries(data)
    //   })
    //   .catch((error) => {
    //     console.error('There was a problem with the fetch operation:', error);
    //   });
    // }

    const onSearchByName=(name)=>{
      setSearchValue(name)      
    }

    const onRegionChange=(event)=>{
      setSelectedRegion(event.target.value);    
    }

    useEffect(() => {
      if(selectedRegion!==""){
        // getCountryByRegion(selectedRegion)

        const testFilter=countries.filter(country=>country.region.toLowerCase()===selectedRegion.toLowerCase())
        console.log(testFilter)
        setCountries(testFilter)

      }else if(selectedRegion==="Filter by Region"){
        // setCountries(initdata)
      }


      console.log(selectedRegion)
    }, [selectedRegion])
    

    // FILTER BY NAME
    useEffect(()=>{
      if(searchValue.length===0){
        return
        }
      else{             
        const filteredArr=countries.filter(country=>country.name.includes(searchValue))
        console.log(filteredArr)
        setCountries(filteredArr)
        } 
     },[searchValue])

    
    //  IF COUNTRIES CHANGE RE RENDER PAGE
    useEffect(() => {
      
    }, [countries])
    
    return (
  
      <>

        <div className="filters-container">
          <input 
            type="text" 
            name="" 
            id="" 
            className="search-input"         
            placeholder="Search for a country..."
            value={ searchValue }
            onChange={ (e)=>onSearchByName(e.target.value) }
          />
          <select name="" id="" className="select-region" value={ selectedRegion } onChange={ onRegionChange }  >
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa" className="regions-option">Africa</option>
            <option value="Americas" className="regions-option">America</option>
            <option value="Asia" className="regions-option">Asia</option>
            <option value="Europe" className="regions-option">Europe</option>
            <option value="Oceania" className="regions-option">Oceania</option>
          </select>
        </div>
        <main className="grid-countries">
            {isLoading && !error && <h4 className="loading">Loading........</h4>}
            {error && !isLoading && <h4>{error}</h4>}
            {countries?.map((country) =><CountryCard key={crypto.randomUUID()} name={country.name} capital={country.capital} flag={country.flags.png} population={country.population} region={country.region}/>)}

        </main>
      
      </>
    )
}
