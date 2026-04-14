import "../styles/EventBanner.css"

export default function EventBanner({ media, event, page }) {
    const isPastEvent = new Date(event.endDateTime) < new Date ? true : false

    return (
        <div className={`event-banner ${page}`}>
            <img className={`event-poster ${page}`} src={event.posterSrc} alt={event.posterAlt} />
            <div className={`event-info ${page}`}>
                <div className={`event-info-title ${isPastEvent && "past"} ${page}`}>
                    <h2 className="event-title">{event.title}</h2>
                    <h3 className="event-artist">{event.artist}</h3>
                </div>
                <div className={`event-info-content ${page}`}>
                    <div className={`event-info-row ${page}`}>
                        <h4 className="event-info-row-title">Duration</h4>
                        <span className="separator">:</span>
                        <p className="event-row-content">{event.duration} min.</p>
                    </div>
                    <div className={`event-info-row ${page}`}>
                        <h4 className="event-info-row-title">Ticket Price</h4>
                        <span className="separator">:</span>
                        <p className="event-row-content">${event.price}.00</p>
                    </div>
                    {page === "detail" && <div className={`event-info-row ${page}`}>
                        <h4 className="event-info-row-title">Category</h4>
                        <span className="separator">:</span>
                        <p className="event-row-content">{event.category}</p>
                    </div>}
                    {page === "detail" && media !== 1 && <div className={`event-info-row ${page}`}>
                        <h4 className="event-info-row-title">Desc</h4>
                        <span className="separator">:</span>
                        <p className="event-row-content">{event.desc}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}