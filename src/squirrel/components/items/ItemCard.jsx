import ActionToggle from "../shared/ActionToggle.jsx";
import "./ItemCard.css";

export default function ItemCard({currentItem, item, setIsEditing}) {
    return (
        <article className="item-card">
            <div className="item-card-display">
                <img className="item-card-image" src={currentItem.image} alt={item.name}/>
                <p className="item-card-name">{item.name} x{item.quantity}</p>
            </div>

            <p>{item.description}</p>

            <ActionToggle onClick={() => setIsEditing(true)}/>
        </article>
    )
}