import { Link } from "react-router-dom"
import "../styles/UnderConstruction.css"

export default function NotFound() {
    return (
        <div className="message-div">
            <h2 className="message-header">Page Not Found</h2>
            <p className="message-text">Go back to <Link to="/"><span className="link-text">Homepage</span></Link></p>
        </div>
    )
}