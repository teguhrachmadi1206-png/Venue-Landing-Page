import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { events } from "../data/events"
import { formatDate } from "../function/FormatDate"
import "../styles/EventDetail.css"
import CallToAction from "../components/CallToAction"
import EventBanner from "../components/EventBanner"

export default function EventDetail({ media }) {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])
    const navigate = useNavigate()

    const isPastEvent = new Date(event.endDateTime) < new Date ? true : false

    useEffect(() => {
        const shownEvent = events.find((item) => item.id == eventId)
        setEvent(shownEvent)
    }, [eventId])

    function buyTicket() {
        navigate(`/events/ticket/${event.id}`)
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
                                        {show.sessions?.map(session => <span className={`session ${isPastEvent && "past"}`} key={session.sessionId}>{session.time}</span>)}
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
                <EventBanner
                    media={media}
                    event={event}
                    page="detail" />
                <CallToAction
                    text={isPastEvent ? "Ticket Unavailable" : "Buy Ticket Now"}
                    isDisabled={isPastEvent}
                    handler={buyTicket}
                />
                <EventDetails />
            </div>
        </>
    )
}