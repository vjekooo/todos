
import React from 'react'
import PropTypes from 'prop-types'
import { auth } from '../database'

const CurrentUser = ({ currentUser }) => {
  return (
    <button
      onClick={() => auth.signOut()}
    >
      Sign Out
    </button>
  )
}

CurrentUser.propTypes = {
  currentUser: PropTypes.object
}

export default CurrentUser
