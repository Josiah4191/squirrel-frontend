import {SQUIRREL_API_BASE_URL} from "../../../config/api.js";

export async function loadSquirrels() {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/squirrels`);
    const data = await handleSquirrelResponse(response, "Failed to load squirrels");

    return data.content;
}

export async function loadStashes({params}) {
    const squirrelId = params.id;

    const stashesResponse = await fetch(`${SQUIRREL_API_BASE_URL}/squirrels/${squirrelId}/stashes`);
    const squirrelResponse = await fetch(`${SQUIRREL_API_BASE_URL}/squirrels/${squirrelId}`);

    const stashes = await handleSquirrelResponse(stashesResponse, "Failed to load stashes");
    const squirrel = await handleSquirrelResponse(squirrelResponse, "Failed to load squirrel.");

    return {
        stashes: stashes.content,
        squirrel,
    }
}

export async function loadStashItems({params}) {
    const stashId = params.id;
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/stashes/${stashId}/items`);

    return handleSquirrelResponse(response, "Failed to load stash items");
}

export async function deleteStashLine(stashLineId) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/stash_lines/${stashLineId}`, {
        method: "DELETE",
    });

    return handleSquirrelResponse(response, "Failed to delete stash item.");
}

export async function updateStashLineQuantity(stashLineId, quantity) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/stash_lines/${stashLineId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({quantity}),
    });

    return handleSquirrelResponse(response, "Failed to update stash item.");
}

export async function addItemToStash(stashId, itemId, quantity) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/stashes/${stashId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            itemId,
            quantity,
        }),
    });

    return handleSquirrelResponse(response, "Failed to add item.");
}

export async function createSquirrel(name) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/squirrels`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
        }),
    });

    return handleSquirrelResponse(response, "Failed to create squirrel.");
}

export async function deleteSquirrel(squirrelId) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/squirrels/${squirrelId}`, {
        method: "DELETE",
    });

    return handleSquirrelResponse(response, "Failed to delete squirrel.");
}

export async function updateSquirrelName(squirrelId, name) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/squirrels/${squirrelId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name}),
    });

    return handleSquirrelResponse(response, "Failed to rename squirrel.");
}

export async function createStash(squirrelId, location) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/squirrels/${squirrelId}/stashes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            location,
        }),
    });

    return handleSquirrelResponse(response, "Failed to create stash.");
}

export async function deleteStash(stashId) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/stashes/${stashId}`, {
        method: "DELETE",
    });

    return handleSquirrelResponse(response, "Failed to delete stash.");
}

export async function updateStashLocation(stashId, location) {
    const response = await fetch(`${SQUIRREL_API_BASE_URL}/stashes/${stashId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({location}),
    });

    return handleSquirrelResponse(response, "Failed to update stash location.");
}




async function handleSquirrelResponse(response, fallbackMessage) {
    if (!response.ok) {
        throw new Error(fallbackMessage);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}