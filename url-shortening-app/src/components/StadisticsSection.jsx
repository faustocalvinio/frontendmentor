import BrandRecognition from '../assets/images/icon-brand-recognition.svg';
import DetailedRecords from '../assets/images/icon-detailed-records.svg';
import FullyCustomizable from '../assets/images/icon-fully-customizable.svg';



export const StadisticsSection = () => {
  return (
    <section id="advanced-stadistics">
      <div className="test-div">

      <div className="advanced-stadistics-texts">
        <h4>Advanced Stadistics</h4>
        <p>Track how your links are performing across the web with<br/> our advanced statistics dashboard.</p>
      </div>
      <div className="boxes-container">
        <div className="box-info">
          <img src={ BrandRecognition } alt=""  className="box-image" />
          <h6 className="box-title">Brand Recognition</h6>
          <p className="box-description">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
        </div>
        <div className="line-boxes">
          <svg width="25" height="25"><line x1="0" y1="0" x2="25" y2="0" className="jss273"></line></svg>
        </div>
        <div className="box-info">
          <img src={ DetailedRecords } alt=""  className="box-image" />
          <h6 className="box-title">Detailed Records</h6>
          <p className="box-description">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className="line-boxes">
          <svg width="25" height="25"><line x1="0" y1="0" x2="25" y2="0" className="jss273"></line></svg>
        </div>
        <div className="box-info">
          <img src={ FullyCustomizable } alt=""  className="box-image" />
          <h6 className="box-title">Fully Customizable</h6>
          <p className="box-description">Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement.</p>        
        </div>
      </div>
      </div>
    </section>
  )
}
