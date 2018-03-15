
import React from 'react'
import CurrentUser from './CurrentUser'
import SignIn from './SignIn'
import PropTypes from 'prop-types'
import arrow from '../../assets/images/arrow-64.svg'

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
      <span
        className="nav-arrow"
        onClick={() => toggleMenu()}
      >
        <img src={arrow} />
      </span>
      <div className="nav-content">
        {showUserButton}
        <ul>
          <li>Jedan</li>
          <li>Dva</li>
        </ul>
        <button>
          Add Item
        </button>
      </div>
    </div>
  )
}

Nav.propTypes = {
  menuVisibility: PropTypes.bool,
  currentUser: PropTypes.object,
  toggleMenu: PropTypes.func
}

export default Nav
