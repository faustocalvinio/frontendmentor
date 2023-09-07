import { useEffect, useState } from "react";
import { API_URL } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import { data } from '../mocks/data'
import { CountryCard } from "../components/CountryCard";
export const Homepage = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchValue, setSearchValue] = useState("")
    const [initialCountries, setInitialCountries] = useState()
    const [selectedRegion, setSelectedRegion] = useState("")



  const initdata=data;

    const mockData=()=>{
      setCountries(data)
      setInitialCountries(data)
      setIsLoading(false)
    }


    useEffect(()=>{
      mockData()
    },[])


    const filterByName=(name)=>{

    }


    const getCountryByRegion=async(region)=>{
      // const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      // const data= await resp.json()

      // return await data
      fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Assuming you're working with JSON data
        return response.json(); // This returns a Promise
      })
      .then((data) => {
        // Now you have access to the actual data
        const newData=data
        // setCountries(data


        // console.log(newData);
        // console.log(countries)
        // setCountries(newData)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }




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
    










    useEffect(() => {
      
    }, [countries])
    



    useEffect(()=>{
      if(searchValue.length===0){
        return
      }else{
        // const newArr=[countries[0],countries[1]]
        // setCountries(initialCountries)
        console.log(initialCountries)
        console.log(countries)
        const filteredArr=countries.filter(country=>country.name.includes(searchValue))
        console.log(filteredArr)
        setCountries(filteredArr)
      }
      
      console.log(searchValue.length)
      console.log(countries)
      }
      ,[searchValue]
    )

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
