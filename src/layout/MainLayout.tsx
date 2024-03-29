import React, { ReactNode } from 'react'
import MainHeader from './layout-sections/MainHeader'
import WikiPage from './layout-sections/WikiPage'

const MainLayout = ({children}) => {
  return (
    <div className='min-h-screen'>
      <MainHeader />
      <WikiPage />
    </div>
  )
}

export default MainLayout