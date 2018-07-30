import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavLinks = ({ route }) => {
	const string = route.route
	return (
		<li>
			<Link to={`/${route.route}`}>
				{string[0].toUpperCase() + string.slice(1).toLowerCase()}
			</Link>
		</li>
	)
}

NavLinks.propTypes = {
	route: PropTypes.object
}

export default NavLinks
