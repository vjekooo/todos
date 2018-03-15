
import React from 'react'
import CurrentUser from './CurrentUser'
import SignIn from './SignIn'
import Menu from './Menu'
import PropTypes from 'prop-types'

const Nav = (props) => {
  const { menuVisibility, currentUser, toggleMenu } = props
  const showUserButton = !currentUser
    ? <SignIn />
    : <CurrentUser />
  const style = menuVisibility
    ? { width: '60%' }
    : { width: 0 }
  return (
    <div
      className="nav"
      style={style}
    >
      <Menu toggleMenu={toggleMenu} />
      {showUserButton}
      <ul>
        <li>Jedan</li>
        <li>Dva</li>
      </ul>
      <button>
        Add Item
      </button>
    </div>
  )
}

Nav.propTypes = {
  menuVisibility: PropTypes.bool,
  currentUser: PropTypes.object,
  toggleMenu: PropTypes.func
}

export default Nav
