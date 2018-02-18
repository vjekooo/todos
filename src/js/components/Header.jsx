
import React from 'react'
import PropTypes from 'prop-types'
import SignIn from './SignIn'
import CurrentUser from './CurrentUser'

const Header = (props) => {
  const { currentUser } = props
  return (
    <header>
      <span></span>
      <h2>Los ToDos</h2>
      {
        !currentUser
          ? <SignIn />
          : <CurrentUser currentUser={currentUser} />
      }
    </header>
  )
}

Header.propTypes = {
  currentUser: PropTypes.object
}

export default Header
