import "./SquirrelActionMenu.css";
import ActionToggle from "../shared/ActionToggle.jsx";
import ActionButton from "../shared/ActionButton.jsx";

export default function SquirrelActionMenu({name, handleDeleteSquirrel, setEditingSquirrelId, setEditedName, setIsRenaming}) {
    return (
        <article className="squirrel-card squirrel-action-menu">

            <p className="squirrel-card-label">Actions</p>

            <ActionButton variant="action-button-edit" onClick={() => {
                setIsRenaming(true);
                setEditedName(name)}}>
                Edit
            </ActionButton>

            <ActionButton variant="action-button-delete" onClick={handleDeleteSquirrel}>
                Delete
            </ActionButton>

            <ActionToggle onClick={() => {
                setEditedName("");
                setIsRenaming(false);
                setEditingSquirrelId(null);
            }}/>
        </article>
    )
}