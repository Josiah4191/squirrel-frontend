import StashList from "../../components/stash/StashList.jsx";
import {useRouteLoaderData} from "react-router-dom";
import SquirrelPageLayout from "../../layouts/SquirrelPageLayout.jsx";

export default function StashPage() {
    const {stashes, squirrel} = useRouteLoaderData("squirrel-detail");

    return (
        <SquirrelPageLayout
            title={squirrel.name}
            subtitle="Stashes"
            description="Manage stashes"
            breadcrumb={[
            {label: "Squirrels", path: "/squirrels"},
            {label: squirrel.name}
        ]}>
            <StashList stashes={stashes} squirrelId={squirrel.id}/>
        </SquirrelPageLayout>
    );
}