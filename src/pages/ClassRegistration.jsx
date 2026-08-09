import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { programs } from "../data/class"
import { formatDate } from "../function/FormatDate"
import "../styles/ClassRegistration.css"
import ClassBanner from "../components/ClassBanner"
import CustomModal from "../components/CustomModal"

export default function ClassRegistration({ media }) {
    const { programId } = useParams()
    const [program, setProgram] = useState([])
    const [applicantData, setApplicantData] = useState({ name: "", email: "", phone: "" })
    const [modalContent, setModalContent] = useState({ show: false })
    const remaining = program.capacity - program.filledCapacity
    useEffect(() => {
        const shownProgram = programs.find((item) => item.id == programId)
        setProgram(shownProgram)
    }, [programId])

    function handleFormChange(e) {
        const { name, value } = e.target;
        setApplicantData((prev) => ({ ...prev, [name]: value }));
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(applicantData)
    }

    return (
        <div className="class-registration-main">
            <ClassBanner
                media={media}
                program={program}
                page="registration" />
            <div className="class-details-sub">
                <div className="class-details-item">
                    <h3 className="class-info-sub-title">Summary</h3>
                    <div className="registration-item-content">
                        <p className="class-item-content-detail">{program.type === "regular" ? `Every ${program.schedule}` : formatDate(program.date)}</p>
                        <p className="class-item-content-detail">{program.time}</p>
                        <p className="class-item-content-detail">{program.location}</p>
                        {program.type === "workshop" && <p className="class-item-content-detail">Remaining Spots: {remaining} Seat{remaining > 1 && "s"}</p>}
                    </div>
                </div>
                <div className="class-details-item">
                    <h3 className="class-info-sub-title">Registration Form</h3>
                    <div className="registration-item-content">
                        <form className="registration-form" onSubmit={handleFormSubmit}>
                            <div className="registration-form-row">
                                <label className="form-label" htmlFor="name">Name</label>
                                <span className="separator">:</span>
                                <input type="text" id="name" name="name" value={applicantData.name} onChange={handleFormChange} placeholder="e.g. John" className="form-field" required></input>
                            </div>
                            <div className="registration-form-row">
                                <label className="form-label" htmlFor="email">Email</label>
                                <span className="separator">:</span>
                                <input type="email" id="email" name="email" value={applicantData.email} onChange={handleFormChange} placeholder="e.g. john@gmail.com" className="form-field" required></input>
                            </div>
                            <div className="registration-form-row">
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <span className="separator">:</span>
                                <input type="tel" id="phone" name="phone" value={applicantData.phone} onChange={handleFormChange} placeholder="e.g. 1232918123" className="form-field" required></input>
                            </div>
                            <button type="submit" className="form-button">Submit Registration</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

