
import React from 'react'
import PropTypes from 'prop-types'
import SignIn from './SignIn'
import CurrentUser from './CurrentUser'
import { getToday } from '../helpers'

const Header = (props) => {
  const { currentUser } = props
  const showUserButton = !currentUser
    ? <SignIn />
    : <CurrentUser currentUser={currentUser} />
  return (
    <header>
      <h2>Los ToDos</h2>
      {showUserButton}
      <span>{getToday()}</span>
    </header>
  )
}

Header.propTypes = {
  currentUser: PropTypes.object
}

export default Header
