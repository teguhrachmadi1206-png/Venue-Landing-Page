import "../styles/CustomModal.css"
import { FocusTrap } from "focus-trap-react"

export default function CustomModal({ content }) {


    return (
        <FocusTrap>
            <div className="modal">
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="modal-title">{content.title}</h2>
                        <p className="modal-text">{content.message}</p>
                        <div className="modal-actions">
                            {content.noBtn}
                            {content.yesBtn}
                        </div>
                    </div>
                </div>
            </div >
        </FocusTrap>
    )
}

