import React from 'react'
import Profile from '../components/profile'
import Security from '../components/Security'
import Notification from '../components/Notification'

export default function Main({page}) {
  return (
    <div>
        {page === "profile" && <Profile/>}
        {page === "notification" && <Notification/>}
        {page === "security" && <Security/>}
    </div>
  )
}
