import { StrictMode } from 'react'
import HeroSection from '../components/HeroSection'
import UpcomingEvents from '../components/UpcomingEvents'
import RentVenues from '../components/RentVenue'
import ArtClass from '../components/ArtClass'
import AboutUs from '../components/AboutUs'
import Breadcrumbs from "../components/Breadcrumbs";

function Homepage({ media }) {
    const pagePaths = [
        { label: "Home" },
    ];

    return (
        <>
            <Breadcrumbs paths={pagePaths} />
            <HeroSection page="home" style="border" />
            <StrictMode>
                <UpcomingEvents media={media} />
            </StrictMode>
            <RentVenues media={media} />
            <ArtClass page="home" media={media} />
            <AboutUs />
        </>
    )
}

export default Homepage