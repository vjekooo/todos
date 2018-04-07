
import React from 'react'
import CurrentUser from './CurrentUser'
import SignIn from './SignIn'
import PropTypes from 'prop-types'

const Nav = (props) => {
  const { menuVisibility, currentUser, toggleMenu, menuButtonVisibility } = props
  const showUserButton = !currentUser
    ? <SignIn />
    : <CurrentUser currentUser={currentUser} />
  const style = menuVisibility
    ? { width: '100%' }
    : { width: 0 }
  const transitionClass = menuButtonVisibility
    ? 'animate'
    : ''
  return (
    <div
      className="navigation"
      style={style}
    >
      <div className="navigation__wrapper">
        <div className="navigation__head">
          {showUserButton}
          <span
            className={`navigation__circle ${transitionClass}`}
            onClick={() => toggleMenu()}
          >
          </span>
        </div>
        <div className="navigation__content">
          <ul className="navigation__content-list">
            <li><a>ToDos</a></li>
            <li><a>Terminado</a></li>
          </ul>
          <button className="navigation__add-list btn">
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
