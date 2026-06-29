import { useNavigate } from 'react-router-dom'
import "../styles/EventCard.css"
import { formatShowDate } from '../function/FormatDate'

export default function EventCardComp({ id, event, pages, variant }) {
    const navigate = useNavigate()

    function goToDetail() {
        navigate(`/events/event/${event.id}`)
    }

    return (
        <>
            <div id={id} className={`event-card ${pages} ${variant}`} onClick={goToDetail}>
                <h3 className={`event-card-title ${pages}`}>{event.title}</h3>
                <div className="event-card-content">
                    <img className="event-thumbnail" src={event.posterSrc} alt={event.posterAlt} />
                    <div className={`event-detail ${pages}`}>
                        <div className={`event-detail-text ${pages}`}>
                            <p className={`event-artist ${pages}`}>{event.artist}</p>
                            <p className="event-date">{pages === "events-page" && <span className="event-detail-tag">Date: </span>}{formatShowDate(event.showtimes)}</p>
                            <p className="event-price">{pages === "events-page" && <span className="event-detail-tag">Ticket: </span>}{event.price ? `$${event.price}` : "Free"}</p>
                            {pages === "events-page" && <p className="event-page-desc"><span className="event-detail-tag">Desc: </span>{event.desc}</p>}
                        </div>
                        <span className="event-category">{event.category}</span>
                    </div>
                </div>
            </div >
        </>
    )
}