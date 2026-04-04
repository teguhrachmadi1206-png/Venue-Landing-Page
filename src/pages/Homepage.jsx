import HeroSection from '../components/HeroSection'
import UpcomingEvents from '../components/UpcomingEvents'
import RentVenues from '../components/RentVenue'
import ArtClass from '../components/ArtClass'
import AboutUs from '../components/AboutUs'

function Homepage({ media }) {
    return (
        <>
            <HeroSection page="home" style="border" />
            <UpcomingEvents media={media} />
            <RentVenues media={media} />
            <ArtClass media={media} />
            <AboutUs />
        </>
    )
}

export default Homepage