import { useNavigate } from 'react-router-dom'

export default function VenueCard({ data, media }) {
    return (
        <div className='venue-card'>
            <div className='venue-card-content'>
                <div>
                    <h3>{data.title}</h3>
                    <span>{data.type}</span>
                </div>
                <img src={data.imgSrc} alt={data.imgAlt} />
                <div>
                    <h4>Use:</h4>
                    <p>{media === 1 ? data.shortDesc : data.desc}</p>
                </div>
                <div>
                    <h4>Capacity:</h4>
                    <p>{data.capacity}</p>
                </div>
                {media > 1 &&
                    <div>
                        <h4>Facilities:</h4>
                        <ul>
                            {data.facilities.map((facility, index) => {
                                return (
                                    <li key={index}>{facility}</li>
                                )
                            })}
                        </ul>
                    </div>}
            </div>
            <button>Book Now</button>
        </div>
    )
}