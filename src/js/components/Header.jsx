import React from 'react'
import PropTypes from 'prop-types'
import { getToday } from '../helpers'

const Header = ({toggleMenu, menuButtonVisibility, pathname}) => {
	const transitionClass = menuButtonVisibility ? 'animate' : ''
	const listName = pathname === '/'
		? 'All Todos'
		: pathname.slice(1)
	return (
		<header className="header">
			<span
				className={`header__circle ${transitionClass}`}
				onClick={() => toggleMenu()}
			/>
			<h2 className="header__app-name">El ToDos</h2>
			<div className="header__info">
				<span>{listName}</span>
				<span className="header__date">{getToday()}</span>
			</div>
		</header>
	)
}

Header.propTypes = {
	toggleMenu: PropTypes.func,
	pathname: PropTypes.string,
	menuButtonVisibility: PropTypes.bool
}

export default Header
