"use client"

import MainHeaderButton from '@/components/MainHeaderButton';
import WhiteReactIcon from '@/utils/WhiteReactIcon';
import React from 'react'
import { LuGamepad2 } from "react-icons/lu";

const MainHeader = () => {
  return (
    <div className='w-full bg-secondary-dark py-6 px-4 flex flex-row'>
      <div className='flex items-center justify-start mx-4'>
        <WhiteReactIcon>
          <LuGamepad2 className='cursor-pointer'/>
        </WhiteReactIcon>
      </div>
      <div className='flex flex-col items-start mx-4 justify-center'>
        <h1 className='text-white font-bold text-2xl mb-3'>Little Knight Wiki</h1>
        <div className='flex flex-row justify-between items-center gap-6'>
          <MainHeaderButton name='Explore' />
          <MainHeaderButton name='Character' />
          <MainHeaderButton name='Location' />
          <MainHeaderButton name='Lore' />
          <MainHeaderButton name='Community' />
        </div>
      </div>
    </div>
  )
}

export default MainHeader