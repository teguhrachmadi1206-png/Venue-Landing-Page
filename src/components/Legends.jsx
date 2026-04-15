import "../styles/Legends.css"

export default function Legends() {
    return (
        <div className="legends">
            <div className="legend-item">
                <div className="legend-box available"></div>
                <span>Available</span>
            </div>
            <div className="legend-item">
                <div className="legend-box hold"></div>
                <span>On Hold</span>
            </div>
            <div className="legend-item">
                <div className="legend-box taken"></div>
                <span>Taken</span>
            </div>
            <div className="legend-item">
                <div className="legend-box unavailable"></div>
                <span>Not For Sale</span>
            </div>
        </div>
    )
}