import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { events } from "../data/events"
import { formatDate } from "../function/FormatDate"
import { seatLayout } from "../data/venue"
import EventBanner from "../components/EventBanner"
import Seats from "../components/Seats"
import Legends from "../components/Legends"
import CustomModal from "../components/CustomModal"
import "../styles/TicketReservation.css"

export default function TicketReservation({ media }) {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])
    const [dateIdSelected, setDateIdSelected] = useState(null)
    const [sessionIdSelected, setSessionIdSelected] = useState(null)
    const [confirmCheckout, setConfirmCheckout] = useState(false)
    const [confirmedSeat, setConfirmedSeat] = useState([])
    const [seatStatus, setSeatStatus] = useState({})
    const [modalContent, setModalContent] = useState({ show: false })
    const checkoutRef = useRef(null)

    useEffect(() => {
        const shownEvent = events.find((item) => item.id == eventId)
        setEvent(shownEvent)
        setDateIdSelected(null)
        setSessionIdSelected(null)
        setConfirmCheckout(false)
        setSeatStatus({})
    }, [eventId])

    function handleConfirm(seatData) {
        setConfirmedSeat(seatData)
        setConfirmCheckout(true)
        for (let i = 0; i < seatData.length; i++) {
            setSeatStatus(prev => ({ ...prev, [seatData[i]]: "hold" }))
        }
        checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    function Selector() {
        const sessions = event.showtimes?.filter(show => show.id === dateIdSelected)[0]?.sessions

        function selectDate(id) {
            setDateIdSelected(id)
            setSessionIdSelected(null)
        }

        function selectSession(id) {
            setSessionIdSelected(id)
            setSeatStatus(() => {
                const selectedSessions = event.showtimes?.filter(show => show.id === dateIdSelected)[0].sessions
                const session = selectedSessions.filter(session => session.sessionId === id)[0]
                return session.seatStatus
            })
        }

        return (
            <div className="selector-section">
                <div className="sub-selector">
                    <h3 className="selector-title">Select Date</h3>
                    <div className="selector-btn-container">
                        {event.showtimes?.map(show => <button
                            key={show.id}
                            className={`selector-btn ${show.id === dateIdSelected && "selected"}`}
                            onClick={() => selectDate(show.id)}
                        >{formatDate(show.date)}</button>)}
                    </div>
                </div>
                {dateIdSelected && <div className="sub-selector">
                    <h3 className="selector-title">Select Session</h3>
                    <div className="selector-btn-container">
                        {sessions?.map(session => <button
                            key={session.sessionId}
                            className={`selector-btn ${session.sessionId === sessionIdSelected && "selected"}`}
                            onClick={() => selectSession(session.sessionId)}
                        >{session.time}</button>)}
                    </div>
                </div>}
                {sessionIdSelected && <div className="sub-selector seat-sub">
                    <h3 className="selector-title">Select Seats</h3>
                    <Seats
                        media={media}
                        layout={seatLayout}
                        status={seatStatus}
                        sendData={handleConfirm} />
                    {media === 1 && <Legends />}
                </div>}
            </div >

        )
    }

    function CheckOut() {
        const date = event.showtimes.filter(show => show.id === dateIdSelected)[0]
        const session = date?.sessions.filter(session => session.sessionId === sessionIdSelected)[0].time

        function cancel() {
            for (let i = 0; i < confirmedSeat.length; i++) {
                setSeatStatus(prev => {
                    const newStatus = { ...prev }
                    delete newStatus[confirmedSeat[i]]
                    return newStatus
                })
            }
            setConfirmedSeat([])
            setConfirmCheckout(false)
        }

        function purchase() {
            function confirmPurchase() {
                setSeatStatus(prev => {
                    const newStatus = { ...prev }
                    for (let i = 0; i < confirmedSeat.length; i++) {
                        newStatus[confirmedSeat[i]] = "taken"
                    }
                    return newStatus
                })
                setModalContent({ show: true, message: "Payment Success!", yesBtn: <button className="modal-btn" onClick={() => setModalContent({ show: false })}>Close</button> })
            }

            function cancelPurchase() {
                setModalContent({ show: true, message: "Payment canceled", yesBtn: <button className="modal-btn" onClick={() => setModalContent({ show: false })}>Close</button> })
                cancel()
            }

            setModalContent(() => {
                const newContent = {}
                newContent.show = true
                newContent.title = "Purchase Confirmation"
                newContent.message = `Pay ${confirmedSeat.length} "${event.title}" ticket${confirmedSeat.length > 1 ? "s" : ""} for $${confirmedSeat.length * event.price}.00?`
                newContent.yesBtn = <button className="modal-btn yes-btn" onClick={confirmPurchase}>Yes</button>
                newContent.noBtn = <button className="modal-btn no-btn" onClick={cancelPurchase}>No</button>
                return newContent
            })

            setConfirmedSeat([])
            setConfirmCheckout(false)
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
                        <button className="pay-btn" onClick={purchase}>Pay Now</button>
                        <button className="cancel-btn" onClick={cancel}>Cancel Purchase</button>
                    </div>
                </div>
            </div>
        )
    }

    function NotAvailable() {
        return (
            <div className="event-unavailable">
                <p>This event is already expired.</p>
            </div>
        )
    }

    return (
        <div className="ticket-reservation-main">
            {modalContent.show && <CustomModal content={modalContent} />}
            <span ref={checkoutRef}></span>
            <EventBanner
                media={media}
                event={event}
                page="ticket" />
            {new Date(event.dateTime) > new Date() && !confirmCheckout && <Selector />}
            {new Date(event.dateTime) > new Date() && confirmCheckout && <CheckOut />}
            {new Date(event.dateTime) < new Date() && <NotAvailable />}
        </div>
    )
}