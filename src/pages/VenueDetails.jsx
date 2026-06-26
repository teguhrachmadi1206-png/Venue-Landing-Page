import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { venueData } from "../data/venue"
import VenueBanner from "../components/VenueBanner"
import '../styles/VenueDetails.css'
import VenueSchedule from "../components/VenueSchedule"
import { bookings, closures } from "../data/schedule"

export default function VenueDetails({ media }) {
    const { venueId } = useParams()
    const [venue, setVenue] = useState([])
    const unavailableDates = [...setUnavailableDates(bookings), ...setUnavailableDates(closures)]

    useEffect(() => {
        const shownVenue = venueData.find((item) => item.venueId == venueId)
        setVenue(shownVenue)
    }, [venueId])

    function setUnavailableDates(schedule) {
        const schedules = schedule.filter(item => item.venueId === venueId)
        const dates = []
        for (let i = 0; i < schedules.length; i++) {
            if (schedules[i].startDate === schedules[i].endDate) {
                dates.push({ date: schedules[i].startDate, status: schedules[i].status })
            } else {
                const startDate = new Date(schedules[i].startDate)
                const endDate = new Date(schedules[i].endDate)
                const difference = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
                for (let j = 0; j <= difference; j++) {
                    const newDate = new Date(startDate)
                    newDate.setDate(newDate.getDate() + j)
                    const formattedDate = newDate.toISOString().split('T')[0];
                    dates.push({ date: formattedDate, status: schedules[i].status })
                }
            }
        }
        return dates
    }

    function test() {
        console.log(unavailableDates)
    }

    return (
        <main>
            <VenueBanner venue={venue} />
            <section className="venue-detail-section">
                <h3 className="section-title">{venue.title} Schedule</h3>
                <VenueSchedule venue={venue} unavailable={unavailableDates} media={media} />
            </section>
            {/* <button onClick={test}>Test</button> */}
        </main>
    )
}
