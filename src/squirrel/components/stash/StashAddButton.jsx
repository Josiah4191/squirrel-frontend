import {useState} from "react";
import {STASH_LOCATIONS} from "../../data/stashLocations.js";
import {useNavigate} from "react-router-dom";
import empty from "../../assets/stash-empty.png";
import StashAddForm from "./StashAddForm.jsx";
import {createStash} from "../../services/squirrelApi.js";

export default function StashAddButton({squirrelId}) {

    const [isAdding, setIsAdding] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(STASH_LOCATIONS[0]);
    const navigate = useNavigate();

    async function handleAddStash() {
        await createStash(squirrelId, selectedLocation);

        setIsAdding(false);
        navigate(`/squirrels/${squirrelId}`, {replace: true});
    }

    return (
        isAdding ?
            <StashAddForm
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                handleAddStash={handleAddStash}
                setIsAdding={setIsAdding}/> :
            <button
                type="button"
                className="stash-card interactive-lift"
                onClick={() => setIsAdding(true)}>
                Add Stash
                <img src={empty} alt="" aria-hidden="true"/>
            </button>
    )
}