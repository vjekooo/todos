
import React from 'react'
import CurrentUser from './CurrentUser'
import PropTypes from 'prop-types'

const Menu = (props) => {
  const { menuVisibility } = props
  const style = menuVisibility
    ? 'width: 80%;'
    : 'width: 0;'
  return (
    <div
      className="menu"
      style={style}
    >
      <CurrentUser />
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

Menu.propTypes = {
  menuVisibility: PropTypes.bool
}

export default Menu
