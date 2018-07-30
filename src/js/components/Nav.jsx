
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import CurrentUser from './CurrentUser'
import SignIn from './SignIn'
import PropTypes from 'prop-types'
import Toggle from './Toggle'

const Nav = (
  {
    menuVisibility,
    currentUser,
    toggleMenu,
    menuButtonVisibility,
    handleListChange,
    handleListSubmit,
    lists
  }
) => {
  const showUserButton = !currentUser
    ? <SignIn />
    : <CurrentUser currentUser={currentUser} />
  const style = menuVisibility
    ? { width: '100%' }
    : { width: 0 }
  const transitionClass = menuButtonVisibility
    ? 'animate'
    : ''

  const renderLists = Object.keys(lists).map(
    (list, index) =>
      <NavLinks
        key={index}
        route={lists[list]}
      />
  )
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
            <li>
              <Link to="/">All Todos</Link>
            </li>
            <li>
              <Link to="/shoping">Shoping</Link>
            </li>
            {
              renderLists
            }
          </ul>
          <Toggle>
            {
              ({on, toggle}) => (
                <Fragment>
                  <button
                    className="navigation__add-list btn"
                    onClick={toggle}
                  >
                    New list
                  </button>
                  {
                    on &&
                    <form action="submit" onSubmit={handleListSubmit}>
                      <input
                        onChange={handleListChange}
                      />
                      <button type="submit">Submit</button>
                    </form>
                  }
                </Fragment>
              )
            }
          </Toggle>
        </div>
      </div>
    </div>
  )
}

Nav.propTypes = {
  menuVisibility: PropTypes.bool,
  currentUser: PropTypes.object,
  toggleMenu: PropTypes.func,
  menuButtonVisibility: PropTypes.bool,
  handleListChange: PropTypes.func,
  handleListSubmit: PropTypes.func,
  lists: PropTypes.object
}

export default Nav
