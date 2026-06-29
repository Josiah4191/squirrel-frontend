import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {SQUIRREL_NAMES} from "../../data/squirrelNames.js";
import SquirrelAddForm from "./SquirrelAddForm.jsx";
import {createSquirrel} from "../../services/squirrelApi.js";

export default function SquirrelAddButton() {

    const [isAdding, setIsAdding] = useState(false);
    const [selectedName, setSelectedName] = useState(SQUIRREL_NAMES[0]);
    const navigate = useNavigate();

    async function handleAddSquirrel() {
        await createSquirrel(selectedName);

        setIsAdding(false);
        navigate(`/squirrels`, {replace: true});
    }

    return (
        isAdding ?
            <SquirrelAddForm
                handleAddSquirrel={handleAddSquirrel}
                setIsAdding={setIsAdding}
                selectedName={selectedName}
                setSelectedName={setSelectedName}/> :
            <button
                type="button"
                className="squirrel-card squirrel-card-name interactive-lift"
                onClick={() => setIsAdding(true)}>
                Add Squirrel +
            </button>
    )
}