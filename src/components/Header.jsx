import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import logoMain from '../assets/logo-main.webp'

export default function Header({ media }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    function toggleExplore() {
        setIsMobileMenuOpen(prev => !prev)
    }

    function closeExplore() {
        setIsMobileMenuOpen(false)
    }

    function navTo(page) {
        if (media !== 3) {
            closeExplore()
        }
        navigate(page)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])


    return (
        <>
            <header className="header">
                <div className="header-brand">
                    <img className="logo-main" src={logoMain} onClick={() => navTo('/')} />
                    <h1 className="title-main">Cultural Art Space</h1>
                </div>
                <div className="header-navbar">
                    {(isMobileMenuOpen || media === 3) && <nav className="navbar-main">
                        <a className="nav-link" onClick={() => navTo('/')}>Home</a>
                        <a className="nav-link" onClick={() => navTo('/events')}>Events</a>
                        <a className="nav-link" onClick={() => navTo('/venues')}>Rent Venues</a>
                        <a className="nav-link" onClick={() => navTo('/classes')}>Class / Workshop</a>
                        <a className="nav-link" onClick={() => navTo('/about')}>About Us</a>
                    </nav>}
                    {media !== 3 && <button onClick={toggleExplore} className="nav-list-btn">
                        <div className="menu-btn-line"></div>
                        <div className="menu-btn-line"></div>
                        <div className="menu-btn-line"></div>
                    </button>}
                </div>
            </header>
        </>
    )
}
