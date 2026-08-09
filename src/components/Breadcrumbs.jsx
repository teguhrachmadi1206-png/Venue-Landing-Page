import { useNavigate } from 'react-router-dom'
import "../styles/Breadcrumbs.css"

export default function Breadcrumbs({ paths }) {
    const navigate = useNavigate()
    function goTo(path) {
        navigate(path)
    }

    return (
        <nav className="breadcrumbs">
            {paths.map((item, id) =>
                <div key={id} className="breadcrumb-item">
                    {item.href
                        ? <span className="breadcrumb-label link" onClick={() => goTo(item.href)}>{item.label}</span>
                        : <span className="breadcrumb-label here">{item.label}</span>}
                    {id < paths.length - 1 && <span className="breadcrumb-label-separator">{'>'}</span>}
                </div>)}
        </nav>
    )
}
