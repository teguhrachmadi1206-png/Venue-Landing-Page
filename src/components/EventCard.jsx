import "../styles/EventCard.css"

export default function EventCardComp({ id, event, pages, variant }) {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }

    const formatTime = (timeStr) => {
        const time = new Date(timeStr)
        return time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        })
    }

    return (
        <div id={id} className={`event-card ${pages} ${variant}`}>
            <h3 className={`event-card-title ${pages}`}>{event.title}</h3>
            <div className="event-card-content">
                <img className="event-thumbnail" src={event.posterSrc} alt={event.posterAlt} />
                <div className={`event-detail ${pages}`}>
                    <div className={`event-detail-text ${pages}`}>
                        <p className={`event-artist ${pages}`}>{event.artist}</p>
                        <p className="event-date">{pages === "events-page" && <span className="event-detail-tag">Date: </span>}{formatDate(event.dateTime)}</p>
                        <p className="event-time">{pages === "events-page" && <span className="event-detail-tag">Time: </span>}{formatTime(event.dateTime)}</p>
                        <p className="event-price">{pages === "events-page" && <span className="event-detail-tag">Ticket: </span>}{event.price ? `$${event.price}` : "Free"}</p>
                        {pages === "events-page" && <p className="event-page-desc">{pages === "events-page" && <span className="event-detail-tag">Date: </span>}{event.desc}</p>}
                    </div>
                    <span className="event-category">{event.category}</span>
                </div>
            </div>
        </div >
    )
}