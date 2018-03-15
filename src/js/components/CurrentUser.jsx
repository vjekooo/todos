
import React from 'react'
import { auth } from '../database'

const CurrentUser = () => {
  return (
    <button
      onClick={() => auth.signOut()}
    >
      Sign Out
    </button>
  )
}

export default CurrentUser
