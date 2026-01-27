import './RentVenue.css'
import { venueData } from '../data/venue'
import { useState } from 'react'

export default function RentVenues(props) {
    const [venueId, setVenueId] = useState(0)

    function changeVenue() {
        if (venueId === (venueData.length - 1)) {
            setVenueId(0)
        } else {
            setVenueId(prev => prev + 1)
        }
    }

    return (
        <section id="venue-section">
            <div className="section-header">
                <h2 className="sub-title">Venue Rental Information</h2>
                <button className="show-all-btn">Show All</button>
            </div>
            <div className="venue-row">
                <img src={venueData[venueId].imgSrc} alt={venueData[venueId].imgAlt} className="venue-img" />
                <div className="venue-content">
                    <div>
                        <h3 className="venue-title">{venueData[venueId].title}</h3>
                        <p className="venue-detail">{props.media < 3 ? venueData[venueId].shortDesc : venueData[venueId].desc}</p>
                        {props.media === 3 && <p className="venue-detail">{venueData[venueId].shortDesc}</p>}
                    </div>
                    <button className="venue-btn">Check Availability</button>
                </div>
                <button className="row-btn next" onClick={changeVenue}></button>
            </div>
        </section >
    )
}