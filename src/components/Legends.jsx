import "../styles/Legends.css"

export default function Legends({ available, onHold, taken, unavailable }) {
    return (
        <div className="legends">
            <div className="legend-item">
                <div className="legend-box available"></div>
                <span>{available}</span>
            </div>
            <div className="legend-item">
                <div className="legend-box hold"></div>
                <span>{onHold}</span>
            </div>
            <div className="legend-item">
                <div className="legend-box taken"></div>
                <span>{taken}</span>
            </div>
            <div className="legend-item">
                <div className="legend-box unavailable"></div>
                <span>{unavailable}</span>
            </div>
        </div>
    )
}