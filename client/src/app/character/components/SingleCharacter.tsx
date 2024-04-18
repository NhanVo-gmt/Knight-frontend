"use client"

import Link from 'next/link'
import React from 'react'

type SingleCharacterType = {
    id: number;
    name: string,
    imgUrl: string,
}

const SingleCharacterSection = ({id, name, imgUrl} : SingleCharacterType) => {
  return (
    <Link href={`/character/${id}`}>
        <div className='flex flex-col items-center cursor-pointer p-6 gap-y-10'>
            <img src={imgUrl} alt="" className='object-contain h-[200px] '/>
            <div className='text-4xl'>{name}</div>
        </div>
    </Link>
  )
}

export default SingleCharacterSection