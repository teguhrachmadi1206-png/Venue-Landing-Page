import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { events } from "../data/events"
import { formatDate } from "../function/FormatDate"
import { seatLayout } from "../data/venue"
import EventBanner from "../components/EventBanner"
import "../styles/TicketReservation.css"

export default function TicketReservation({ media }) {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])
    const [dateIdSelected, setDateIdSelected] = useState("")
    const [sessionIdSelected, setSessionIdSelected] = useState("")
    const [confirmCheckout, setConfirmCheckout] = useState(false)
    const [confirmedSeat, setConfirmedSeat] = useState([])
    const checkoutRef = useRef(null)

    useEffect(() => {
        const shownEvent = events.find((item) => item.id == eventId)
        setEvent(shownEvent)
    }, [eventId])

    useEffect(() => {
        setSessionIdSelected("")
    }, [dateIdSelected])

    useEffect(() => {
        setConfirmCheckout(false)
        setConfirmedSeat([])
    }, [eventId, dateIdSelected, sessionIdSelected])


    function Seats() {
        const [seatsSelected, setSeatsSelected] = useState([])
        const [seatStatus, setSeatStatus] = useState([])

        const layout = []
        for (let i = 0; i < seatLayout.rows.length; i++) {
            const row = []
            for (let j = 1; j <= seatLayout.seatsPerRow; j++) {
                row.push(`${seatLayout.rows[i]}${j}`)
            }
            layout.push(row)
        }

        useEffect(() => {
            setSeatsSelected([])
        }, [eventId, dateIdSelected, sessionIdSelected])


        function selectSeats(seat) {
            if (seatsSelected.includes(seat)) {
                setSeatsSelected(prev => prev.filter(item => item !== seat))
            } else {
                setSeatsSelected([...seatsSelected, seat])
            }
        }

        function clearSelection() {
            setSeatsSelected([])
            setConfirmCheckout(false)
        }

        function confirmSelection() {
            if (seatsSelected.length > 0) {
                setConfirmCheckout(true)
                setConfirmedSeat(seatsSelected.sort((a, b) => a.localeCompare(b)))
                checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
        }

        return (
            <>
                <div className="seat-options">
                    {media !== 1 && <Legends />}
                    <div className="seats-btn-container">
                        <button className="seats-options-btn clear" onClick={clearSelection}>Clear Selection</button>
                        <button className="seats-options-btn confirm" onClick={confirmSelection}>Confirm Selection</button>
                    </div>
                </div>
                <div className="seat-selector">
                    <div className="seats-container">
                        <div className="stage-container">
                            <div className="stage">
                                <span>Stage Area</span>
                            </div>
                        </div>
                        {layout.map((row, index) => {
                            return (
                                <div key={index} className="seat-row">
                                    {row.map(seat => <button
                                        key={seat}
                                        className={`seat ${/^.(6|19)$/.test(seat) && "space"} ${seatsSelected.includes(seat) && "selected"} ${confirmedSeat.includes(seat) && "locked"}`}
                                        onClick={() => selectSeats(seat)}
                                    >{seat}</button>)}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    function Legends() {
        return (
            <div className="legends">
                <div className="legend-item">
                    <div className="legend-box available"></div>
                    <span>Available</span>
                </div>
                <div className="legend-item">
                    <div className="legend-box hold"></div>
                    <span>On Hold</span>
                </div>
                <div className="legend-item">
                    <div className="legend-box taken"></div>
                    <span>Taken</span>
                </div>
                <div className="legend-item">
                    <div className="legend-box unavailable"></div>
                    <span>Not For Sale</span>
                </div>
            </div>
        )
    }

    function Selector() {
        const sessions = event.showtimes?.filter(show => show.id === dateIdSelected)[0]?.sessions

        return (
            <div className="selector-section">
                <div className="sub-selector">
                    <h3 className="selector-title">Select Date</h3>
                    <div className="selector-btn-container">
                        {event.showtimes?.map(show => <button
                            key={show.id}
                            className={`selector-btn ${show.id === dateIdSelected && "selected"}`}
                            onClick={() => setDateIdSelected(show.id)}
                        >{formatDate(show.date)}</button>)}
                    </div>
                </div>
                {dateIdSelected && <div className="sub-selector">
                    <h3 className="selector-title">Select Session</h3>
                    <div className="selector-btn-container">
                        {sessions?.map(session => <button
                            key={session.sessionId}
                            className={`selector-btn ${session.sessionId === sessionIdSelected && "selected"}`}
                            onClick={() => setSessionIdSelected(session.sessionId)}
                        >{session.time}</button>)}
                    </div>
                </div>}
                {sessionIdSelected && <div className="sub-selector seat-sub">
                    <h3 className="selector-title">Select Seats</h3>
                    <Seats />
                    {media === 1 && <Legends />}
                </div>}
            </div >

        )
    }

    function CheckOut() {
        const date = event.showtimes.filter(show => show.id === dateIdSelected)[0]
        const session = date?.sessions.filter(session => session.sessionId === sessionIdSelected)[0].time

        function cancel() {
            setConfirmCheckout(false)
            setConfirmedSeat([])
        }

        return (
            <div className="checkout">
                <h3 className="selector-title">Checkout</h3>
                <div className="checkout-info">
                    <div className="checkout-data">
                        <h4>{event.title} - {event.artist}</h4>
                        <p className="checkout-data-row">{formatDate(date.date)} - {session}</p>
                        <div className="checkout-data-row">
                            <p className="data-row-label">{confirmedSeat.length} Ticket{confirmedSeat.length > 1 && "s"}</p>
                            <div className="data-row-content">
                                {confirmedSeat.map((seat, index) => {
                                    return (
                                        <span key={index} className="checkout-ticket">{seat}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="checkout-data-row">
                            <p className="data-row-label">Total </p>
                            <div className="data-row-content"><span>${event.price * confirmedSeat.length}.00</span></div>
                        </div>
                    </div>
                    <div className="checkout-btn-container">
                        <button className="pay-btn">Pay Now</button>
                        <button className="cancel-btn" onClick={cancel}>Cancel Purchase</button>
                    </div>
                </div>
            </div>
        )
    }

    function test() {
        console.log(date)
    }

    return (
        <div className="ticket-reservation-main">
            <span ref={checkoutRef}></span>
            <EventBanner
                media={media}
                event={event}
                page="ticket" />
            {!confirmCheckout && <Selector />}
            {confirmCheckout && <CheckOut />}
        </div>
    )
}