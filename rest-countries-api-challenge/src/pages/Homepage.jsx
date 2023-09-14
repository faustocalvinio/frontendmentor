import { useEffect,  useState } from 'react';
import { CountryCard } from '../components/';
import { fetchCountries } from '../services/useFetch'; 

export const Homepage = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [currentCountries, setCurrentCountries] = useState([]);

    
   useEffect(() => {  
    
      fetchCountries()
      .then(countries => {
      
        console.log('used fetch');
        setCountries(countries)
        setCurrentCountries(countries)
        setIsLoading(false)
        
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error)
      });
   }, [])
   
   
    const onSearchByName=(name)=>{
      setSearchValue(name)      
    }

    const onRegionChange=(event)=>{
      setSelectedRegion(event.target.value);    
    }

    useEffect(() => {
      if(selectedRegion!==""){      
        const testFilter=countries.filter(country=>country.region.toLowerCase()===selectedRegion.toLowerCase())       
        console.log(selectedRegion)
        setCurrentCountries(testFilter)
      }
      else if(selectedRegion===""){
        setCurrentCountries(countries)
        console.log('sin filtro region')
      }}, [selectedRegion])
    

    // FILTER BY NAME
    useEffect(()=>{
      if(searchValue.length===0){
        return
        }
      else{             
        const filteredArr=countries.filter(country=>country.name.common.includes(searchValue))
        console.log(filteredArr)
        setCurrentCountries(filteredArr)
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
            <option value="">Filter by Region</option>
            <option value="Africa" className="regions-option">Africa</option>
            <option value="Americas" className="regions-option">America</option>
            <option value="Asia" className="regions-option">Asia</option>
            <option value="Europe" className="regions-option">Europe</option>
            <option value="Oceania" className="regions-option">Oceania</option>
          </select>
        </div>
        <h2>{ selectedRegion }</h2>
        <main className="grid-countries">
            {isLoading && !error && <h4 className="loading">Loading........</h4>}
            {error && !isLoading && <h4>{error}</h4>}
            
            {currentCountries?.map((country) =>
              <CountryCard 
              key={crypto.randomUUID()} 
              name={country.name.common} 
              capital={country.capital} 
              flag={country.flags.png} 
              population={country.population} 
              region={country.region}
              />
              )}     
                      
        </main>      
      </>
    )
}
