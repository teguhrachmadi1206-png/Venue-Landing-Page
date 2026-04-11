import { useState, useRef } from "react"
import { events, eventCategories } from "../data/events"
import '../styles/Events.css'
import EventCardComp from "../components/EventCard"
import HeroSection from "../components/HeroSection"
import Filter from "../components/Filter"
import Pagination from "../components/Pagination"

export default function Events({ media }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsShown, setItemsShown] = useState(1)
    const [eventCards, setEventCards] = useState(events)
    const eventListStartRef = useRef(null)
    const displayEventCards = eventCards.slice((currentPage - 1) * itemsShown, itemsShown * currentPage)

    function handleSetEventCards(e) {
        setEventCards(e)
    }

    function handleSetItemShown(e) {
        setItemsShown(e)
        setCurrentPage(1)
    }

    function handleSetCurrentPage(e) {
        setCurrentPage(e)
        eventListStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    function MainEventPage() {
        return (
            <>
                <section className="main-event-page">
                    <span ref={eventListStartRef}></span>
                    <div className="event-section-header">
                        <h2 className="sub-title">Our Events:</h2>
                    </div>
                    <div className="event-page-card-container">
                        {displayEventCards.length > 0
                            ? displayEventCards.map(event => <EventCardComp key={event.id} event={event} pages="events-page" variant={new Date(event.endDateTime) < new Date ? "past" : "upcoming"} />)
                            : <p className="message">No events matched</p>}
                    </div >
                </section>
            </>
        )
    }

    return (
        <>
            <HeroSection page="events" style="" />
            <Filter
                items={events}
                categories={eventCategories}
                listStartRef={eventListStartRef}
                setCurrentPage={(e) => handleSetCurrentPage(e)}
                setItems={(e) => handleSetEventCards(e)} />
            <MainEventPage />
            <Pagination
                media={media}
                item="events"
                totalEvents={eventCards.length}
                itemShown={itemsShown}
                setItemsShown={(e) => handleSetItemShown(e)}
                currentPage={currentPage}
                setCurrentPage={(e) => handleSetCurrentPage(e)} />
        </>
    )
}