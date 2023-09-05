import { Link } from 'react-router-dom'
import flag from '../mocks/belgium.png'
export const SingleCountryCard = () => {
  return (
    <main className='single-country-container'>
        <Link to={'/'} className='back-button'>Back</Link>
        <div className="image-container">
            <img src={flag} alt="" />
        </div>
        <div className="single-card-data-container">
            <h1>belgium</h1>
            <div className="first-data-container">
                <p><strong>Native Name</strong></p>
                <p><strong>Population</strong></p>
                <p><strong>Region</strong></p>
                <p><strong>Sub Region</strong></p>
                <p><strong>Capital</strong></p>
            </div>
            <div className="second-data-container">
                    <p><strong>Top Level Domain</strong></p>
                    <p><strong>Curriencies</strong></p>
                    <p><strong>Languages</strong></p>
            </div>
        </div>
        <div className="related-countries-container">
            <h5>Border Countries: </h5>
        </div>
    </main>
  )
}
