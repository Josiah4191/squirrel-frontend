import {useNavigate} from "react-router-dom";
import {useState} from "react";
import SquirrelCard from "./SquirrelCard.jsx";
import SquirrelActionMenu from "./SquirrelActionMenu.jsx";
import SquirrelRenameForm from "./SquirrelRenameForm.jsx";
import {deleteSquirrel, updateSquirrelName} from "../../services/squirrelApi.js";

export default function SquirrelCardController({id, name, editingSquirrelId, setEditingSquirrelId}) {
    const navigate = useNavigate();
    const isEditing = editingSquirrelId === id;
    const [editedName, setEditedName] = useState("");
    const [isRenaming, setIsRenaming] = useState(false);

    async function handleDeleteSquirrel() {
        if (!window.confirm("Delete this squirrel?")) {
            return;
        }

        await deleteSquirrel(id);

        navigate(`/squirrels`, { replace: true });
    }

    async function handleRenameSquirrel() {
        await updateSquirrelName(id, editedName);

        navigate(`/squirrels`, { replace: true });
        setEditedName("");
        setIsRenaming(false);
        setEditingSquirrelId(null);
    }

    if (isEditing && isRenaming) {
        return (
            <SquirrelRenameForm
                handleRenameSquirrel={handleRenameSquirrel}
                setEditingSquirrelId={setEditingSquirrelId}
                editedName={editedName}
                setIsRenaming={setIsRenaming}
                setEditedName={setEditedName}/>
        );
    }

    if (isEditing) {
        return (
            <SquirrelActionMenu
                name={name}
                handleDeleteSquirrel={handleDeleteSquirrel}
                setEditingSquirrelId={setEditingSquirrelId}
                setIsRenaming={setIsRenaming}
                setEditedName={setEditedName}/>
        );
    }

    return (
        <SquirrelCard
            id={id}
            name={name}
            setEditingSquirrelId={setEditingSquirrelId}/>
    );
}