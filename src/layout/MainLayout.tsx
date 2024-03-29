import React, { ReactNode } from 'react'
import MainHeader from './layout-sections/MainHeader'
import HomePage from '@/app/page'

const MainLayout = ({children}) => {
  return (
    <div className='min-h-screen'>
      <MainHeader />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout