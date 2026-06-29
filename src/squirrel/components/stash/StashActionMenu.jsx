import "./StashActionMenu.css";
import ActionToggle from "../shared/ActionToggle.jsx";
import ActionButton from "../shared/ActionButton.jsx";

export default function StashActionMenu({location, handleDeleteStash, setIsEditing, setSelectedLocation, setIsRelocating}) {
    return (
        <article className="stash-card stash-action-menu">
            <p className="stash-card-label">Actions</p>
            <ActionButton variant="action-button-edit" onClick={() => {
                setIsRelocating(true);
                setSelectedLocation(location)
            }}>Edit</ActionButton>
            <ActionButton variant="action-button-delete" onClick={() => {
                setIsRelocating(false);
                handleDeleteStash();}}>
                Delete
            </ActionButton>
            <ActionToggle onClick={() => {
                setIsRelocating(false);
                setIsEditing(false);
            }}/>
        </article>
    )
}