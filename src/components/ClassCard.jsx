import React from 'react'

export default function ClassCard({ data }) {
    return (
        <div key={data.id} className="class-card">
            <img className="class-card-image" src={data.imgSrc} alt={data.imgAlt} />
            <div className="class-card-content">
                <div className="class-card-detail">
                    <h3 className="class-card-title">{data.title}</h3>
                    <p className="class-desc">{data.schedule}</p>
                    <p className="class-desc">{data.time}</p>
                </div>
                <a className="learn-more-link">Learn more</a>
            </div>
        </div>
    )
}