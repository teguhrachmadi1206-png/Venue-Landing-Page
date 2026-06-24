import UnderConstruction from "../components/UnderConstrucion"
import HeroSection from "../components/HeroSection"
import VenueCard from "../components/VenueCard"
import { venueData } from "../data/venue"
import "../styles/VenuePages.css"

export default function Venue({ media }) {
    function test() {
        console.log(media)
    }

    return (
        <>
            <HeroSection page="venue" style="border" />
            <section>
                <div className="venue-card-container">
                    {venueData.map(venue => {
                        return (
                            <VenueCard key={venue.title} data={venue} media={media} />
                        )
                    })}
                </div>
                {/* <button onClick={test}>TEST</button> */}
            </section >
        </>
    )
}