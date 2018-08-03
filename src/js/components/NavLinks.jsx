import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import UserListIcon from '../../assets/images/bx-list-plus.svg'

const NavLinks = ({ route, listId, removeList }) => {
	const string = route.route
	return (
		<li className="flex-row flex-row--center">
			<img src={UserListIcon} alt="User created list icon"/>
			<NavLink
				to={`/${route.route}`}
				activeClassName="active"
			>
				{string[0].toUpperCase() + string.slice(1).toLowerCase()}
			</NavLink>
		</li>
	)
}

NavLinks.propTypes = {
	route: PropTypes.object,
	listId: PropTypes.string,
	removeList: PropTypes.func
}

export default NavLinks
