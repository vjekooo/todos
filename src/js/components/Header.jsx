
import React from 'react'
import PropTypes from 'prop-types'
// import SignIn from './SignIn'
// import CurrentUser from './CurrentUser'
import Menu from './Menu'
import { getToday } from '../helpers'

const Header = (props) => {
  const { toggleMenu } = props
  return (
    <header>
      <h2>Los ToDos</h2>
      <Menu toggleMenu={toggleMenu} />
      <span>{getToday()}</span>
    </header>
  )
}

Header.propTypes = {
  toggleMenu: PropTypes.func
}

export default Header
