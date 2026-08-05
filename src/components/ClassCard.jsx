import React from 'react'
import { formatDate } from '../function/FormatDate'
import '../styles/ClassCard.css'

export default function ClassCard({ data, page, variant }) {
    return (
        <div key={data.id} className={`class-card ${data.type} ${page} ${variant}`}>
            <img className={`class-card-image ${variant}`} src={data.imgSrc} alt={data.imgAlt} />
            {page === "home" && <span className={`class-card-badge ${data.type}`}>{data.type === "regular" ? "Weekly Class" : "Special Workshop"}</span>}
            {variant === "past" && <span className="past-badge">Past Workshop</span>}
            <div className="class-card-content">
                <div className="class-card-detail">
                    <h3 className={`class-card-title ${data.type} ${variant}`}>{data.title}</h3>
                    {page !== "home" && <h4 className={`class-card-sub-title ${data.type} ${variant}`}>{data.studio ? data.studio : data.organizer}</h4>}
                    {data.type === "regular" && <p className={`class-desc ${data.type} ${variant}`}>Every {data.schedule}</p>}
                    {data.type === "workshop" && <p className={`class-desc ${data.type} ${variant}`}>{formatDate(data.date)}</p>}
                    <p className={`class-desc ${data.type} ${variant}`}>{data.time}</p>
                </div>
                <a className={`learn-more-link ${data.type} ${variant}`}>Learn more</a>
            </div>
        </div>
    )
}