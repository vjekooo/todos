
import React from 'react'
import CurrentUser from './CurrentUser'
import SignIn from './SignIn'
import PropTypes from 'prop-types'

const Nav = (props) => {
  const { menuVisibility, currentUser, toggleMenu, menuButtonVisibility } = props
  const showUserButton = !currentUser
    ? <SignIn />
    : <CurrentUser />
  const style = menuVisibility
    ? { width: '300px' }
    : { width: 0 }
  const transitionClass = menuButtonVisibility
    ? 'transition'
    : ''
  return (
    <div
      className="nav"
      style={style}
    >
      <div className="nav-wrapper">
        <div className="nav-head">
          {showUserButton}
          <span
            className={`circle ${transitionClass}`}
            onClick={() => toggleMenu()}
          >
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
  toggleMenu: PropTypes.func,
  menuButtonVisibility: PropTypes.bool
}

export default Nav
