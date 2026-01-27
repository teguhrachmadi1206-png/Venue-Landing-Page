import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-head">
                <img className="logo-footer" src="../src/assets/logo-main.png" />
                <p className="footer-desc">A performing arts venue dedicated to cultural development, creative education, and meaningful performances.</p>
            </div>
            <div className="contact-footer">
                <div className="contact-detail">
                    <a className="contact-heading link"><img className="contact-logo" src="../src/assets/gps-white.png" />Address</a>
                    <p>Cultural Arts District, City Center</p>
                </div>
                <div className="contact-detail">
                    <a className="contact-heading link"><img className="contact-logo" src="../src/assets/email-white.png" />Email</a>
                    <p>info@artsvenue.com</p>
                </div>
                <div className="contact-detail">
                    <a className="contact-heading link"><img className="contact-logo" src="../src/assets/instagram-white.png" />Instagram</a>
                    <p>@exampleculturalspace</p>

                </div>
            </div>
            <div className="copyright">
                <p>All data and image on this website is purely fictional and used for portofolio purpose only</p>
            </div >
        </footer >
    )
}