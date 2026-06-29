import "./StashRelocateForm.css";
import {STASH_LOCATIONS} from "../../data/stashLocations.js";
import ActionToggle from "../shared/ActionToggle.jsx";
import SelectionInput from "../shared/SelectionInput.jsx";
import ActionButton from "../shared/ActionButton.jsx";

export default function StashRelocateForm({
                                              handleChangeLocation,
                                              setIsEditing,
                                              selectedLocation,
                                              setSelectedLocation,
                                              setIsRelocating
                                          }) {
    return (
        <article className="stash-card stash-form">
            <p className="stash-card-label">Change Location</p>
            <SelectionInput ariaLabel="Stash location" options={STASH_LOCATIONS} selectedValue={selectedLocation}
                            setSelectedValue={setSelectedLocation}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={() => {
                    handleChangeLocation();
                }}>
                    Confirm
                </ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => {
                    setIsRelocating(false);
                }}>
                    Cancel
                </ActionButton>
            </div>
            <ActionToggle onClick={() => {
                setIsRelocating(false);
                setIsEditing(false);
            }}/>
        </article>
    )
}