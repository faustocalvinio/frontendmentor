import shortlyLogoSvg from  '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from  '../assets/images/icon-instagram.svg';


export const Footer = () => {
  return (


        <footer>
            <div className="footer-container">
                <div className="footer-logo-container">
                    <img src={ shortlyLogoSvg } alt="" />
                </div>
                <div className="footer-navigation-cont">
                    <h3 className="footer-navigation-title">Features</h3>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-link">Link Shortening</li>
                        <li className="footer-nav-link">Branded Links</li>
                        <li className="footer-nav-link">Analytics</li>
                    </ul>
                </div>
                <div className="footer-navigation-cont">
                    <h3 className="footer-navigation-title">Resources</h3>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-link">Blog</li>
                        <li className="footer-nav-link">Developers</li>
                        <li className="footer-nav-link">Support</li>
                    </ul>
                </div>
                <div className="footer-navigation-cont">
                    <h3 className="footer-navigation-title">Company</h3>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-link">About</li>
                        <li className="footer-nav-link">Our Team</li>
                        <li className="footer-nav-link">Careers</li>
                        <li className="footer-nav-link">Contact</li>
                    </ul>                
                </div>
                <div className="footer-social-icons-cont">
                    <img src={ facebook } alt="" className="social-icon" />
                    <img src={ twitter } alt="" className="social-icon" />
                    <img src={ pinterest } alt="" className="social-icon" />
                    <img src={ instagram } alt="" className="social-icon" />
                </div>
            </div>
        </footer>

    )
}
