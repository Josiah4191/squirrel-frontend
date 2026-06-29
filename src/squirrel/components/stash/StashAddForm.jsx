import {STASH_LOCATIONS} from "../../data/stashLocations.js";
import SelectionInput from "../shared/SelectionInput.jsx";
import ActionButton from "../shared/ActionButton.jsx";

export default function StashAddForm({selectedLocation, handleAddStash, setIsAdding, setSelectedLocation}) {
    return (
        <article className="stash-card stash-form">
            <p className="stash-card-label">Location</p>
            <SelectionInput ariaLabel="Stash location" options={STASH_LOCATIONS} selectedValue={selectedLocation} setSelectedValue={setSelectedLocation}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={handleAddStash}>Add</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => setIsAdding(false)}>Cancel</ActionButton>
            </div>
        </article>
    )
}