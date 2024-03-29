import React, { ReactNode } from 'react'
import MainHeader from './layout-sections/MainHeader'
import HomePage from './layout-sections/HomePage'

const MainLayout = ({children}) => {
  return (
    <div className='min-h-screen'>
      <MainHeader />
      <HomePage />
    </div>
  )
}

export default MainLayout