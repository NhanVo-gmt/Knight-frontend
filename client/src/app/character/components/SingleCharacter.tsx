import React from 'react'

type SingleCharacterType = {
    name: string,
    imgUrl: string,
}

const SingleCharacterSection = ({name, imgUrl} : SingleCharacterType) => {
  return (
    <div className='flex flex-col items-center'>
        <img src={imgUrl} alt="" className='w-[200px] h-[400px] object-contain'/>
        <div className='text-5xl'>{name}</div>
    </div>
  )
}

export default SingleCharacterSection