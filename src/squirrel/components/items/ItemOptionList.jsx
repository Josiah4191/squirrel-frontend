import "./ItemOptionList.css";
import ItemSelectedOption from "./ItemSelectedOption.jsx";
import ItemOption from "./ItemOption.jsx";
import ActionToggle from "../shared/ActionToggle.jsx";

export default function ItemOptionList({
                                           availableItems,
                                           selectedItem,
                                           setSelectedItem,
                                           selectedQuantity,
                                           setSelectedQuantity,
                                           setIsAdding,
                                           handleAddItem
                                       }) {
    return (
        <article className="item-card">
            <ul className="item-option-list">
                {
                    availableItems.length === 0 ? (
                            <p>All available items have already been added.</p>
                        ) :
                        availableItems.map((item) => {
                            const isSelected = item.id === selectedItem?.id;
                            return (
                                <li key={item.id}>
                                    {isSelected ?
                                    <ItemSelectedOption
                                        item={item}
                                        handleAddItem={handleAddItem}
                                        setSelectedItem={setSelectedItem}
                                        selectedQuantity={selectedQuantity}
                                        setSelectedQuantity={setSelectedQuantity}/> :
                                    <ItemOption
                                        item={item}
                                        setSelectedItem={setSelectedItem}/>}
                                </li>
                            )
                        })}
            </ul>
            <ActionToggle onClick={() => setIsAdding(false)}/>
        </article>
    )
}