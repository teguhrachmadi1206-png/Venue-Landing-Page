import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../styles/HeroSection.css'
import { bannerBackground, homeBannerImages, bannerData, eventsBannerImages } from '../data/hero'

export default function HeroSection({ page, style }) {
    const bannerImages = (page === "home" ? homeBannerImages : page === "events" && eventsBannerImages)
    const [bannerImgId, setBannerImgId] = useState(0)
    const CarouselDots = bannerImages.map(image => (
        <div key={image.id} className={bannerImgId === image.id ? "carousel-dot selected" : "carousel-dot"} onClick={(event) => chooseBanner(image.id, event)}></div >
    ))
    const navigate = useNavigate()

    function nextBanner() {
        if (bannerImgId === bannerImages.length - 1) {
            setBannerImgId(0)
        } else {
            setBannerImgId(prev => prev + 1)
        }
    }

    function prevBanner() {
        if (bannerImgId === 0) {
            setBannerImgId(bannerImages.length - 1)
        } else {
            setBannerImgId(prev => prev - 1)
        }
    }

    function chooseBanner(id) {
        setBannerImgId(id)
    }

    function explore() {
        navigate('/events')
    }

    return (
        <section id="hero-section" className="homepage">
            <div className="hero-banner">
                <img className="banner-background" src={bannerBackground} />
                <img className={`banner-img ${style}`} src={bannerImages[bannerImgId].source} alt={bannerImages[bannerImgId].alt} />
                <div className="hero-content">
                    <div className="hero-text-container">
                        <span className="hero-title">{bannerData[page].title}</span>
                        {bannerData[page].desc && <p className="hero-content-desc">{bannerData[page].desc}</p>}
                    </div>
                    {page === "home" && <button className="hero-content-btn" onClick={explore}>{bannerData[page].button}</button>}
                </div>
                {page === "home" && <div className="carousel-control">
                    <button className="carousel-btn prev" onClick={prevBanner}></button>
                    <div className="carousel-dots">
                        {CarouselDots}
                    </div>
                    <button className="carousel-btn next" onClick={nextBanner}></button>
                </div>}
            </div>
        </section>
    )
}