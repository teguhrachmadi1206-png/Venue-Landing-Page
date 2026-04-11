import "../styles/CallToAction.css"

export default function CallToAction({ text, isDisabled }) {
    return (
        <div className="cta-container">
            <button className="cta-btn" disabled={isDisabled}>{text}</button>
        </div>
    )
}