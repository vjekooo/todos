
import React from 'react'
import PropTypes from 'prop-types'
import { auth } from '../database'
import user from '../../assets/images/user-48.png'
import { getFirstName } from '../helpers'

const CurrentUser = (props) => {
  const { currentUser } = props
  const firstName = !currentUser
    ? ''
    : getFirstName(currentUser.displayName)
  return (
    <button
      onClick={() => auth.signOut()}
    >
      <img src={user} />
      <span>{firstName}</span>
      Sign Out
    </button>
  )
}

CurrentUser.propTypes = {
  currentUser: PropTypes.object
}

export default CurrentUser
