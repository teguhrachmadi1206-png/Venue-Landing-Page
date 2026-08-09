import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { programs } from "../data/class"
import { formatDate } from "../function/FormatDate"
import "../styles/ClassDetail.css"
import CallToAction from "../components/CallToAction"
import ClassBanner from "../components/ClassBanner"

export default function ClassDetail({ media }) {
    const { programId } = useParams()
    const [program, setProgram] = useState([])
    const navigate = useNavigate()

    const isPastWorkshop = program.type === "workshop"
        && new Date(program.date) < new Date
        ? true
        : false

    function register() {
        navigate(`/classes/registration/${program.id}`)
    }

    useEffect(() => {
        const shownProgram = programs.find((item) => item.id == programId)
        setProgram(shownProgram)
    }, [programId])

    function ClassDetails() {
        const [selectedDetail, setSelectedDetail] = useState(1)
        useEffect(() => {
            setSelectedDetail(1)
        }, [programId])

        return (
            <div className="class-details">
                <div className="detail-tabs-container">
                    <button className={`class-details-tab ${selectedDetail === 1 && "selected"} ${isPastWorkshop && "past"}`} onClick={() => setSelectedDetail(1)}>Overview</button>
                    <button className={`class-details-tab ${selectedDetail === 2 && "selected"} ${isPastWorkshop && "past"}`} onClick={() => setSelectedDetail(2)}>What You'll Learn</button>
                </div>
                {selectedDetail === 1 && <div className="class-details-sub">
                    <div className="class-details-item">
                        <h3 className="class-info-sub-title">Organizer</h3>
                        <div className="detail-item-content box">
                            <h4 className="class-item-content-title">{program.organizer}</h4>
                            <p className="detail-item-content">{program.organizerDesc}</p>
                        </div>
                    </div>
                    <div className="class-details-item">
                        <h3 className="class-info-sub-title">Facilitators</h3>
                        {program.instructors?.map((people, id) => {
                            return (
                                <div className="detail-item-content box" key={id}>
                                    <h4 className="class-item-content-title">{people.role}</h4>
                                    <p className="class-item-content-detail">{people.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="class-details-item">
                        <h3 className="class-info-sub-title">Schedule</h3>
                        <div className="detail-item-content box">
                            <h4 className="class-item-content-title">{program.type === "regular" ? "Day" : "Date"}</h4>
                            <p className="detail-item-content">{program.type === "regular" ? `Every ${program.schedule}` : formatDate(program.date)}</p>
                        </div>
                        <div className="detail-item-content box">
                            <h4 className="class-item-content-title">Time</h4>
                            <p className="detail-item-content">{program.time}</p>
                        </div>
                        <div className="detail-item-content box">
                            <h4 className="class-item-content-title">Location</h4>
                            <p className="detail-item-content">{program.location}</p>
                        </div>
                    </div>
                </div>}
                {selectedDetail === 2 && <div className="class-details-sub">
                    <div className="class-details-item">
                        <h3 className="class-info-sub-title">Topics</h3>
                        {program.learningTopics?.map((topic, id) => {
                            return (
                                <div className="detail-item-content box" key={id}>
                                    <h4 className="class-item-content-title">{topic.title}</h4>
                                    <p className="class-item-content-detail">{topic.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    {program.type === "workshop" &&
                        <div className="class-details-item">
                            <h3 className="class-info-sub-title">Practical Information</h3>
                            <div className="detail-item-content box">
                                <h4 className="class-item-content-title">Facilities</h4>
                                <ul>
                                    {program.facilities?.map((facility, id) => {
                                        return (
                                            <li className="class-item-content-detail list" key={id}>{facility}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="detail-item-content box">
                                <h4 className="class-item-content-title">Requirements</h4>
                                <ul>
                                    {program.requirements?.map((requirement, id) => {
                                        return (
                                            <li className="class-item-content-detail list" key={id}>{requirement}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    }
                </div>}
            </div>
        )
    }

    return (
        <div className={`class-detail-section ${isPastWorkshop && "past"}`}>
            <ClassBanner
                media={media}
                program={program}
                page="detail" />
            <CallToAction
                text={program.type === "workshop" && isPastWorkshop ? "Registration Closed" : "Register Now"}
                isDisabled={isPastWorkshop}
                handler={register}
            />
            <ClassDetails />
        </div>
    )
}