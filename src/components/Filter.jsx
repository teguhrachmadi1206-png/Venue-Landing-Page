import { useState, useRef, useEffect } from "react"
import "../styles/Filter.css"

export default function Filter({ items, categories, listStartRef, setCurrentPage, setItems }) {
    const [tabSelected, setTabSelected] = useState("upcoming")
    const [categoryIdSelected, setCategoryIdSelected] = useState("0")
    const [showFilter, setShowFilter] = useState(false)
    const [sortBy, setSortBy] = useState("dateTime")
    const [sortOption, setSortOption] = useState("ascending")
    const [searchInput, setSearchInput] = useState("")
    const categorySelectRef = useRef(null)
    const searchInputRef = useRef(null)
    const sortByRef = useRef(null)
    const sortOptionsRef = useRef(null)

    const itemsByCategory = categoryIdSelected === "0"
        ? items
        : items.filter(item => (item.category === categories[categoryIdSelected].name))

    const upcomingItemCards = itemsByCategory
        .filter(item => (new Date(item.dateTime) > new Date))
        .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))

    const pastItemCards = itemsByCategory
        .filter(item => (new Date(item.dateTime) < new Date))
        .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))

    const selectedItemCards = tabSelected === "upcoming"
        ? upcomingItemCards
        : tabSelected === "past"
            ? pastItemCards
            : itemsByCategory

    const filteredItemCards = searchInput
        ? selectedItemCards.filter(item =>
        (item.title.toLowerCase().includes(searchInput)
            || item.artist.toLowerCase().includes(searchInput)))
        : selectedItemCards

    const sortedItemCards = sortBy === "dateTime"
        ? filteredItemCards.sort((a, b) => {
            if (sortOption === "ascending") {
                return new Date(a.dateTime) - new Date(b.dateTime)
            } else {
                return new Date(b.dateTime) - new Date(a.dateTime)
            }
        })
        : sortBy === "price"
            ? filteredItemCards.sort((a, b) => {
                if (sortOption === "ascending") {
                    return a.price - b.price
                } else {
                    return b.price - a.price
                }
            })
            : filteredItemCards.sort((a, b) => {
                if (sortOption === "ascending") {
                    return a[sortBy].localeCompare(b[sortBy])
                } else {
                    return b[sortBy].localeCompare(a[sortBy])
                }
            })

    useEffect(() => {
        setItems(sortedItemCards)
    }, [tabSelected, categoryIdSelected, sortBy, sortOption, searchInput])

    function toggleShowFilter() {
        setShowFilter(prev => !prev)
    }

    function selectUpcoming() {
        if (tabSelected !== "upcoming") {
            setTabSelected("upcoming")
            setSearchInput("")
            setSortBy("dateTime")
            setSortOption("ascending")
            setCurrentPage(1)
            listStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    function selectPast() {
        if (tabSelected !== "past") {
            setTabSelected("past")
            setSearchInput("")
            setSortBy("dateTime")
            setSortOption("descending")
            setCurrentPage(1)
            listStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    function handleChangeCategory() {
        setCategoryIdSelected(categorySelectRef.current.value)
        listStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        setCurrentPage(1)
    }

    function filterByName(e) {
        e.preventDefault()
        if (searchInputRef.current.value !== "") {
            setSearchInput(searchInputRef.current.value)
            setCategoryIdSelected("0")
            setTabSelected(null)
            listStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
            setCurrentPage(1)
        }
    }

    function handleClearBtn() {
        setTabSelected("upcoming")
        setCategoryIdSelected("0")
        setSearchInput("")
        setSortBy("dateTime")
        setSortOption("ascending")
        setCurrentPage(1)
    }

    function handleChangeSort() {
        setSortBy(sortByRef.current.value)
        listStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        setCurrentPage(1)
    }

    function handleChangeSortOptions() {
        setSortOption(sortOptionsRef.current.value)
        listStartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        setCurrentPage(1)
    }

    return (
        <div className="filter-search-container">
            <div className="tabs-container">
                <button className={`tabs-btn ${tabSelected === "upcoming" && 'tab-selected'}`} onClick={selectUpcoming}>Upcoming</button>
                <button className={`tabs-btn ${tabSelected === "past" && 'tab-selected'}`} onClick={selectPast}>Past</button>
            </div>
            <div className="filter-box">
                <div className="filter-header">
                    {searchInput && <button className="filter-header-btn clear" onClick={handleClearBtn}>Clear Filter</button>}
                    <button className="filter-header-btn" onClick={toggleShowFilter}>{showFilter ? "Hide Filter" : "Show Filter"}</button>
                </div>
                {showFilter && <div className="filter-container">
                    <div className="filter-sub-container">
                        <label htmlFor="category" className="filter-label">Select Category:</label>
                        <select ref={categorySelectRef} id="category" className="filter-select" onChange={handleChangeCategory} value={categoryIdSelected}>
                            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                        </select>
                    </div>
                    <div className="filter-sub-container">
                        <label htmlFor="sort" className="filter-label">Sort by: </label>
                        <div className="select-container">
                            <select className="filter-select" ref={sortByRef} id="sort" onChange={handleChangeSort} value={sortBy}>
                                <option value="dateTime">Date</option>
                                <option value="price">Ticket Price</option>
                                <option value="category">Category</option>
                                <option value="title">Title</option>
                                <option value="artist">Artist</option>
                            </select>
                            <select className="filter-select" id="sort-options" ref={sortOptionsRef} onChange={handleChangeSortOptions} value={sortOption}>
                                <option value="ascending">{sortBy === "dateTime" ? "Oldest" : sortBy === "price" ? "Least Expensive" : "Ascending"}</option>
                                <option value="descending">{sortBy === "dateTime" ? "Latest" : sortBy === "price" ? "Most Expensive" : "Descending"}</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-sub-container">
                        <label htmlFor="search" className="filter-label">Search:</label>
                        <form id="search" className="search-container" onSubmit={filterByName}>
                            <input className="search-bar" type="text" placeholder={searchInput ? searchInput : "Search title or artist..."} ref={searchInputRef} />
                            <button className="search-btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>}
            </div>
        </div>
    )
}