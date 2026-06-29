import { useState } from "react"

export default function ScheduleDate({ media, date, status, empty, fullDate, selected, setUserSelection }) {
    const [selectedDates, setSelectedDates] = useState([])
    const isPastDate = new Date(fullDate) < new Date()

    const notRendered = empty ? "empty" : ""
    const unavailable = status === "maintenance" || status === "holiday" ? "unavailable" : ""
    const booked = status === "confirmed" ? "booked" : ""
    const pending = status === "pending" ? "pending" : ""
    const available = !booked && !pending && !unavailable

    function test() {
        console.log(isPastDate)
    }

    function selectDate(date) {
        if (!selected) {
            setUserSelection(prev => [...prev, date])
        } else {
            setUserSelection(prev => prev.filter(item => item !== date))
        }
    }

    return (
        <>
            {isPastDate && <div className="schedule-date past">
                {!empty && <>
                    <span className='schedule-date-number'>{date}</span>
                    {media !== 1 && <span className='schedule-date-status past'>Past Date</span>}
                </>}
            </div >}
            {!isPastDate && <div className={`schedule-date ${notRendered} ${booked} ${pending} ${unavailable} ${selected ? "selected" : ""}`}
                onClick={() => selectDate(fullDate)}>
                {!empty && <>
                    <span className='schedule-date-number'>{date}</span>
                    {media !== 1 && isPastDate && <span className='schedule-date-status'>Date already passed</span>}
                    {media !== 1 && !isPastDate && <span className={`schedule-date-status ${available ? "available" : ""}`}>
                        {booked ? "Event Confirmed" : ""}
                        {pending ? "Event awaiting confirmation" : ""}
                        {status === "maintenance" ? "Scheduled for maintenance" : ""}
                        {status === "holiday" ? "Closure on Holiday" : ""}
                        {!booked && !pending && !unavailable ? "Available" : ""}
                    </span>}
                </>}
            </div >}
        </>
    )
}
