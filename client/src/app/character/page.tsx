import { characters } from '@/data/CharacterPageData'
import React from 'react'
import SingleCharacterSection from './components/SingleCharacter'

const CharacterPage = () => {
  return (
    <div className='relative min-h-screen bg-secondary-dark-hover'>
        <div className='p-5 px-20'>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))]'>
                {characters.map((item) => (
                    <SingleCharacterSection key={item.id} name={item.name} imgUrl={item.imgUrl} /> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default CharacterPage