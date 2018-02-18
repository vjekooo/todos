
import React, { Fragment } from 'react'
import { auth } from '../database'

const CurrentUser = ({ currentUser }) => {
  const firstName = currentUser.displayName.split(' ').slice(0, 1)
  return (
    <Fragment>
      <span>
        <span className="user">{firstName}</span>
        <button
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </span>
    </Fragment>
  )
}

export default CurrentUser
