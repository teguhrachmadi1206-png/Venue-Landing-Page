import '../styles/RentVenue.css'
import { venueData } from '../data/venue'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RentVenues({ media, home }) {
    const [venueId, setVenueId] = useState(0)
    const navigate = useNavigate()

    function changeVenue() {
        if (venueId === (venueData.length - 1)) {
            setVenueId(0)
        } else {
            setVenueId(prev => prev + 1)
        }
    }

    function showAll() {
        navigate('/venues')
    }

    function goToBookVenue() {
        navigate(venueData[venueId].bookLink)
    }

    return (
        <section id="venue-section">
            <div className="section-header">
                <h2 className="sub-title">Venue Rental Information</h2>
                <a className="show-all-btn" href="https://sites.google.com/view/rumentang-siang-web/venues">Show All</a>
            </div>
            <div className="venue-row">
                <img src={venueData[venueId].imgSrc} alt={venueData[venueId].imgAlt} className="venue-img" />
                <div className="venue-content">
                    <div>
                        <h3 className="venue-title">{venueData[venueId].title}</h3>
                        <p className="venue-detail">{media < 3 ? venueData[venueId].shortDesc : venueData[venueId].desc}</p>
                        {media === 3 && <p className="venue-detail">{venueData[venueId].shortDesc}</p>}
                    </div>
                    <button className="venue-btn"><a href={venueData[venueId].bookLink}>Check Availability</a></button>
                </div>
                <button className="row-btn next" onClick={changeVenue}></button>
            </div>
        </section >
    )
}