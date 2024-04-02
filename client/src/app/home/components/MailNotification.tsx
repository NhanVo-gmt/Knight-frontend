import React from 'react'

const MailNotification = () => {

  const postUrl = ""

  return (
    <div className='w-full flex items-center justify-center bg-white relative'>
        <div>
            <img src="/HomeImages/banner.png" alt="" className='blur-sm border-none'/>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold'>
                Get Email Notification
            </div>
        </div>
    </div>
  )
}

export default MailNotification