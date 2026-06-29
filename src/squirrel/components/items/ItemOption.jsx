import "./ItemOption.css";

export default function ItemOption({item, setSelectedItem}) {
    return (
        <button
            type="button"
            className="item-card-display item-option interactive-lift"
            onClick={() => setSelectedItem(item)}>
            <p>{item.name}</p>
            <img className="item-card-image" src={item.image} alt={item.name}/>
        </button>
    )
}