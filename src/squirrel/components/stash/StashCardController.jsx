import {useNavigate} from "react-router-dom";
import {useState} from "react";
import StashCard from "./StashCard.jsx";
import StashActionMenu from "./StashActionMenu.jsx";
import StashRelocateForm from "./StashRelocateForm.jsx";
import {deleteStash, updateStashLocation} from "../../services/squirrelApi.js";

export default function StashCardController({id, location, squirrelId}) {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(location);
    const [isRelocating, setIsRelocating] = useState(false);

    async function handleDeleteStash() {
        if (!window.confirm("Delete this stash?")) {
            return;
        }
        await deleteStash(id);

        navigate(`/squirrels/${squirrelId}`, { replace: true });
        setSelectedLocation(location);
        setIsEditing(false);
    }

    async function handleChangeLocation() {
        await updateStashLocation(id, selectedLocation);

        navigate(`/squirrels/${squirrelId}`, { replace: true });
        setSelectedLocation(location);
        setIsRelocating(false);
        setIsEditing(false);
    }

    if (isEditing && isRelocating) {
        return (
            <StashRelocateForm
                handleChangeLocation={handleChangeLocation}
                setIsEditing={setIsEditing}
                selectedLocation={selectedLocation}
                setIsRelocating={setIsRelocating}
                setSelectedLocation={setSelectedLocation}/>
        );
    }

    if (isEditing) {
        return (
            <StashActionMenu
                location={location}
                handleDeleteStash={handleDeleteStash}
                setIsEditing={setIsEditing}
                setIsRelocating={setIsRelocating}
                setSelectedLocation={setSelectedLocation}/>
        )
    }

    return (
        <StashCard
            id={id}
            location={location}
            setIsEditing={setIsEditing}
            setSelectedLocation={setSelectedLocation}/>
    );
}