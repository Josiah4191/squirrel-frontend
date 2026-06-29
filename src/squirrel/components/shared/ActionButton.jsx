import "./ActionButton.css";

export default function ActionButton({type = "button", variant, onClick, children}) {
    return (
        <button
            type={type}
            className={`action-button ${variant}`}
            onClick={onClick}>
            {children}
        </button>
    )
}