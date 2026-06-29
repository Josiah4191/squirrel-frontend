import './ItemCard.css';
import {ITEMS} from "../../data/itemData.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ItemActionMenu from "./ItemActionMenu.jsx";
import ItemCard from "./ItemCard.jsx";
import ItemEditForm from "./ItemEditForm.jsx";
import {deleteStashLine, updateStashLineQuantity} from "../../services/squirrelApi.js"

export default function ItemCardController({stashId, item}) {

    const [isEditing, setIsEditing] = useState(false);
    const [isSelectingQuantity, setIsSelectingQuantity] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate();
    const currentItem = ITEMS.find(i => i.name === item.name);

    async function handleRemoveItem() {
        if (!window.confirm("Delete this item?")) {
            return;
        }

        await deleteStashLine(item.stashLineId);

        navigate(`/stashes/${stashId}`, {replace: true});
        setIsEditing(false);
        setSelectedValue(null);
    }

    async function handleUpdateItem() {
        await updateStashLineQuantity(item.stashLineId, selectedValue);

        navigate(`/stashes/${stashId}`, {replace: true});
        setIsEditing(false);
    }

    if (isEditing && isSelectingQuantity) {
        return (
            <ItemEditForm
                currentItem={currentItem}
                item={item}
                setIsEditing={setIsEditing}
                setIsSelectingQuantity={setIsSelectingQuantity}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                handleUpdateItem={handleUpdateItem}/>
        );
    }

    if (isEditing) {
        return (
            <ItemActionMenu
                currentItem={currentItem}
                item={item}
                setIsEditing={setIsEditing}
                setIsSelectingQuantity={setIsSelectingQuantity}
                setSelectedValue={setSelectedValue}
                handleRemoveItem={handleRemoveItem}/>
        );
    }

    return (
        <ItemCard
            currentItem={currentItem}
            item={item}
            setIsEditing={setIsEditing}/>
    )
}