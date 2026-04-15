import { useState, memo } from "react"
import Legends from "./Legends"
import "../styles/Seats.css"

export default function Seats({ media, layout, status, sendData }) {
    const [currentUserSelection, setCurrentUserSelection] = useState([])

    const currentLayout = []
    for (let i = 0; i < layout.rows.length; i++) {
        const row = []
        for (let j = 1; j <= layout.seatsPerRow; j++) {
            row.push(`${layout.rows[i]}${j}`)
        }
        currentLayout.push(row)
    }

    function selectSeat(seat) {
        if (status[seat] === "taken" || status[seat] === "hold" || status[seat] === "unavailable") {
            return
        } else {
            if (currentUserSelection.includes(seat)) {
                setCurrentUserSelection(prev => prev.filter(item => item !== seat))
            } else {
                setCurrentUserSelection(prev => [...prev, seat])
            }
        }
    }

    function clearSelection() {
        setCurrentUserSelection([])
    }

    function confirmSelection() {
        if (currentUserSelection.length > 0) {
            sendData(currentUserSelection)
        }
    }

    function SeatItem({ seat }) {
        return (
            <button
                className={`
                    seat 
                    ${/^.(6|19)$/.test(seat) && "space"} 
                    ${currentUserSelection.includes(seat) && "selected"}
                    ${status[seat]}
                `}
                onClick={() => selectSeat(seat)}
            >{seat}</button>
        )
    }

    return (
        <>
            <div className="seat-options">
                {media !== 1 && <Legends />}
                <div className="seats-btn-container">
                    <button className="seats-options-btn clear" onClick={clearSelection}>Clear Selection</button>
                    <button className="seats-options-btn confirm" onClick={confirmSelection}>Confirm Selection</button>
                </div>
            </div>
            <div className="seat-selector">
                <div className="seats-container">
                    <div className="stage-container">
                        <div className="stage">
                            <span>Stage Area</span>
                        </div>
                    </div>
                    {currentLayout.map((row, index) => {
                        return (
                            <div key={index} className="seat-row">
                                {row.map(seat => <SeatItem key={seat} seat={seat} />)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}