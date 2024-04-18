import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

type MainHeaderButtonType = {
    Icon?: IconType,
    name: string
    subUrl?: string,
}

const MainHeaderButton = ({Icon, name, subUrl} : MainHeaderButtonType) => {
  return (
    <button>
        <Link href={`/${subUrl ? subUrl.toLowerCase() : name.toLowerCase()}`}>
            {Icon && <Icon></Icon>}
            <h2 className='text-xl text-white font-semibold'>{name}</h2>
        </Link>
    </button>
  )
}

export default MainHeaderButton