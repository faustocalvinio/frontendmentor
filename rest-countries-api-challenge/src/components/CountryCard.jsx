import { Link } from 'react-router-dom'

export const CountryCard = ({name,flag,population,region,capital}) => {
  return (
    <div key={name} className="country-card" >            
             
    <div className="country-image-container">
        <img src={flag} alt={`Flag of ${name}`} className="country-image"/>
    </div>
    <div className="country-data-container">
        <h4 className="country-name">{name}</h4>
        <p>
        {" "}
        <strong>Population</strong>:{" "}
        {new Intl.NumberFormat().format(population)}
        </p>
        <p><strong>Region</strong>: {region}</p>
        <p><strong>Capital</strong>: {capital}</p>
    </div>             
    <Link to={`/country/${name}`} className="country-link">
        Navigate to {name}
    </Link>
    </div>
  )
}
