// /character/[id].tsx

import { characters } from "@/data/CharacterPageData";

type CharacterPageType = {
  id: number;
  params: any;
};

export default function CharacterPage({ params }: CharacterPageType) {
  const character = characters.find((item) => item.id == params.id);

  return (
    <div className="bg-secondary-dark-hover">
        <div className='flex flex-row p-20 gap-x-10'>
        <div className="basis-1/2">
            <div className="text-5xl my-10 font-bold">{character?.name}</div>
            <div className="text-2xl">{character?.description}</div>
        </div>
        <div className="flex flex-grow basis-1/2 ">
            <img src={character?.imgUrl} alt={character?.name} className="h-[600px]"/>
            <div className="absolute h-0 overflow-hidden bg-black opacity-0 bottom-0 ">
            <div className="relative mt-10 opacity-100">
                <div className="text-bold text-6xl text-center">
                {character?.name}
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}
