
import React from 'react'
import PropTypes from 'prop-types'

const Menu = (props) => {
  const { toggleMenu } = props
  return (
    <span
      className="menu"
      onClick={ () => toggleMenu() }
    >
        menu
    </span>
  )
}

Menu.propTypes = {
  toggleMenu: PropTypes.func
}

export default Menu
