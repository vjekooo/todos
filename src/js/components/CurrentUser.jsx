
import React from 'react'
import { auth } from '../database'
import user from '../../assets/images/user-48.png'

const CurrentUser = () => {
  return (
    <button
      onClick={() => auth.signOut()}
    >
      <img src={user} />
      Sign Out
    </button>
  )
}

export default CurrentUser
