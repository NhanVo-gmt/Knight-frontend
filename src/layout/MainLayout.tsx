import React, { ReactNode } from 'react'
import MainHeader from './layout-sections/MainHeader'

const MainLayout = ({children}) => {
  return (
    <div className='min-h-screen'>
      <MainHeader />
    </div>
  )
}

export default MainLayout