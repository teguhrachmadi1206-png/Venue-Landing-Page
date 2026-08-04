import React from 'react'

export default function ClassCard({ data, page }) {
    return (
        <div key={data.id} className={`class-card ${data.type} ${page}`}>
            <img className="class-card-image" src={data.imgSrc} alt={data.imgAlt} />
            <span className={`class-card-badge ${data.type}`}>{data.type === "regular" ? "Weekly Class" : "Special Workshop"}</span>
            <div className="class-card-content">
                <div className="class-card-detail">
                    <h3 className={`class-card-title ${data.type}`}>{data.title}</h3>
                    {page !== "home" && <h4 className={`class-card-sub-title ${data.type}`}>{data.studio}</h4>}
                    {data.type === "regular" && <p className={`class-desc ${data.type}`}>Every {data.schedule}</p>}
                    {data.type === "workshop" && <p className={`class-desc ${data.type}`}>{data.date}</p>}
                    <p className={`class-desc ${data.type}`}>{data.time}</p>
                </div>
                <a className={`learn-more-link ${data.type}`}>Learn more</a>
            </div>
        </div>
    )
}