import '../styles/AboutUs.css'
import aboutImg from '../assets/about-img.webp'
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
    const navigate = useNavigate()

    function learnMore() {
        navigate('/about')
    }

    return (
        <section id="about-section">
            <div className="section-header">
                <h2 className="sub-title">About Us</h2>
            </div>
            <div className="about-row">
                <img className="about-img" src={aboutImg} />
                <div className="about-content">
                    <div className="about-detail">
                        <h3 className="about-title">A Home for Performance, Culture, and Creative Growth</h3>
                        <p>The venue stands as a modern performing arts center dedicated to nurturing creativity, preserving cultural values, and presenting high-quality artistic performances for the public.</p>
                    </div>
                    <a className="about-learn-more" onClick={learnMore}>Learn more</a>
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
