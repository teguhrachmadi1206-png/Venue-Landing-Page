import { useLocation, useNavigate } from 'react-router-dom'
import "../styles/AboutContent.css"
import "../styles/CallToAction.css"

export default function AboutContent({ media, data }) {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    function TextImageContent({ item }) {
        return (
            <div className="about-item-content">
                <img className="about-item-img" src={item.imgSrc} alt={item.imgAlt} />
                {item.body?.length && <div className="about-item-text-container">
                    {item.body.map((text, id) =>
                        <p key={id} className="about-item-text">{text}</p>)}
                </div>}
            </div>
        )
    }

    function TextContent({ item }) {
        return (
            <div className="about-item-content">
                {item.body?.length && <div className="about-item-text-container">
                    {item.body.map((text, id) =>
                        <p key={id} className="about-item-text">{text}</p>)}
                </div>}
            </div>
        )
    }

    function TextListContent({ item }) {
        return (
            <div className="about-item-content">
                <ul className="about-item-list">
                    {data.bodyList.map((list, id) => <li key={id} className="about-item-text">{list}</li>)}
                </ul>
            </div>
        )
    }

    function CardContent({ item }) {
        return (
            <div className="about-item-content object">
                {item.bodyObj.map((object, id) => {
                    return (
                        <div key={id} className="about-item-obj">
                            <div className="about-item-subcontent">
                                <h4 className="about-subcontent-heading">{object.subHeading}</h4>
                                <p className="about-subcontent-text">{object.subBody}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    function TimelineContent({ media, item }) {
        return (
            <>
                {item.bodyObj.map((object, id) => {
                    return (
                        <div className="about-item-content timeline" key={id}>
                            <div className="timeline-content">
                                {media !== 1 && <img className={`${id % 2 !== 0 ? "timeline-img-reverse" : "timeline-img"}`} src={object.imgSrc} alt={object.imgAlt} />}
                                <div className="about-item-obj timeline">
                                    <span className="about-item-obj-span timeline">{object.icon}</span>
                                    <div className="about-item-subcontent">
                                        <h4 className="about-subcontent-heading">{object.subHeading}</h4>
                                        <p className="about-subcontent-text">{object.subBody}</p>
                                    </div>
                                </div>
                            </div>
                            <span className="timeline-arrow"></span>
                        </div>
                    )
                })
                }
            </>
        )
    }

    function IconCardContent({ item }) {
        return (
            <div className="about-item-content object">
                {item.bodyObj.map((object, id) => {
                    return (
                        <div key={id} className={`about-item-obj ${item.style}`}>
                            <span className="about-item-obj-span timeline">{object.icon}</span>
                            <div className="about-item-subcontent">
                                <h4 className="about-subcontent-heading">{object.subHeading}</h4>
                                <p className="about-subcontent-text">{object.subBody}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    function ButtonContent({ item }) {
        return (
            <div className="about-item-content button">
                {item.body?.length && <div className="about-item-text-container">
                    {item.body.map((text, id) =>
                        <p key={id} className="about-item-text">{text}</p>)}
                </div>}
                <div className="about-cta-container">
                    {data.listBtn.map((object, id) =>
                        <button key={id} className="cta-btn" onClick={() => navigate(object.link)}>{object.btnText}</button>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="about-content-row">
            <h3 className={`about-content-headings ${data.style}`}>{data.headings}</h3>
            {data.style === "text-image" && <TextImageContent item={data} />}
            {data.style === "text" && <TextContent item={data} />}
            {data.style === "text-list" && <TextListContent item={data} />}
            {data.style === "card" && <CardContent item={data} />}
            {data.style === "timeline" && <TimelineContent media={media} item={data} />}
            {data.style === "icon-card" && <IconCardContent item={data} />}
            {data.style === "buttons" && <ButtonContent item={data} />}
        </div>
    )
}