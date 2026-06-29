import "./ItemActionMenu.css";
import ActionToggle from "../shared/ActionToggle.jsx";
import ActionButton from "../shared/ActionButton.jsx";

export default function ItemActionMenu({currentItem, item, setIsEditing, setIsSelectingQuantity, setSelectedValue, handleRemoveItem}) {
    return (
        <article className="item-card item-action-menu">
            <div className="item-card-display">
                <img className="item-card-image" src={currentItem.image} alt={item.name}/>
                <p className="item-card-name">{item.name} x{item.quantity}</p>
            </div>
            <div className="action-buttons">
                <ActionButton variant="action-button-edit" onClick={() => {
                    setSelectedValue(item.quantity);
                    setIsSelectingQuantity(true);}}>Edit</ActionButton>
                <ActionButton variant="action-button-remove" onClick={handleRemoveItem}>Remove</ActionButton>
                <ActionToggle onClick={() => {
                    setSelectedValue("");
                    setIsSelectingQuantity(false);
                    setIsEditing(false);
                }}/>
            </div>
        </article>
    )
}