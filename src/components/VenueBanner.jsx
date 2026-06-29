
export default function VenueBanner({ venue }) {
    return (
        <div className="venue-banner">
            <img className="venue-banner-img" src={venue.imgSrc} alt={venue.imgAlt} />
            <div className="venue-banner-info">
                <div className="venue-banner-info-title">
                    <h2 className="venue-banner-title">{venue.title}</h2>
                    <p className="venue-banner-type">{venue.type}</p>
                </div>
                <div className="venue-banner-content">
                    <div className="venue-banner-row">
                        <h4 className="venue-banner-row-title">Capacity:</h4>
                        <p className="venue-row-content">{venue.capacity}</p>
                    </div>
                    <div className="venue-banner-row">
                        <h4 className="venue-banner-row-title">Facilities:</h4>
                        <ul className="venue-row-content">
                            {venue.facilities?.map((facility, index) => {
                                return (
                                    <li key={index}>{facility}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
