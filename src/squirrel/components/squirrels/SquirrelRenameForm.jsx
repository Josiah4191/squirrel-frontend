import "./SquirrelRenameForm.css";
import {SQUIRREL_NAMES} from "../../data/squirrelNames.js";
import ActionToggle from "../shared/ActionToggle.jsx";
import ActionButton from "../shared/ActionButton.jsx";
import SelectionInput from "../shared/SelectionInput.jsx";

export default function SquirrelRenameForm({
                                               handleRenameSquirrel,
                                               setEditingSquirrelId,
                                               editedName,
                                               setEditedName,
                                               setIsRenaming
                                           }) {
    return (
        <article className="squirrel-card squirrel-form">
            <p className="squirrel-card-label">Rename squirrel</p>

            <SelectionInput ariaLabel="Squirrel name" options={SQUIRREL_NAMES} selectedValue={editedName}
                            setSelectedValue={setEditedName}/>

            <div className="action-buttons">

                <ActionButton variant="action-button-confirm" onClick={handleRenameSquirrel}>
                    Confirm
                </ActionButton>

                <ActionButton variant="action-button-cancel" onClick={() => {
                    setIsRenaming(false);
                    setEditedName("")
                }}>
                    Cancel
                </ActionButton>
            </div>

            <ActionToggle onClick={() => {
                setEditedName("");
                setIsRenaming(false);
                setEditingSquirrelId(null);
            }}/>
        </article>
    )
}