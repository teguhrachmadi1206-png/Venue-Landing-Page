
export default function ScheduleDate({ date, status, empty }) {
    return (
        <div className={`schedule-date ${empty ? 'empty' : ""}`}>
            {!empty && <>
                <span className='schedule-date-number'>{date}</span>
                <span className='schedule-date-status'></span>
            </>}
        </div>
    )
}
