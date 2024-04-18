// /character/[id].tsx

type CharacterPageType = {
    id: number
    name: string,
    params: any
}

export default function CharacterPage({params} : CharacterPageType) {

    return (
        <div>
            <h1>Character Details</h1>
            <p>Character ID: {params.id}</p>
            {/* Render other details of the character based on the ID */}
        </div>
    );
}