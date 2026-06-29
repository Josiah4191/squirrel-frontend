import "./StashCard.css";
import full from "../../assets/stash-full.png";
import ActionToggle from "../shared/ActionToggle.jsx";
import {useNavigate} from "react-router-dom";

export default function StashCard ({id, location, setIsEditing}) {
    const navigate = useNavigate();
    return (
        <article className="stash-card interactive-lift" onClick={() => navigate(`/stashes/${id}`)}>
            <p className="stash-card-location">{location}</p>
            <img src={full} alt="" aria-hidden="true"/>
            <ActionToggle onClick={() => {
                setIsEditing(true);
            }}/>
        </article>
    )
}