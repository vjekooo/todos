
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { getToday } from '../helpers'
import Toggle from './Toggle'
import Nav from './Nav'

const Header = () => {
	return (
		<header className="header">
			<Toggle>
				{
					({on, toggle}) => (
						<Fragment>
							<Nav on={on} toggle={toggle} />
							<span
								className={
									on
										? 'header__circle animate'
										: 'header__circle'
								}
								onClick={toggle}
							>
							</span>
						</Fragment>
					)
				}
			</Toggle>
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
