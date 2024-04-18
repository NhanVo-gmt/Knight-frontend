import React from 'react'
import HomeHeader from './home/HomeHeader'
import HomeBody from './home/HomeBody'
import MailNotification from './home/components/MailNotification'

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <HomeBody />
      <MailNotification />
    </div>
  )
}

export default HomePage