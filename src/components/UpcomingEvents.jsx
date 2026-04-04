import { useState } from "react"
import '../styles/UpcomingEvents.css'
import { events } from "../data/events"
import { useNavigate } from 'react-router-dom'
import EventCardComp from "./EventCard.jsx"

export default function UpcomingEvents({ media }) {
    const [card1Id, setCard1Id] = useState(0)
    const [card2Id, setCard2Id] = useState(1)
    const [card3Id, setCard3Id] = useState(2)
    const navigate = useNavigate()
    const upcomingEvents = events.filter(event => (new Date(event.dateTime) > new Date()))

    function nextEvent() {
        setCard1Id(prev => {
            if (prev === upcomingEvents.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setCard2Id(prev => {
            if (prev === upcomingEvents.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setCard3Id(prev => {
            if (prev === upcomingEvents.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })
    }

    function prevEvent() {
        setCard1Id(prev => {
            if (prev === 0) {
                return upcomingEvents.length - 1
            } else {
                return prev - 1
            }
        })

        setCard2Id(prev => {
            if (prev === 0) {
                return upcomingEvents.length - 1
            } else {
                return prev - 1
            }
        })

        setCard3Id(prev => {
            if (prev === 0) {
                return upcomingEvents.length - 1
            } else {
                return prev - 1
            }
        })
    }

    function showAll() {
        navigate('/events')
    }

    return (
        <section id="events-section">
            <div className="section-header">
                <h2 className="sub-title">Upcoming Events</h2>
                <button className="show-all-btn" onClick={showAll}>Show All</button>
            </div>
            <div className="event-row">
                <button className="row-btn prev" onClick={prevEvent}></button>
                <div className="event-cards-container">
                    <EventCardComp event={upcomingEvents[card1Id]} pages="" variant="" id="event-card-1" />
                    {media > 1 && <EventCardComp event={upcomingEvents[card2Id]} pages="" variant="" id="event-card-2" />}
                    {media > 2 && <EventCardComp event={upcomingEvents[card3Id]} pages="" variant="" id="event-card-3" />}
                </div>
                <button className="row-btn next" onClick={nextEvent}></button>
            </div>
        </section>
    )
}