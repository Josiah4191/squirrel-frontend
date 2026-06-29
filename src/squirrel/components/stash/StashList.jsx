import StashCardController from "./StashCardController.jsx";
import StashAddButton from "./StashAddButton.jsx";

export default function StashList({stashes, squirrelId}) {
    return (
        <div className="card-list">
            {stashes.map(stash => <StashCardController id={stash.id} squirrelId={squirrelId} location={stash.location}/>)}
            <StashAddButton squirrelId={squirrelId}/>
        </div>
    );
}