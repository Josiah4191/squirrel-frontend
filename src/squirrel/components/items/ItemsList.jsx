import "./ItemsList.css"
import ItemAddButton from "./ItemAddButton.jsx";
import ItemCardController from "./ItemCardController.jsx";

export default function ItemsList({items, stashId}) {
    return (
        <ul className="card-list card-list-items">
            <li>
                <ItemAddButton items={items} stashId={stashId}/>
            </li>
            {items.map(item =>
                <li key={item.id}>
                    <ItemCardController stashId={stashId} item={item}/>
                </li>)}
        </ul>
    )
}