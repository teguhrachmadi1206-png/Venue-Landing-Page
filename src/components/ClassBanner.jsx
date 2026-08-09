import "../styles/ClassBanner.css"
import { useState } from "react"
import { FocusTrap } from "focus-trap-react"

export default function ClassBanner({ media, program, page }) {
    const [showPosterModal, setShowPosterModal] = useState(false)
    const isPastWorkshop = program.type === "workshop"
        && new Date(program.date) < new Date
        ? true
        : false

    function showPoster() {
        setShowPosterModal(true)
    }

    return (
        <div className={`class-banner ${page}`}>
            {showPosterModal && <FocusTrap>
                <div className="poster-modal">
                    <div className="poster-modal-overlay" onClick={() => setShowPosterModal(false)}>
                        <img className="big-poster" src={program.imgSrc} alt={program.imgAlt} />
                        <button className="modal-close-btn">X</button>
                    </div>
                </div>
            </FocusTrap>}
            <img className={`class-poster ${page} ${isPastWorkshop ? "past" : ""}`} src={program.imgSrc} alt={program.imgAlt} onClick={showPoster} />
            <div className={`class-info ${page}`}>
                <div className={`class-info-title ${page} ${isPastWorkshop && "past"}`}>
                    <h2 className="class-title">{program.title}</h2>
                    <h3 className="class-sub-title">{program.organizer}</h3>
                </div>
                <div className={`class-info-content ${page}`}>
                    {page === "detail" && <div className={`class-info-row ${page}`}>
                        <h4 className="class-info-row-title">Category</h4>
                        <span className="separator">:</span>
                        <p className="class-row-content">{program.category}</p>
                    </div>}
                    {page === "detail" && <div className={`class-info-row ${page}`}>
                        <h4 className="class-info-row-title">Status</h4>
                        <span className="separator">:</span>
                        <p className="class-row-content">{program.status}</p>
                    </div>}
                    <div className={`class-info-row ${page}`}>
                        <h4 className="class-info-row-title">Level</h4>
                        <span className="separator">:</span>
                        <p className="class-row-content">{program.level}</p>
                    </div>
                    {page === "detail" && program.type === "regular" && <div className={`class-info-row ${page}`}>
                        <h4 className="class-info-row-title">Participant</h4>
                        <span className="separator">:</span>
                        <p className="class-row-content">{program.ageGroup} years old</p>
                    </div>}
                    <div className={`class-info-row ${page}`}>
                        <h4 className="class-info-row-title">{program.type === "regular" && "Course "}Fee</h4>
                        <span className="separator">:</span>
                        <p className="class-row-content">{program.price}</p>
                    </div>
                    {page === "detail" && media !== 1 && <div className={`class-info-row ${page}`}>
                        <h4 className="class-info-row-title">Desc</h4>
                        <span className="separator">:</span>
                        <p className="class-row-content">{program.description}</p>
                    </div>}
                </div>
            </div>
        </div >
    )
}