import './AboutUs.css'
import aboutImg from '../assets/about-img.jpg'

export default function AboutUs() {
    return (
        <section id="about-section">
            <h2 className="sub-title">About Us</h2>
            <div className="about-row">
                <img className="about-img" src={aboutImg} />
                <div className="about-content">
                    <div className="about-detail">
                        <h3 className="about-title">A Home for Performance, Culture, and Creative Growth</h3>
                        <p>The venue stands as a modern performing arts center dedicated to nurturing creativity, preserving cultural values, and presenting high-quality artistic performances for the public.</p>
                    </div>
                    <a className="about-learn-more">Learn more</a>
                </div>
            </div>
            <div className="stats-row">
                <div className="stats-box">
                    <span>120+ </span>
                    <p>Performances Hosted</p>
                </div>
                <div className="stats-box">
                    <span>40+</span>
                    <p>Art Communities Supported</p>
                </div>
                <div className="stats-box">
                    <span>1,500+</span>
                    <p>Workshop Participants</p>
                </div>
                <div className="stats-box">
                    <span>10+</span>
                    <p>Years of Cultural Engagement</p>
                </div>
            </div>
        </section>
    )
}
