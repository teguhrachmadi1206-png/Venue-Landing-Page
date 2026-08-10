import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { formatDate } from "../function/FormatDate"
import { venueData } from "../data/venue"
import { bookings, closures } from "../data/schedule"
import VenueBanner from "../components/VenueBanner"
import VenueSchedule from "../components/VenueSchedule"
import Breadcrumbs from "../components/Breadcrumbs";
import CustomModal from "../components/CustomModal"
import '../styles/VenueDetails.css'

export default function VenueDetails({ media }) {
    const { venueId } = useParams()
    const confirmedDate = filterUnavailableDates(bookings)
    const closureDates = filterUnavailableDates(closures)
    const [venue, setVenue] = useState([])
    const [bookingStatus, setBookingStatus] = useState("none")
    const [unavailableDates, setUnavailableDates] = useState([...confirmedDate, ...closureDates])
    const [bookedDate, setBookedDate] = useState([])
    const [checkoutData, setCheckoutData] = useState({ name: "", email: "", phone: "", community: "", event: "", attendance: "" })
    const [modalContent, setModalContent] = useState({ show: false })
    const pageStartRef = useRef(null)

    const pagePaths = [
        { label: "Home", href: "/" },
        { label: "Venue", href: "/venues" },
        { label: (String(venue.title).length > 10 ? `${venue.title.slice(0, 10).trim()}...` : venue.title) }
    ];

    useEffect(() => {
        const shownVenue = venueData.find((item) => item.venueId == venueId)
        setVenue(shownVenue)
    }, [venueId])

    function filterUnavailableDates(schedule) {
        const schedules = schedule.filter(item => item.venueId === venueId)
        const dates = []
        for (let i = 0; i < schedules.length; i++) {
            if (schedules[i].startDate === schedules[i].endDate) {
                dates.push({ date: schedules[i].startDate, status: schedules[i].status })
            } else {
                const startDate = new Date(schedules[i].startDate)
                const endDate = new Date(schedules[i].endDate)
                const difference = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
                for (let j = 0; j <= difference; j++) {
                    const newDate = new Date(startDate)
                    newDate.setDate(newDate.getDate() + j)
                    const formattedDate = newDate.toISOString().split('T')[0];
                    dates.push({ date: formattedDate, status: schedules[i].status })
                }
            }
        }
        return dates
    }

    function VenueForm() {
        const [applicantData, setApplicantData] = useState(checkoutData ? checkoutData : { name: "", email: "", phone: "", community: "", event: "", attendance: "" })

        function handleFormChange(e) {
            const { name, value } = e.target;
            setApplicantData((prev) => ({ ...prev, [name]: value }));
        }

        function handleFormSubmit() {
            setCheckoutData(applicantData)
            setBookingStatus("confirmation")
            pageStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }

        function handleCancelBooking() {
            setCheckoutData(applicantData)
            function handleConfirm() {
                pageStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                setBookingStatus("none")
                setApplicantData({ name: "", email: "", phone: "", community: "", event: "", attendance: "" })
                setCheckoutData({ name: "", email: "", phone: "", community: "", event: "", attendance: "" })
                setModalContent({ show: false })
            }

            setModalContent(() => {
                const newContent = {}
                newContent.show = true
                newContent.title = "Discard your booking request?"
                newContent.message = "Your entered information will be lost if you leave this form."
                newContent.noBtn = <button className="modal-btn no-btn" onClick={handleConfirm}>Discard</button>
                newContent.yesBtn = <button className="modal-btn yes-btn" onClick={() => setModalContent({ show: false })}>Continue Editing</button>
                return newContent
            })
        }

        return (
            <section className="venue-detail-section">
                <h3 className="section-title">{`${venue.title} Booking Form`}</h3>
                <div className="booking-info-container">
                    <p>You have selected the following date(s) for your venue booking request:</p>
                    <span>Selected Date(s):</span>
                    <ul>
                        {bookedDate.map((item, id) => <li key={id}>{formatDate(item.date)}</li>)}
                    </ul>
                    <p>Please provide your contact and event details below.</p>
                </div>
                <div className="booking-form">
                    <div className="booking-form-row">
                        <label className="booking-form-label" htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={applicantData.name} onChange={handleFormChange} placeholder="e.g. John" className="booking-form-field" required></input>
                    </div>
                    <div className="booking-form-row">
                        <label className="booking-form-label" htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={applicantData.email} onChange={handleFormChange} placeholder="e.g. john@gmail.com" className="booking-form-field" required></input>
                    </div>
                    <div className="booking-form-row">
                        <label className="booking-form-label" htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" value={applicantData.phone} onChange={handleFormChange} placeholder="e.g. 1232918123" className="booking-form-field" required></input>
                    </div>
                    <div className="booking-form-row">
                        <label className="booking-form-label" htmlFor="community">Community / Studio Name:</label>
                        <input type="text" id="community" name="community" value={applicantData.community} onChange={handleFormChange} placeholder="e.g. Easterns Studio" className="booking-form-field" required></input>
                    </div>
                    <div className="booking-form-row">
                        <label className="booking-form-label" htmlFor="event">{venue.venueId === "auditorium" ? "Event Type" : "Agenda"}</label>
                        <input type="text" id="event" name="event" value={applicantData.event} onChange={handleFormChange} placeholder={`e.g. ${venue.venueId === "auditorium" ? "Theatre Event" : "Music Rehearsal"}`} className="booking-form-field" required></input>
                    </div>
                    <div className="booking-form-row">
                        <label className="booking-form-label" htmlFor="attendance">Expected Attendance:</label>
                        <input type="number" id="attendance" name="attendance" value={applicantData.attendance} onChange={handleFormChange} placeholder="e.g. 300" className="booking-form-field" required></input>
                    </div>
                    <div className="booking-button-container">
                        <button className="booking-form-button cancel" onClick={handleCancelBooking}>Cancel</button>
                        <button className="booking-form-button" onClick={handleFormSubmit}>Submit Data</button>
                    </div>
                </div>
            </section >
        )
    }

    function BookingConfirmation() {
        function handleConfirm() {
            setUnavailableDates(prev => [...prev, ...bookedDate])
            setBookedDate([])
            setCheckoutData({})
            setBookingStatus("none")
            pageStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
            setModalContent(() => {
                const newContent = {}
                newContent.show = true
                newContent.title = "Booking Request Submitted"
                newContent.message = ["Thank you for submitting your venue booking request.", "Your request has been received and is currently pending review by our venue team.", "The booking will only be considered confirmed after you receive confirmation from our team."]
                newContent.noBtn = <button className="modal-btn no-btn" onClick={() => setModalContent({ show: false })}>Close</button>
                return newContent
            })
        }

        function handleBack() {
            setBookingStatus("form")
            pageStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }

        return (
            <section className="venue-detail-section">
                <h3 className="section-title">Booking Confirmation</h3>
                <div className="booking-info-container">
                    <div className="booking-info-row">
                        <span className="booking-info-label">Venue</span>
                        <span className="booking-info-content">{venue.title}</span>
                    </div>
                    <div className="booking-info-row">
                        <span className="booking-info-label">Date</span>
                        <div className="booking-info-content-container">
                            {bookedDate.map((item, id) => <span className="booking-info-list" key={id}>{formatDate(item.date)}</span>)}
                        </div>
                    </div>
                    <div className="booking-info-row">
                        <span className="booking-info-label">Applicant</span>
                        <div className="booking-info-content-container">
                            <span className="booking-info-list">{checkoutData.name}</span>
                            <span className="booking-info-list">{checkoutData.email}</span>
                            <span className="booking-info-list">{checkoutData.phone}</span>
                        </div>
                    </div>
                    <div className="booking-info-row">
                        <span className="booking-info-label">Community</span>
                        <span className="booking-info-content">{checkoutData.community}</span>
                    </div>
                    <div className="booking-info-row">
                        <span className="booking-info-label">{venue.venueId === "auditorium" ? "Event Type" : "Agenda"}</span>
                        <span className="booking-info-content">{checkoutData.event}</span>
                    </div>
                    <div className="booking-info-row">
                        <span className="booking-info-label">Expected Attendance</span>
                        <span className="booking-info-content">{checkoutData.attendance} person(s)</span>
                    </div>
                </div>
                <div className="booking-button-container">
                    <button className="form-button cancel" onClick={handleBack}>Back</button>
                    <button className="form-button" onClick={handleConfirm}>Confirm Booking</button>
                </div>
            </section>
        )
    }

    return (
        <>
            <Breadcrumbs paths={pagePaths} />
            <main>
                {modalContent.show && <CustomModal content={modalContent} />}
                <VenueBanner venue={venue} />
                <span ref={pageStartRef}></span>
                {bookingStatus === "none" && <section className="venue-detail-section">
                    <h3 className="section-title">{venue.title} Schedule</h3>
                    <VenueSchedule
                        venue={venue}
                        unavailable={unavailableDates}
                        setUnavailableDates={setUnavailableDates}
                        setBookedDate={setBookedDate}
                        setBookingStatus={setBookingStatus}
                        media={media}
                        pageStartRef={pageStartRef} />
                </section>}
                {bookingStatus === "form" && <VenueForm />}
                {bookingStatus === "confirmation" && <BookingConfirmation />}
            </main>
        </>
    )
}
