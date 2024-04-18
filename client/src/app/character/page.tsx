import { characters } from '@/data/CharacterPageData'
import React from 'react'
import SingleCharacterSection from './components/SingleCharacter'

const CharacterPage = () => {
  return (
    <div className='relative min-h-screen bg-secondary-dark-hover'>
        <div className='p-20 px-40 '>
            <div className='text-center text-4xl pb-10 font-bold'>Forbidden Land</div>
            <div className='grid gap-10 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
                {characters.map((item) => (
                    <SingleCharacterSection key={item.id} id={item.id} name={item.name} imgUrl={item.imgUrl}/> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default CharacterPage