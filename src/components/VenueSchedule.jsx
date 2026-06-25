import "../styles/VenueSchedule.css"
import ScheduleDate from "./ScheduleDate"

export default function VenueSchedule({ venue }) {
    const dateTime = new Date()
    const dateString = dateTime.toLocaleDateString()
    const formatDate = dateTime.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const month = Number(dateString.split("/")[0])
    // const month = 7
    const year = Number(dateString.split("/")[2])
    const totalDays = new Date(year, month, 0).getDate()

    const days = []
    for (let date = 1; date <= totalDays; date++) {
        const currentDate = new Date(year, month - 1, date)

        days.push({
            'date': date,
            'day': currentDate.toLocaleDateString("en-US", {
                weekday: "short",
            })
        })
    }

    const emptyDays = new Array(week.indexOf(`${days[0].day}`)).fill("empty")

    function test() {
        console.log(emptyDays)
    }

    return (
        <div className="schedule-table">
            <h4>{`${formatDate}`}</h4>
            <div className="schedule-day-header">
                <div className='schedule-day'><span>Mon</span></div>
                <div className='schedule-day'><span>Tue</span></div>
                <div className='schedule-day'><span>Wed</span></div>
                <div className='schedule-day'><span>Thu</span></div>
                <div className='schedule-day'><span>Fri</span></div>
                <div className='schedule-day'><span>Sat</span></div>
                <div className='schedule-day'><span>Sun</span></div>
            </div>
            <div className="schedule-date-table">
                {emptyDays?.map((data, index) => {
                    return <ScheduleDate key={index} date="" status="" empty={true} />
                })}
                {days.map((data, index) => {
                    return (
                        <ScheduleDate
                            key={index + emptyDays.length}
                            date={data.date}
                            status=""
                        />
                    )
                })}
            </div>
            {/* <button onClick={test}>Test</button> */}
        </div>
    )
}

