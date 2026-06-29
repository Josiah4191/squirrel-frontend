import "./ItemAddButton.css";
import {ITEMS} from "../../data/itemData.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ItemOptionList from "./ItemOptionList.jsx";
import {addItemToStash} from "../../services/squirrelApi.js";

export default function ItemAddButton({items, stashId}) {

    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const currentItemIds = items.map(item => item.id);
    const availableItems = ITEMS.filter(item => !currentItemIds.includes(item.id));

    async function handleAddItem() {

        if (!selectedItem) {
            return;
        }

        await addItemToStash(stashId, selectedItem.id, selectedQuantity);

        navigate(`/stashes/${stashId}`, {replace: true});
        setIsAdding(false);
        setSelectedItem(null);
        setSelectedQuantity(1);
    }

    return (
        isAdding ?
            <ItemOptionList
                availableItems={availableItems}
                selectedItem={selectedItem}
                selectedQuantity={selectedQuantity}
                setSelectedQuantity={setSelectedQuantity}
                handleAddItem={handleAddItem}
                setIsAdding={setIsAdding}
                setSelectedItem={setSelectedItem}/> :
            <button
                type="button"
                className="item-card item-add-button interactive-lift"
                onClick={() => setIsAdding(true)}>
                Add Item
            </button>

    )
}