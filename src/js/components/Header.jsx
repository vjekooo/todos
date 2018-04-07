
import React from 'react'
import PropTypes from 'prop-types'
import { getToday } from '../helpers'

const Header = (props) => {
  const { toggleMenu, menuButtonVisibility } = props
  const transitionClass = menuButtonVisibility
    ? 'animate'
    : ''
  return (
    <header className="header">
      <span
        className={`header__circle ${transitionClass}`}
        onClick={() => toggleMenu()}
      >
      </span>
      <h2 className="header__app-name">Los ToDos</h2>
      <span className="header__date">{getToday()}</span>
    </header>
  )
}

Header.propTypes = {
  toggleMenu: PropTypes.func,
  menuButtonVisibility: PropTypes.bool
}

export default Header
