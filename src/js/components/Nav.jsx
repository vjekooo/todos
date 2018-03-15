
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
    ? { width: '200px' }
    : { width: 0 }
  return (
    <div
      className="nav"
      style={style}
    >
      <div className="nav-wrapper">
        <div className="nav-head">
          {showUserButton}
          <span
            className="nav-arrow"
            onClick={() => toggleMenu()}
          >
            <img src={arrow} />
          </span>
        </div>
        <div className="nav-content">
          <ul>
            <li>Jedan</li>
            <li>Dva</li>
          </ul>
          <button className="nav-add-list">
            New list
          </button>
        </div>
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
