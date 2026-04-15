import { formatDate } from "../function/FormatDate.js"

export default function Selector({ title, items, selected, click }) {
    return (
        <div className="sub-selector">
            <h3 className="selector-title">{title}</h3>
            <div className="selector-btn-container">
                {items?.map(item => <button
                    key={item.id}
                    className={`selector-btn ${item.id === selected && "selected"}`}
                    onClick={() => click(item.id)}
                >{formatDate(item.date)}</button>)}
            </div>
        </div>
    )
}