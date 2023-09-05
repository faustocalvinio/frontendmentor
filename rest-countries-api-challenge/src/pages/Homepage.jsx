import { useEffect, useState } from "react";
import { API_URL } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import { data } from '../mocks/data'
import { CountryCard } from "../components/CountryCard";
export const Homepage = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

  
   

    const mockData=()=>{
      setCountries(data)
      setIsLoading(false)
    }


    useEffect(()=>{
      mockData()
    },[])

    // const getAllCountries = async () => {
    //     try {
    //       const res = await fetch(`${apiURL}/all`);
    
    //       if (!res.ok) throw new Error("Something went wrong!");
    
    //       const data = await res.json();
    
    //       console.log(data);
    
    //       setCountries(data);
    
    //       setIsLoading(false);
    //     } catch (error) {
    //       setIsLoading(false);
    //       setError(error.message);
    //     }
    //   };
    //   console.log(data)
    //   useEffect(() => {
    //     getAllCountries();
    //   }, []);
  return (
 
    <>

      <div className="filters-container">
        <input type="text" name="" id="" className="search-input" placeholder="Search for a country..."/>
        <select name="" id="" className="select-region">
          <option value="Filter by Region" selected>Filter by Region</option>
          <option value="Africa" className="regions-option">Africa</option>
          <option value="America" className="regions-option">America</option>
          <option value="Asia" className="regions-option">Asia</option>
          <option value="Europe" className="regions-option">Europe</option>
          <option value="Oceania" className="regions-option">Oceania</option>
        </select>
      </div>
      <main className="grid-countries">
          {isLoading && !error && <h4 className="loading">Loading........</h4>}
          {error && !isLoading && <h4>{error}</h4>}
          
          {countries?.map((country) =><CountryCard key={countries.population} name={country.name} capital={country.capital} flag={country.flags.png} population={country.population} region={country.region}/>)}

      </main>
    
    </>
  )
}
