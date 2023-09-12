import BrandRecognition from '../assets/images/icon-brand-recognition.svg';
import DetailedRecords from '../assets/images/icon-detailed-records.svg';
import FullyCustomizable from '../assets/images/icon-fully-customizable.svg';

export const StadisticsSection = () => {
  return (
    <section id="advanced-stadistics">
      <div className="advanced-stadistics-container">
        <div className="advanced-stadistics-texts">
          <h4 className='advanced-stadistics-title'>Advanced Stadistics</h4>
          <p className='advanced-stadistics-description'>Track how your links are performing across the web with<br/> our advanced statistics dashboard.</p>
        </div>
        <div className="boxes-container">
          <div className="box-info">
            <img src={ BrandRecognition } alt="Brand Recognition logo"  className="box-image" />
            <h5 className="box-title">Brand Recognition</h5>
            <p className="box-description">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
          </div>
          <div className="line-boxes">
            <svg width="25" height="25"><line x1="0" y1="0" x2="25" y2="0" className="jss273"></line></svg>
          </div>
          <div className="box-info">
            <img src={ DetailedRecords } alt="Detailed records logo"  className="box-image" />
            <h5 className="box-title">Detailed Records</h5>
            <p className="box-description">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className="line-boxes">
            <svg width="25" height="25"><line x1="0" y1="0" x2="25" y2="0" className="jss273"></line></svg>
          </div>
          <div className="box-info">
            <img src={ FullyCustomizable } alt="Fully Customizable logo"  className="box-image" />
            <h5 className="box-title">Fully Customizable</h5>
            <p className="box-description">Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement.</p>        
          </div>
        </div>
      </div>
    </section>
  )
}