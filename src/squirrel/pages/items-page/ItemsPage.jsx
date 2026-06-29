import {useRouteLoaderData} from "react-router-dom";
import SquirrelPageLayout from "../../layouts/SquirrelPageLayout.jsx";
import ItemsList from "../../components/items/ItemsList.jsx";

export default function ItemsPage() {
    const data = useRouteLoaderData("stash-detail");
    const {stash, items} = data;
    const {id: stashId, location, squirrelResponseDto} = stash;
    const {id: squirrelId, name: squirrel} = squirrelResponseDto;

    return (
        <SquirrelPageLayout
            title={squirrel}
            subtitle="Items"
            description={location}
            breadcrumb={[
            {label: "Squirrels", path: "/squirrels"},
            {label: squirrel, path: `/squirrels/${squirrelId}`},
            {label: location},
        ]}>
            <ItemsList items={items.content} stashId={stashId}/>
        </SquirrelPageLayout>
    )
}