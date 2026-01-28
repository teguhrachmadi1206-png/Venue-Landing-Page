import { useState } from 'react'
import './Header.css'

export default function Header(props) {
    const [shownExplore, setShownExplore] = useState(false)

    function toggleExplore() {
        setShownExplore(prev => !prev)
    }

    function closeExplore() {
        setShownExplore(false)
    }

    return (
        <header>
            <div className="header-left">
                <a href="" ><img className="logo-main" src="/main/src/assets/logo-main.png" /></a>
                <h1 className="title-main">Cultural Art Space</h1>
            </div>
            <div className="header-right">
                {(shownExplore || props.media === 3) && <nav className="navbar-main">
                    <a className="nav-link" href="#" onClick={props.media !== 3 && closeExplore}>Home</a>
                    <a className="nav-link" href="#events-section" onClick={props.media !== 3 && closeExplore}>Events</a>
                    <a className="nav-link" href="#venue-section" onClick={props.media !== 3 && closeExplore}>Rent Venues</a>
                    <a className="nav-link" href="#class-section" onClick={props.media !== 3 && closeExplore}>Class / Workshop</a>
                    <a className="nav-link" href="#about-section" onClick={props.media !== 3 && closeExplore}>About Us</a>
                </nav>}
                {props.media !== 3 && <button onClick={toggleExplore} className="nav-list-btn">
                    <img className="menu-btn-icon" src="../src/assets/menu-icon.png" />
                </button>}
            </div>
        </header>
    )
}
