import './ArtClass.css'
import { classData } from '../data/class'
import { useState } from 'react'


export default function ArtClass(props) {
    const [class1Id, setClass1Id] = useState(0)
    const [class2Id, setClass2Id] = useState(1)
    const [class3Id, setClass3Id] = useState(2)

    function prevClass() {
        setClass1Id(prev => {
            if (prev === 0) {
                return classData.length - 1
            } else {
                return prev - 1
            }
        })

        setClass2Id(prev => {
            if (prev === 0) {
                return classData.length - 1
            } else {
                return prev - 1
            }
        })

        setClass3Id(prev => {
            if (prev === 0) {
                return classData.length - 1
            } else {
                return prev - 1
            }
        })
    }

    function nextClass() {
        setClass1Id(prev => {
            if (prev === classData.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setClass2Id(prev => {
            if (prev === classData.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setClass3Id(prev => {
            if (prev === classData.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })
    }

    function ClassCard(props) {
        return (
            <div key={props.id} className="class-card">
                <img className="class-card-image" src={props.classes.imgSrc} alt={props.classes.imgAlt} />
                <div className="class-card-content">
                    <div className="class-card-detail">
                        <h3 className="class-card-title">{props.classes.title}</h3>
                        <p className="class-desc">{props.classes.schedule}</p>
                        <p className="class-desc">{props.classes.time}</p>
                    </div>
                    <a className="learn-more-link">Learn more</a>
                </div>
            </div>
        )
    }

    return (
        <section id="class-section">
            <div className="section-header">
                <h2 className="sub-title">Arts Class / Workshop</h2>
                <button className="show-all-btn">Show All</button>
            </div>
            <div className="class-row">
                <button className="row-btn prev" onClick={prevClass}></button>
                <div className="class-cards-container">
                    <ClassCard classes={classData[class1Id]} />
                    {props.media > 1 && <ClassCard classes={classData[class2Id]} />}
                    {props.media > 2 && <ClassCard classes={classData[class3Id]} />}
                </div>
                <button className="row-btn next" onClick={nextClass}></button>
            </div>
        </section>
    )
}