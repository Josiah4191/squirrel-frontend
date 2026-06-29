import "./ItemEditForm.css";
import ActionToggle from "../shared/ActionToggle.jsx";
import ActionButton from "../shared/ActionButton.jsx";

export default function ItemEditForm({currentItem, item, setIsEditing, setIsSelectingQuantity, selectedValue, setSelectedValue, handleUpdateItem}) {
    return (
        <article className="item-card item-edit-form">
            <div className="item-card-display">
                <img className="item-card-image" src={currentItem.image} alt={item.name}/>
                <p className="item-card-name">{item.name}</p>
            </div>
            <input
                className="quantity-input"
                aria-label={`Quantity for ${item.name}`}
                type="number"
                min="0"
                max="100"
                value={selectedValue ?? ""}
                onChange={(e) => setSelectedValue(e.target.value)}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={handleUpdateItem}>Confirm</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => {
                    setSelectedValue("");
                    setIsSelectingQuantity(false);
                }}>Cancel</ActionButton>
                <ActionToggle onClick={() => {
                    setSelectedValue("");
                    setIsSelectingQuantity(false);
                    setIsEditing(false);
                }}/>
            </div>
        </article>
    )
}