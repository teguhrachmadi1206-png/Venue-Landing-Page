
export default function ScheduleDate({ date, status, empty }) {
    const notRendered = empty
    const unavailable = status === "maintenance" || status === "holiday"
    const booked = status === "confirmed"
    const pending = status === "pending"

    function test() {
        console.log(date)
    }
    return (
        <div className={`schedule-date ${empty ? 'empty' : ""} ${booked ? "booked" : ""}`}
            onClick={test}>
            {!empty && <>
                <span className='schedule-date-number'>{date}</span>
                <span className='schedule-date-status'></span>
            </>}
        </div>
    )
}
