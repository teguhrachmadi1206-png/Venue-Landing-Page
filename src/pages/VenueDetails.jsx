import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { venueData } from "../data/venue"
import VenueBanner from "../components/VenueBanner"
import '../styles/VenueDetails.css'
import VenueSchedule from "../components/VenueSchedule"

export default function VenueDetails() {
    const { venueId } = useParams()
    const [venue, setVenue] = useState([])

    useEffect(() => {
        const shownVenue = venueData.find((item) => item.id == venueId)
        setVenue(shownVenue)
    }, [venueId])

    return (
        <main>
            <VenueBanner venue={venue} />
            <section>
                <h3 className="section-title">{venue.title} Schedule</h3>
                <VenueSchedule venue={venue} />
            </section>
        </main>
    )
}
