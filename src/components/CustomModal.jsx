import "../styles/CustomModal.css"

export default function CustomModal({ onConfirm, onClose, isOpen }) {


    return (
        <dialog className="modal">
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2 className="modal-title">Confirmation</h2>
                    <p className="modal-text">Are You Sure?</p>
                    <div className="modal-actions">
                        <button className="modal-btn" onClick={onConfirm}>Yes</button>
                        <button className="modal-btn" onClick={onClose}>No</button>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

