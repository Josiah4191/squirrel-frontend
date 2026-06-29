import "./ItemSelectedOption.css";
import ActionButton from "../shared/ActionButton.jsx";

export default function ItemSelectedOption({item, handleAddItem, setSelectedItem, selectedQuantity, setSelectedQuantity}) {
    return (
        <article className="item-card-display item-option item-option-selected">
            <p>{item.name}</p>
            <input
                className="quantity-input"
                aria-label={`Quantity for ${item.name}`}
                type="number"
                min="0"
                value={selectedQuantity ?? ""}
                onChange={(e) => setSelectedQuantity(e.target.value)}/>
            <div className="action-buttons action-buttons-mobile">
                <ActionButton variant="action-button-confirm" onClick={handleAddItem}>Add</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => {
                    setSelectedItem("");
                }}>Cancel</ActionButton>
            </div>
        </article>
    )
}