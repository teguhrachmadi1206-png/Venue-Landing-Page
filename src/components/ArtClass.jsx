import '../styles/ArtClass.css'
import ClassCard from './ClassCard'
import { classData, programs } from '../data/class'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ArtClass({ media }) {
    const [class1Id, setClass1Id] = useState(0)
    const [class2Id, setClass2Id] = useState(1)
    const [class3Id, setClass3Id] = useState(2)
    const navigate = useNavigate()

    function prevClass() {
        setClass1Id(prev => {
            if (prev === 0) {
                return programs.length - 1
            } else {
                return prev - 1
            }
        })

        setClass2Id(prev => {
            if (prev === 0) {
                return programs.length - 1
            } else {
                return prev - 1
            }
        })

        setClass3Id(prev => {
            if (prev === 0) {
                return programs.length - 1
            } else {
                return prev - 1
            }
        })
    }

    function nextClass() {
        setClass1Id(prev => {
            if (prev === programs.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setClass2Id(prev => {
            if (prev === programs.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })

        setClass3Id(prev => {
            if (prev === programs.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })
    }

    function showAll() {
        navigate('/classes')
    }

    return (
        <section id="class-section">
            <div className="section-header">
                <h2 className="sub-title">Arts Class / Workshop</h2>
                <a className="show-all-btn" onClick={showAll}>Show All</a>
            </div>
            <div className="class-row">
                <button className="row-btn prev" onClick={prevClass}></button>
                <div className="class-cards-container">
                    <ClassCard data={programs[class1Id]} page="home" />
                    {media > 1 && <ClassCard data={programs[class2Id]} page="home" />}
                    {media > 2 && <ClassCard data={programs[class3Id]} page="home" />}
                </div>
                <button className="row-btn next" onClick={nextClass}></button>
            </div>
        </section>
    )
}