import { useState, useRef } from "react"
import { programs, programCategories } from '../data/class'
import HeroSection from "../components/HeroSection";
import ClassCard from '../components/ClassCard'
import Filter from "../components/Filter"
import Pagination from "../components/Pagination"
import Breadcrumbs from "../components/Breadcrumbs";
import '../styles/Classes.css'

export default function Classes({ media }) {
    const pagePaths = [
        { label: "Home", href: "/" },
        { label: "Class" }
    ];
    const [classCards, setClassCards] = useState(programs)
    const [tabSelected, setTabSelected] = useState("regular")
    const [currentPage, setCurrentPage] = useState(1)
    const classListStartRef = useRef(null)
    const selectedType = classCards.filter(item => item.type === tabSelected)
    const classData = tabSelected === "regular"
        ? selectedType
        : selectedType.filter(item => new Date(item.date) > new Date)

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

    function ClassSection({ data, variant }) {
        const [sectionCurrentPage, setSectionCurrentPage] = useState(currentPage)
        const [itemsShown, setItemsShown] = useState(1)
        const sectionListStartRef = useRef(null)
        const displayClassCards = data.slice((sectionCurrentPage - 1) * itemsShown, itemsShown * sectionCurrentPage)

        function handleSetItemShown(e) {
            setItemsShown(e)
            setSectionCurrentPage(1)
        }

        function handleSetSectionCurrentPage(e) {
            setSectionCurrentPage(e)
            sectionListStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }

        return (
            <>
                <section className="class-section">
                    <span ref={sectionListStartRef}></span>
                    <div className="class-section-header">
                        <h2 className="sub-title">{tabSelected === "regular" ? "Our Weekly Class" : `${variant} Workshop`}:</h2>
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
                    {classCards.length && <Pagination
                        media={media}
                        item="classes"
                        totalEvents={data.length}
                        itemShown={itemsShown}
                        setItemsShown={(e) => handleSetItemShown(e)}
                        currentPage={sectionCurrentPage}
                        setCurrentPage={(e) => handleSetSectionCurrentPage(e)} />}
                </section>
            </>
        )
    }

    return (
        <>
            <Breadcrumbs paths={pagePaths} />
            <HeroSection page="class" style="border" />
            <div className="filter-search-container">
                <div className="tabs-container">
                    <button className={`tabs-btn ${tabSelected === "regular" && 'tab-selected'}`} onClick={selectRegular}>Weekly Class</button>
                    <button className={`tabs-btn ${tabSelected === "workshop" && 'tab-selected'}`} onClick={selectWorkshop}>Special Workshop</button>
                </div>
            </div>
            <span ref={classListStartRef}></span>
            <div className="main-class-page">
                <ClassSection data={classData} variant="upcoming" />
                {tabSelected === "workshop" && <ClassSection data={selectedType.filter(item => new Date(item.date) < new Date)} variant="past" />}
            </div>
        </>
    )
}