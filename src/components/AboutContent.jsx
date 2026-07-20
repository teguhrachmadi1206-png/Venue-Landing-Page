import { useLocation, useNavigate } from 'react-router-dom'
import "../styles/AboutContent.css"
import "../styles/CallToAction.css"

export default function AboutContent({ data }) {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <div className="about-content-row">
            <h3 className="about-content-headings">{data.headings}</h3>
            <div className={`about-item-content ${data.bodyObj?.length > 0 ? "object" : ""} ${data.listBtn?.length > 0 ? "button" : ""}`}>
                {data.imgSrc && <img className="about-item-img" src={data.imgSrc} alt={data.imgAlt} />}
                {data.body?.length && <div className="about-item-text-container">
                    {data.body.map((text, id) =>
                        <p key={id} className="about-item-text">{text}</p>)}
                </div>}
                {data.bodyList?.length && <ul className="about-item-list">
                    {data.bodyList.map((list, id) => <li key={id} className="about-item-text">{list}</li>)}
                </ul>}
                {data.bodyObj?.length && data.bodyObj.map((item, id) =>
                    <div key={id} className="about-item-obj">
                        {item.icon && <span className="about-item-obj-span">{item.icon}</span>}
                        <div className="about-item-subcontent">
                            <h4 className="about-subcontent-heading">{item.subHeading}</h4>
                            <p className="about-subcontent-text">{item.subBody}</p>
                        </div>
                    </div>
                )}
                {data.listBtn?.length &&
                    <div className="about-cta-container">
                        {data.listBtn.map((item, id) =>
                            <button key={id} className="cta-btn" onClick={() => navigate(item.link)}>{item.btnText}</button>
                        )}
                    </div>}

            </div>
        </div>
    )
}