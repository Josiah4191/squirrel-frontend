import SquirrelList from "../../components/squirrels/SquirrelList.jsx";
import {useRouteLoaderData} from "react-router-dom";
import {useState} from "react";
import SquirrelPageLayout from "../../layouts/SquirrelPageLayout.jsx";

export default function SquirrelPage() {
    const [editingSquirrelId, setEditingSquirrelId] = useState(null);
    const squirrels = useRouteLoaderData("squirrels-root");

    return (
        <SquirrelPageLayout
            title="Squirrel Tracker"
            subtitle="Squirrels"
            description="Manage squirrels">
            <SquirrelList
                editingSquirrelId={editingSquirrelId}
                setEditingSquirrelId={setEditingSquirrelId}
                squirrels={squirrels}/>
        </SquirrelPageLayout>
    );
}
