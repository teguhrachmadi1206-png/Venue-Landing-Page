import HeroSection from "../components/HeroSection"
import VenueCard from "../components/VenueCard"
import Breadcrumbs from "../components/Breadcrumbs";
import { venueData } from "../data/venue"
import "../styles/VenuePages.css"

export default function Venue({ media }) {
    const pagePaths = [
        { label: "Home", href: "/" },
        { label: "Venues" }
    ];

    return (
        <>
            <Breadcrumbs paths={pagePaths} />
            <HeroSection page="venue" style="border" />
            <section>
                <div className="venue-card-container">
                    {venueData.map(venue => {
                        return (
                            <VenueCard key={venue.title} venue={venue} media={media} />
                        )
                    })}
                </div>
            </section >
        </>
    )
}