import { useNavigate } from 'react-router-dom'
import "../styles/EventCard.css"

export default function EventCardComp({ id, event, pages, variant }) {
    const navigate = useNavigate()

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

    const isConsecutiveDates = (datesArr) => {
        for (let i = 0 - 1; i < datesArr.length; i++) {
            const diff = datesArr[datesArr.length - i] - datesArr[datesArr.length - (i + 1)]
            if (diff > 1) {
                return false
            }
        }
        return true
    }

    function formatShowDate(showtime) {
        const dates = showtime.map(show => new Date(show.date)).sort((a, b) => a - b)
        const datesOnly = showtime.map(show => new Date(show.date).getDate()).sort((a, b) => a - b)
        const startDate = dates[0]
        const endDate = dates[dates.length - 1]
        const options = { month: "short", day: "numeric" };
        const month = startDate.toLocaleString('en-US', { month: "short" })
        const year = startDate.getFullYear();

        if (dates.length === 1) {
            return `${startDate.toLocaleDateString("en-US", { ...options, year: "numeric" })}`
        }

        const sameMonth = startDate.getMonth() === endDate.getMonth();
        const sameYear = startDate.getFullYear() === endDate.getFullYear();

        if (sameYear) {
            if (sameMonth) {
                if (isConsecutiveDates(datesOnly)) {
                    return `${month} ${startDate.getDate()} – ${endDate.getDate()}, ${year}`
                } else {
                    let resultStr = `${startDate.toLocaleDateString("en-US", options)}`
                    for (let i = 1; i < dates.length; i++) {
                        if (i === dates.length - 1) {
                            resultStr += ` & ${dates[i].getDate()},`
                        } else {
                            resultStr += `, ${dates[i].getDate()}`
                        }
                    }
                    resultStr += ` ${startDate.getFullYear()}`
                    return resultStr
                }
            } else {
                let resultStr = `${startDate.toLocaleDateString("en-US", options)}`
                for (let i = 1; i < dates.length; i++) {
                    if (i === dates.length - 1) {
                        resultStr += ` & ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()},`
                    } else {
                        resultStr += `, ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()}`
                    }
                }
                resultStr += ` ${startDate.getFullYear()}`
                return resultStr
            }
        } else {
            let resultStr = `${startDate.toLocaleDateString("en-US", options)}, ${year}`
            for (let i = 1; i < dates.length; i++) {
                if (i === dates.length - 1) {
                    resultStr += ` & ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()}, ${dates[i].getFullYear()}`
                } else {
                    resultStr += `, ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()}, ${dates[i].getFullYear()}`
                }
            }
            return resultStr
        }
    }

    function goToDetail(eventId) {
        navigate(eventId)
    }

    function test(item) {
        const dates = item.showtimes.map(a => new Date(a.date).getDate()).sort((a, b) => a - b)

        alert(isConsecutiveDates(dates))
    }

    return (
        <>
            <div id={id} className={`event-card ${pages} ${variant}`} onClick={() => goToDetail(`/events/event/${event.id}`)}>
                <h3 className={`event-card-title ${pages}`}>{event.title}</h3>
                <div className="event-card-content">
                    <img className="event-thumbnail" src={event.posterSrc} alt={event.posterAlt} />
                    <div className={`event-detail ${pages}`}>
                        <div className={`event-detail-text ${pages}`}>
                            <p className={`event-artist ${pages}`}>{event.artist}</p>
                            <p className="event-date">{pages === "events-page" && <span className="event-detail-tag">Date: </span>}{formatShowDate(event.showtimes)}</p>
                            {/* <p className="event-time">{pages === "events-page" && <span className="event-detail-tag">Time: </span>}{formatTime(event.dateTime)}</p> */}
                            <p className="event-price">{pages === "events-page" && <span className="event-detail-tag">Ticket: </span>}{event.price ? `$${event.price}` : "Free"}</p>
                            {/* {pages === "events-page" && <p className="event-page-desc"><span className="event-detail-tag">Ticket: </span>{event.price ? `$${event.price}` : "Free"}</p>} */}
                            {pages === "events-page" && <p className="event-page-desc"><span className="event-detail-tag">Desc: </span>{event.desc}</p>}
                        </div>
                        <span className="event-category">{event.category}</span>
                    </div>
                </div>
            </div >
        </>
    )
}