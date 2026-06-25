import { useNavigate } from 'react-router-dom'

export default function VenueCard({ id, venue, media }) {
    const navigate = useNavigate()

    function goToDetail() {
        navigate(`/venues/venue/${venue.id}`)
    }

    return (
        <div className='venue-card'>
            <div className='venue-card-title'>
                <h3>{venue.title}</h3>
                <span>{venue.type}</span>
            </div>
            <div className='venue-card-content'>
                <img src={venue.imgSrc} alt={venue.imgAlt} />
                <div>
                    <h4>Use:</h4>
                    <p>{media === 1 ? venue.shortDesc : venue.desc}</p>
                </div>
                <div>
                    <h4>Capacity:</h4>
                    <p>{venue.capacity}</p>
                </div>
                {/* {media > 1 &&
                    <div>
                        <h4>Facilities:</h4>
                        <ul>
                            {venue.facilities.map((facility, index) => {
                                return (
                                    <li key={index}>{facility}</li>
                                )
                            })}
                        </ul>
                    </div>} */}
            </div>
            <button id={id} onClick={goToDetail}>Book Now</button>
        </div>
    )
}