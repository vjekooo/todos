
import React, { Fragment } from 'react'
import NavLinks from './NavLinks'
import NavLinksFixed from './NavLinksFixed'
import CurrentUser from './CurrentUser'
import SignIn from './SignIn'
import PropTypes from 'prop-types'
import Toggle from './Toggle'
import Modal from './Modal'

import AddListIcon from '../../assets/images/bx-plus.svg'

const Nav = (
	{menuVisibility, currentUser, toggleMenu, menuButtonVisibility,
		handleListChange, handleListSubmit, lists, setCurrentList}
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

	const fixedList = {
		'list01': {
			route: '/',
			image: '../../assets/images/bx-collection.svg'
		},
		'list02': {
			route: 'shopping',
			image: '../../assets/images/bx-shopping-bag-alt.svg'
		}
	}

	const renderFixedLists = Object.keys(fixedList).map(
		(list, index) =>
			<NavLinksFixed
				key={index}
				route={fixedList[list]}
				listId={list}
				setCurrentList={setCurrentList}
			/>
	)

	const renderLists = Object.keys(lists).map(
		(list, index) =>
			<NavLinks
				key={index}
				route={lists[list]}
				listId={list}
				setCurrentList={setCurrentList}
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
						{
							renderFixedLists
						}
					</ul>
					<ul className="navigation__content-user-list">
						{
							renderLists
						}
					</ul>
				</div>
				<div className="navigation__footer">
					<Toggle>
						{
							({ on, toggle }) => (
								<Fragment>
									<img src={AddListIcon} alt="Add list icon"/>
									<button
										className="navigation__add-list btn"
										onClick={toggle}
									>
										New list
									</button>
									{
										on &&
										<Modal
											handleChange={handleListChange}
											handleSubmit={handleListSubmit}
											form="list"
											on={on}
											toggle={toggle}
										/>
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
	lists: PropTypes.object,
	setCurrentList: PropTypes.func
}

export default Nav
