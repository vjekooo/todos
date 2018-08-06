import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Toggle from './Toggle'
import ListSettings from './ListSettings'
import { getToday } from '../helpers'
import settingsIcon from '../../assets/images/bx-dots-vertical-rounded.svg'

const Header = ({toggleMenu, menuButtonVisibility, pathname, removeList, lists, currentList}) => {
	const transitionClass = menuButtonVisibility ? 'animate' : ''
	const listName = pathname === '/'
		? 'All Todos'
		: pathname.slice(1)
	return (
		<header className="header">
			<div className="header__toolbar">
				<span
					className={`header__circle ${transitionClass}`}
					onClick={() => toggleMenu()}
				/>
				<Toggle>
					{
						({on, toggle}) => (
							<Fragment>
								<img
									src={settingsIcon}
									alt="Settings icon"
									className="settings-button"
									onClick={toggle}
								/>
								{
									on &&
									<ListSettings
										removeList={removeList}
										toggle={toggle}
										lists={lists}
										currentList={currentList}
									/>
								}
							</Fragment>
						)
					}
				</Toggle>
			</div>
			<h2 className="header__app-name">Los ToDos</h2>
			<div className="header__info">
				<span>{listName}</span>
				<span className="header__date">{getToday()}</span>
			</div>
		</header>
	)
}

Header.propTypes = {
	toggleMenu: PropTypes.func,
	removeList: PropTypes.func,
	pathname: PropTypes.string,
	menuButtonVisibility: PropTypes.bool,
	lists: PropTypes.object,
	currentList: PropTypes.string
}

export default Header
