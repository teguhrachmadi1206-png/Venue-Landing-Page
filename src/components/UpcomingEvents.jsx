import { useState } from "react"
import './UpcomingEvents.css'
import { events } from "../data/events"

export default function UpcomingEvents(props) {
    const [card1Id, setCard1Id] = useState(0)
    const [card2Id, setCard2Id] = useState(1)
    const [card3Id, setCard3Id] = useState(2)

    function nextEvent() {
        setCard1Id(prev => {
            if (prev === events.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setCard2Id(prev => {
            if (prev === events.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setCard3Id(prev => {
            if (prev === events.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })
    }

    function prevEvent() {
        setCard1Id(prev => {
            if (prev === 0) {
                return events.length - 1
            } else {
                return prev - 1
            }
        })

        setCard2Id(prev => {
            if (prev === 0) {
                return events.length - 1
            } else {
                return prev - 1
            }
        })

        setCard3Id(prev => {
            if (prev === 0) {
                return events.length - 1
            } else {
                return prev - 1
            }
        })
    }

    function EventCard(props) {
        return (
            <div id={props.id} className="event-card">
                <h3 className="event-card-title">{props.event.title}</h3>
                <div className="event-card-content">
                    <img className="event-thumbnail" src={props.event.posterSrc} alt={props.event.posterAlt} />
                    <div className="event-detail">
                        <div className="event-detail-text">
                            <p className="event-artist">{props.event.artist}</p>
                            <p className="event-date">{props.event.date}</p>
                            <p className="event-time">{props.event.time}</p>
                        </div>
                        <span className="event-category">{props.event.category}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="events-section">
            <div className="section-header">
                <h2 className="sub-title">Upcoming Events</h2>
                <button className="show-all-btn">Show All</button>
            </div>
            <div className="event-row">
                <button className="row-btn prev" onClick={prevEvent}></button>
                <div className="event-cards-container">
                    <EventCard event={events[card1Id]} id="event-card-1" />
                    {props.media > 1 && <EventCard event={events[card2Id]} id="event-card-2" />}
                    {props.media > 2 && <EventCard event={events[card3Id]} id="event-card-3" />}
                </div>
                <button className="row-btn next" onClick={nextEvent}></button>
            </div>
        </section>
    )
}