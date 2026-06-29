import SquirrelCardController from "./SquirrelCardController.jsx";
import SquirrelAddButton from "./SquirrelAddButton.jsx";

export default function SquirrelList({squirrels, editingSquirrelId, setEditingSquirrelId}) {
    return (
        <ul className="card-list">
            {squirrels.map(squirrel =>
                <li key={squirrel.id}>
                    <SquirrelCardController
                        id={squirrel.id}
                        editingSquirrelId={editingSquirrelId}
                        setEditingSquirrelId={setEditingSquirrelId}
                        name={squirrel.name}/>
                </li>
            )}
            <li>
                <SquirrelAddButton/>
            </li>
        </ul>
    );
}