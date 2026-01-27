import { useState } from 'react'
import './HeroSection.css'
import { bannerImages } from '../data/hero'

export default function HeroSection() {
    const [bannerImgId, setBannerImgId] = useState(0)
    const CarouselDots = bannerImages.map(image => (
        <div key={image.id} className={bannerImgId === image.id ? "carousel-dot selected" : "carousel-dot"} onClick={(event) => chooseBanner(image.id, event)}></div >
    ))

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

    function chooseBanner(id, event) {
        setBannerImgId(id)
    }

    return (
        <section id="hero-section" className="homepage">
            <div className="hero-banner">
                <img className="banner-img" src={bannerImages[bannerImgId].source} alt={bannerImages[bannerImgId].alt} />
                <div className="hero-content">
                    <span className="hero-title">Where Art Comes Alive on Stage</span>
                    <button className="hero-content-btn">Explore!</button>
                </div>
                <div className="carousel-control">
                    <button className="carousel-btn prev" onClick={prevBanner}></button>
                    <div className="carousel-dots">
                        {CarouselDots}
                    </div>
                    <button className="carousel-btn next" onClick={nextBanner}></button>
                </div>
            </div>
        </section>
    )
}