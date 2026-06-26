import { useState } from "react"

export default function ScheduleDate({ media, date, status, empty, fullDate }) {
    const [selectedDates, setSelectedDates] = useState([])

    const notRendered = empty ? "empty" : ""
    const unavailable = status === "maintenance" || status === "holiday" ? "unavailable" : ""
    const booked = status === "confirmed" ? "booked" : ""
    const pending = status === "pending" ? "pending" : ""

    function test() {
        console.log(fullDate)
    }

    function selectDate(id) {

    }

    return (
        <div className={`schedule-date ${notRendered} ${booked} ${pending} ${unavailable}`}
            onClick={() => selectDate()}>
            {!empty && <>
                <span className='schedule-date-number'>{date}</span>
                {media !== 1 && < span className='schedule-date-status'>
                    {booked ? "Event Confirmed" : ""}
                    {pending ? "Event awaiting confirmation" : ""}
                    {status === "maintenance" ? "Scheduled for maintenance" : ""}
                    {status === "holiday" ? "Closure on Holiday" : ""}
                </span>}
            </>}
        </div >
    )
}
