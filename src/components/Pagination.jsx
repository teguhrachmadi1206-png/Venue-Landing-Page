import { useState, useRef, useEffect } from "react";
import "../styles/Pagination.css"

export default function Pagination({ media, item, totalEvents, itemShown, setItemsShown, currentPage, setCurrentPage }) {
    const selectItemPerPageRef = useRef(null)
    const [optionNumber, setOptionNumber] = useState(1)
    const pages = eventPages()

    function setOptions() {
        if (media === 3) {
            return 6
        } else {
            return 4
        }
    }

    useEffect(() => {
        const options = setOptions()
        setItemsShown(options[0])
    }, [])

    useEffect(() => {
        setItemsShown(selectItemPerPageRef.current.value * setOptions())
    }, [media])

    function eventPages() {
        const list = []
        for (let i = 0; i < Math.ceil(totalEvents / itemShown); i++) {
            list.push(i + 1)
        }
        return list
    }

    function changeItemsPerPage() {
        setItemsShown(selectItemPerPageRef.current.value * setOptions())
        setOptionNumber(selectItemPerPageRef.current.value)
    }

    function changePage(num) {
        if (currentPage !== num) {
            setCurrentPage(num)
        }
    }

    function handleNextPage() {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <>
            <div className="pagination">
                <div className="page-buttons-container">
                    <button className="pagination-btn prev" onClick={handlePrevPage}></button>
                    <div className="page-buttons">
                        {pages.map((page, index) => <button key={index} className={`page-btn ${currentPage === page && 'selected'}`} onClick={() => changePage(page)}>{page}</button>)}
                    </div>
                    <button className="pagination-btn next" onClick={handleNextPage}></button>
                </div>
                <div className="pagination-options">
                    <label htmlFor="item-per-page">Show {item} per page: </label>
                    <select className="item-per-page-select" id="item-per-page" onChange={changeItemsPerPage} ref={selectItemPerPageRef} value={optionNumber}>
                        <option value='1'>{media === 3 ? "6" : "4"} {item}</option>
                        <option value='2'>{media === 3 ? "12" : "8"} {item}</option>
                        <option value='3'>{media === 3 ? "18" : "12"} {item}</option>
                        <option value='4'>{media === 3 ? "24" : "16"} {item}</option>
                    </select>
                </div>
            </div>
        </>
    )
}