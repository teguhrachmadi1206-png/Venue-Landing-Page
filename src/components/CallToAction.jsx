import "../styles/CallToAction.css"

export default function CallToAction({ text, isDisabled, handler }) {
    return (
        <div className="cta-container">
            <button className="cta-btn" disabled={isDisabled} onClick={handler}>{text}</button>
        </div>
    )
}