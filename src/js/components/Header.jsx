
import React from 'react'
import PropTypes from 'prop-types'
import { getToday } from '../helpers'

const Header = (props) => {
  const { toggleMenu, menuButtonVisibility } = props
  const transitionClass = menuButtonVisibility
    ? 'animate'
    : ''
  return (
    <header>
      <span
        className={`circle ${transitionClass}`}
        onClick={() => toggleMenu()}
      >
      </span>
      <h2>Los ToDos</h2>
      <span className="date">{getToday()}</span>
    </header>
  )
}

Header.propTypes = {
  toggleMenu: PropTypes.func,
  menuButtonVisibility: PropTypes.bool
}

export default Header
