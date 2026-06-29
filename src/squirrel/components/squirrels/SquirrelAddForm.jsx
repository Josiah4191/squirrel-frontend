import {SQUIRREL_NAMES} from "../../data/squirrelNames.js";
import ActionButton from "../shared/ActionButton.jsx";
import SelectionInput from "../shared/SelectionInput.jsx";

export default function SquirrelAddForm({handleAddSquirrel, setIsAdding, selectedName, setSelectedName}) {
    return (
        <article className="squirrel-card squirrel-form">
            <p className="squirrel-card-label">Select Squirrel</p>
            <SelectionInput ariaLabel="Squirrel name" options={SQUIRREL_NAMES} selectedValue={selectedName} setSelectedValue={setSelectedName}/>
            <div className="action-buttons">
                <ActionButton variant="action-button-confirm" onClick={handleAddSquirrel}>Add</ActionButton>
                <ActionButton variant="action-button-cancel" onClick={() => setIsAdding(false)}>Cancel</ActionButton>
            </div>
        </article>
    )
}