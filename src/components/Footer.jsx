import './Footer.css'
import logoFooter from '../assets/logo-main.png'
import addressIcon from '../assets/gps-white.png'
import emailIcon from '../assets/email-white.png'
import instagramIcon from '../assets/instagram-white.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-head">
                <img className="logo-footer" src={logoFooter} />
                <p className="footer-desc">A performing arts venue dedicated to cultural development, creative education, and meaningful performances.</p>
            </div>
            <div className="contact-footer">
                <div className="contact-detail">
                    <a className="contact-heading link"><img className="contact-logo" src={addressIcon} />Address</a>
                    <p>Cultural Arts District, City Center</p>
                </div>
                <div className="contact-detail">
                    <a className="contact-heading link"><img className="contact-logo" src={emailIcon} />Email</a>
                    <p>info@artsvenue.com</p>
                </div>
                <div className="contact-detail">
                    <a className="contact-heading link"><img className="contact-logo" src={instagramIcon} />Instagram</a>
                    <p>@exampleculturalspace</p>

                </div>
            </div>
            <div className="copyright">
                <p>All data and image on this website is purely fictional and used for portofolio purpose only</p>
            </div >
        </footer >
    )
}
