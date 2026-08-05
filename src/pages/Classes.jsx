import { useState, useRef } from "react"
import { programs, programCategories } from '../data/class'
import HeroSection from "../components/HeroSection";
import ClassCard from '../components/ClassCard'
import Filter from "../components/Filter"
import Pagination from "../components/Pagination"
import '../styles/Classes.css'

export default function Classes({ media }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsShown, setItemsShown] = useState(1)
    const [classCards, setClassCards] = useState(programs)
    const [tabSelected, setTabSelected] = useState("regular")
    const classListStartRef = useRef(null)
    const selectedType = classCards.filter(item => item.type === tabSelected)
    const displayClassCards = selectedType.slice((currentPage - 1) * itemsShown, itemsShown * currentPage)

    function handleSetItemShown(e) {
        setItemsShown(e)
        setCurrentPage(1)
    }

    function handleSetCurrentPage(e) {
        setCurrentPage(e)
        classListStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    function selectRegular() {
        if (tabSelected !== "regular") {
            setTabSelected("regular")
            setCurrentPage(1)
            classListStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    function selectWorkshop() {
        if (tabSelected !== "workshop") {
            setTabSelected("workshop")
            setCurrentPage(1)
            classListStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    function MainClassPage() {
        return (
            <>
                <section className="main-class-page">
                    <span ref={classListStartRef}></span>
                    <div className="class-section-header">
                        <h2 className="sub-title">Our {tabSelected === "regular" ? "Weekly Class" : "Workshop"}:</h2>
                    </div>
                    <div className="class-page-card-container">
                        {displayClassCards.length > 0 &&
                            displayClassCards.map(item => <ClassCard
                                key={item.id}
                                data={item}
                                page="class-page"
                                variant={new Date(item.date) < new Date ? "past" : "upcoming"}
                            />)}
                    </div >
                </section>
            </>
        )
    }

    return (
        <>
            <HeroSection page="class" style="border" />
            <div className="filter-search-container">
                <div className="tabs-container">
                    <button className={`tabs-btn ${tabSelected === "regular" && 'tab-selected'}`} onClick={selectRegular}>Weekly Class</button>
                    <button className={`tabs-btn ${tabSelected === "workshop" && 'tab-selected'}`} onClick={selectWorkshop}>Special Workshop</button>
                </div>
            </div>
            <MainClassPage />
            {classCards.length && <Pagination
                media={media}
                item="classes"
                totalEvents={selectedType.length}
                itemShown={itemsShown}
                setItemsShown={(e) => handleSetItemShown(e)}
                currentPage={currentPage}
                setCurrentPage={(e) => handleSetCurrentPage(e)} />}
        </>
    )
}