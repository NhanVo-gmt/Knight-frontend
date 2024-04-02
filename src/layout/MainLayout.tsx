import React, { ReactNode } from 'react'
import MainHeader from './layout-sections/MainHeader'

type MainLayoutType = {
  children: ReactNode
}

const MainLayout = ({children} : MainLayoutType) => {
  return (
    <div className='min-h-screen'>
      <MainHeader />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout