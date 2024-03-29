import React from 'react'
import { IconType } from 'react-icons'

type MainHeaderButtonType = {
    Icon?: IconType,
    name: string
}

const MainHeaderButton = ({Icon, name} : MainHeaderButtonType) => {
  return (
    <button>
        {Icon && <Icon></Icon>}
        <h2 className='text-xl text-white font-semibold'>{name}</h2>
    </button>
  )
}

export default MainHeaderButton