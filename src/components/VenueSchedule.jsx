import "../styles/VenueSchedule.css"
import ScheduleDate from "./ScheduleDate"
import { bookings, closures, currentScheduleAllowed } from "../data/schedule"
import { useEffect, useRef, useState } from "react"

export default function VenueSchedule({ venue }) {
    const currentDateTime = new Date()
    const currentDateString = currentDateTime.toLocaleDateString()
    const currentMonth = Number(currentDateString.split("/")[0]) - 1
    const currentYear = Number(currentDateString.split("/")[2])
    const [monthSelected, setMonthSelected] = useState(currentMonth)
    const [yearSelected, setYearSelected] = useState(currentYear)
    const monthSelectorRef = useRef(null)
    const yearSelectorRef = useRef(null)
    const selectedDate = new Date(yearSelected, monthSelected, 1)
    const formatDate = selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const totalDays = new Date(yearSelected, monthSelected + 1, 0).getDate()
    const weekString = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const days = []
    for (let date = 1; date <= totalDays; date++) {
        const currentDate = new Date(yearSelected, monthSelected, date)

        days.push({
            'date': date,
            'day': currentDate.toLocaleDateString("en-US", {
                weekday: "short",
            }),
            'fullDate': currentDate,
        })
    }

    const emptyDays = new Array(weekString.indexOf(`${days[0].day}`)).fill("empty")

    // function isDateInRange(target, start, end) {
    //     const targetDate = new Date(target)
    //     const startDate = new Date(start)
    //     const endDate = new Date(end)

    //     return targetDate >= startDate && targetDate <= endDate
    // }

    function changeMonth() {
        setMonthSelected(Number(monthSelectorRef.current.value))
    }

    function changeYear() {
        setYearSelected(Number(yearSelectorRef.current.value))
    }

    function nextMonth() {
        const maxYear = Math.max(...(currentScheduleAllowed.map(schedule => schedule.year)))
        const maxMonth = Math.max(...(currentScheduleAllowed.filter(schedule => schedule.year === maxYear)[0].months))

        if (yearSelected < maxYear) {
            if (monthSelected < 11) {
                setMonthSelected(prev => prev + 1)
            } else {
                setMonthSelected(0)
                setYearSelected(prev => prev + 1)
            }
        } else {
            if (monthSelected < maxMonth) {
                setMonthSelected(prev => prev + 1)
            }
        }
    }

    function prevMonth() {
        const minYear = Math.min(...(currentScheduleAllowed.map(schedule => schedule.year)))
        const minMonth = Math.min(...(currentScheduleAllowed.filter(schedule => schedule.year === minYear)[0].months))

        if (yearSelected > minYear) {
            if (monthSelected > 0) {
                setMonthSelected(prev => prev - 1)
            } else {
                setMonthSelected(11)
                setYearSelected(prev => prev - 1)
            }
        } else {
            if (monthSelected > minMonth) {
                setMonthSelected(prev => prev - 1)
            }
        }
    }

    function test() {
        console.log(monthSelected)
    }

    return (
        <div className="schedule-table">
            <div className="schedule-filter-container">
                <select className="filter-select year" id="year-selector" onChange={changeYear} ref={yearSelectorRef} value={yearSelected}>
                    {currentScheduleAllowed.map(schedule => {
                        return (
                            <option key={schedule.year} value={schedule.year}>{schedule.year}</option>
                        )
                    })}
                </select>
                <select className="filter-select month" id="month-selector" onChange={changeMonth} ref={monthSelectorRef} value={monthSelected}>
                    {currentScheduleAllowed.filter(schedule => schedule.year === yearSelected)[0].months.map(month => {
                        return (
                            <option key={month} value={month}>{monthString[month]}</option>
                        )
                    })}
                </select>
            </div>
            <div className="schedule-header">
                <button className="schedule-btn prev" onClick={prevMonth}>{"< prev"}</button>
                <h4>{`${formatDate}`}</h4>
                <button className="schedule-btn next" onClick={nextMonth}>{"next >"}</button>
            </div>
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
                {days?.map((data, index) => {
                    return (
                        <ScheduleDate
                            key={index + emptyDays.length}
                            date={data.date}
                            status={""}
                        />
                    )
                })}
            </div>
            {/* <button onClick={test}>Test</button> */}
        </div>
    )
}

