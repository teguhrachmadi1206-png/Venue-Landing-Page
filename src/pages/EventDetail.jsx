import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { events } from "../data/events"
import "../styles/EventDetail.css"
import CallToAction from "../components/CallToAction"

export default function EventDetail({ media }) {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])
    const navigate = useNavigate()

    const isPastEvent = new Date(event.endDateTime) < new Date ? true : false

    useEffect(() => {
        const shownEvent = events.find((item) => item.id == eventId)
        setEvent(shownEvent)
    }, [eventId])

    function formatDate(dateStr) {
        const date = new Date(dateStr)
        return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
    }

    function EventBanner() {
        return (
            <div className="event-banner">
                <img className="event-poster" src={event.posterSrc} alt={event.posterAlt} />
                <div className="event-info">
                    <div className={`event-info-title ${isPastEvent && "past"}`}>
                        <h2 className="event-title">{event.title}</h2>
                        <h3 className="event-artist">{event.artist}</h3>
                    </div>
                    <div className="event-info-content">
                        <div className="event-info-row">
                            <h4 className="event-info-row-title">Duration</h4>
                            <span className="separator">:</span>
                            <p className="event-row-content">{event.duration} min.</p>
                        </div>
                        <div className="event-info-row">
                            <h4 className="event-info-row-title">Ticket Price</h4>
                            <span className="separator">:</span>
                            <p className="event-row-content">${event.price}.00</p>
                        </div>
                        <div className="event-info-row">
                            <h4 className="event-info-row-title">Category</h4>
                            <span className="separator">:</span>
                            <p className="event-row-content">{event.category}</p>
                        </div>
                        {media !== 1 && <div className="event-info-row">
                            <h4 className="event-info-row-title">Desc</h4>
                            <span className="separator">:</span>
                            <p className="event-row-content">{event.desc}</p>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }

    function EventDetails() {
        const [selectedDetail, setSelectedDetail] = useState(1)
        useEffect(() => {
            setSelectedDetail(1)
        }, [eventId])

        return (
            <div className="event-details">
                <div className="detail-tabs-container">
                    <button className={`event-details-tab ${selectedDetail === 1 && "selected"} ${isPastEvent && "past"}`} onClick={() => setSelectedDetail(1)}>Event Info</button>
                    <button className={`event-details-tab ${selectedDetail === 2 && "selected"} ${isPastEvent && "past"}`} onClick={() => setSelectedDetail(2)}>Event Date</button>
                </div>
                {selectedDetail === 1 && <div className="event-details-sub">
                    <div className="event-details-item">
                        <h3 className="event-info-sub-title">Synopsis</h3>
                        <p className="detail-item-content">{event.synopsis}</p>
                    </div>
                    <div className="event-details-item">
                        <h3 className="event-info-sub-title">Main Artist</h3>
                        {event.leadArtists?.map(artist => {
                            return (
                                <div className="detail-item-content box" key={artist.id}>
                                    <h4 className="event-item-content-title">{artist.role}</h4>
                                    <p className="event-item-content-detail">{artist.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>}
                {selectedDetail === 2 && <div className="event-details-sub">
                    <div className="event-details-item">
                        <h3 className="event-info-sub-title">Date & Session</h3>
                        {event.showtimes?.map(show => {
                            return (
                                <div key={show.id} className="detail-item-content box">
                                    <h4 className="event-item-content-title">{formatDate(show.date)}</h4>
                                    <div className="session-container">
                                        {show.times?.map((element, index) => <span className="session" key={index}>{element}</span>)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>
        )
    }

    return (
        <>
            <div className={`event-detail-section ${isPastEvent && "past"}`}>
                <EventBanner />
                <CallToAction
                    text={isPastEvent ? "Ticket Unavailable" : "Buy Ticket Now"}
                    isDisabled={isPastEvent}
                />
                <EventDetails />
            </div>
        </>
    )
}