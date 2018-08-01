import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavLinks = ({ route, listId, removeList }) => {
	const string = route.route
	return (
		<li className="flex-row flex-row--center">
			<Link to={`/${route.route}`}>
				{string[0].toUpperCase() + string.slice(1).toLowerCase()}
			</Link>
			<span
				className="icon remove"
				onClick={() => {
					removeList(listId)
				}}
			>
			</span>
		</li>
	)
}

NavLinks.propTypes = {
	route: PropTypes.object,
	listId: PropTypes.string,
	removeList: PropTypes.func
}

export default NavLinks
