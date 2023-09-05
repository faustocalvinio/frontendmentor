import { Link } from 'react-router-dom'


export const SingleCountryCard = ({name="No name provided",flag="https://flagcdn.com/w320/ax.png",capital="No Capital Provided",population="666666666",region="No Region Provided",subregion="No subregion provided",currencies="No currency provided",tld="No TLD provided",borders=["No border provided"],nativeName="No native name provided"}) => {

    const number = parseFloat(population);
    const locale = {
      numberingSystem: "latn",
      decimal: ",",
      thousands: ".",
    };
    
    const formattedPopulation = number.toLocaleString(locale);
    

  return (
    <main className='single-country-container'>
        <div className="image-container">
            <img src={flag} alt="" />
        </div>
        <Link to={'/'} className='back-button'><i className="fa-solid fa-arrow-left"></i>Back</Link>
        <div className="single-card-data-container">
            <h1 className='single-country-title'>{name}</h1>
            <div className="first-data-container">
                <p><strong>Native Name: </strong>{ nativeName }</p>
                <p><strong>Population: </strong>{ formattedPopulation }</p>
                <p><strong>Region: </strong>{ region }</p>
                <p><strong>Sub Region: </strong>{ subregion }</p>
                <p><strong>Capital: </strong>{ capital }</p>
            </div>
            <div className="second-data-container">
                    <p><strong>Top Level Domain: </strong>{ tld }</p>
                    <p><strong>Curriencies: </strong>{ currencies }</p>
                    <p><strong>Languages:</strong></p>
            </div>
            <div className="related-countries-container">
                <h5>Border Countries: 
                </h5>
                    {
                        borders.map(border=><div key={border} className='border-country'>{border}</div>)                    
                    }
            </div>
        </div>
    </main>
  )
}
 