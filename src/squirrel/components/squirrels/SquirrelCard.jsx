import "./SquirrelCard.css";
import ActionToggle from "../shared/ActionToggle.jsx";
import {useNavigate} from "react-router-dom";

export default function SquirrelCard({setEditingSquirrelId, id, name}) {
    const navigate = useNavigate();

    return (
            <article className="squirrel-card interactive-lift" onClick={() => navigate(`/squirrels/${id}`)}>
                <p className="squirrel-card-name">{name}</p>
                <ActionToggle onClick={() => setEditingSquirrelId(id)}/>
            </article>
    )
}