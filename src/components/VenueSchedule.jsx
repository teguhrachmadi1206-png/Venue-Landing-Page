import "../styles/VenueSchedule.css"
import ScheduleDate from "./ScheduleDate"
import { bookings, closures, currentScheduleAllowed, weekString, monthString } from "../data/schedule"
import { useEffect, useRef, useState } from "react"
import ShortMessage from "./ShortMessage"
import Legends from "./Legends"
import CallToAction from "./CallToAction"
import CustomModal from "./CustomModal"

export default function VenueSchedule({ media, venue, unavailable }) {
    const [monthSelected, setMonthSelected] = useState(Number(new Date().toLocaleDateString().split("/")[0]) - 1)
    const [yearSelected, setYearSelected] = useState(Number(new Date().toLocaleDateString().split("/")[2]))
    const [message, setMessage] = useState(null)
    const [userSelection, setUserSelection] = useState([])
    const [modalContent, setModalContent] = useState({ show: false })
    const monthSelectorRef = useRef(null)
    const yearSelectorRef = useRef(null)
    const dateHeader = new Date(yearSelected, monthSelected, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const days = makeDays(yearSelected, monthSelected)
    const emptyDays = new Array(weekString.indexOf(`${days[0].day}`)).fill("empty")

    function showMessage(message, time) {
        setMessage(message)
        setTimeout(() => {
            setMessage(null);
        }, time);
    }

    function makeDays(year, month) {
        const totalDays = new Date(year, month + 1, 0).getDate()
        const dates = [];
        for (let date = 1; date <= totalDays; date++) {
            const currentDate = new Date(year, month, date)

            dates.push({
                'date': date,
                'day': currentDate.toLocaleDateString("en-US", {
                    weekday: "short",
                }),
                'fullDate': currentDate,
            })
        }
        return dates
    }

    function changeMonth() {
        setMonthSelected(Number(monthSelectorRef.current.value))
    }

    function changeYear() {
        const minMonth = Math.min(...(currentScheduleAllowed.filter(schedule => schedule.year === Number(yearSelectorRef.current.value))[0].months))
        setYearSelected(Number(yearSelectorRef.current.value))
        setMonthSelected(minMonth)
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
            else {
                showMessage("You've reached last month available", 1000)
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
            } else {
                showMessage("You've reached last month available", 1000)
            }
        }
    }

    function bookDate() {
        let datesToBook = '';
        const selection = [...userSelection].sort((a, b) => a.localeCompare(b))
        console.log(selection, userSelection)
        for (let i = 0; i < selection.length; i++) {
            const full = new Date(selection[i]).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })
            datesToBook += `[${full}]`
            if (i !== selection.length - 1) {
                datesToBook += " - "
            }
        }
        setModalContent(() => {
            const newContent = {}
            newContent.show = true
            newContent.title = "Book Confirmation"
            newContent.message = `Confirm book for: ${datesToBook}, proceeds?`
            newContent.noBtn = <button className="modal-btn no-btn" onClick={() => setModalContent({ show: false })}>No</button>
            newContent.yesBtn = <button className="modal-btn yes-btn" onClick={() => setModalContent({ show: false })}>Yes</button>
            return newContent
        })
    }

    function test() {
        console.log(monthSelected)
    }

    return (
        <div className="schedule-table">
            {modalContent.show && <CustomModal content={modalContent} />}
            {message && <ShortMessage message={message} />}
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
                <h4>{`${dateHeader}`}</h4>
                <button className="schedule-btn next" onClick={nextMonth}>{"next >"}</button>
            </div>
            <div className="schedule-day-header">
                {weekString.map(day => {
                    return (
                        <div key={day} className='schedule-day'><span>{day}</span></div>
                    )
                })}
            </div>
            <div className="schedule-date-table">
                {emptyDays?.map((data, index) => {
                    return <ScheduleDate key={index} date="" status="" empty={true} />
                })}
                {days?.map((data, index) => {
                    const date = new Date(data.fullDate)
                    date.setDate(date.getDate() + 1)
                    const thisDate = date.toISOString().split('T')[0];
                    const status = unavailable.filter(item => item.date === thisDate)[0]?.status
                    return (
                        <ScheduleDate
                            key={index + emptyDays.length}
                            date={data.date}
                            status={status}
                            fullDate={thisDate}
                            media={media}
                            selected={userSelection.includes(thisDate)}
                            setUserSelection={setUserSelection}
                        />
                    )
                })}
            </div>
            {media === 1 && <Legends available="Available" onHold="Awaiting Confimation" taken="Event Confirmed" unavailable="Not Available" />}
            <CallToAction text="Book Now" isDisabled={!userSelection.length} handler={bookDate} />
            {/* <button onClick={test}>Test</button> */}
        </div>
    )
}

