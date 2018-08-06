import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import UserListIcon from '../../assets/images/bx-list-plus.svg'

class NavLinks extends React.Component {
	componentDidUpdate (prevProps) {
		if (prevProps.route.route !== this.props.route.route) {
			this.setState({
				currentList: this.props.listId
			})
		}
	}
	render () {
		const { route } = this.props
		const string = route.route
		const newTo = {
			pathname: `/${route.route}`,
			param1: this.props.listId
		}
		return (
			<li className="flex-row flex-row--center">
				<img src={UserListIcon} alt="User created list icon"/>
				<NavLink
					to={newTo}
					activeClassName="active"
				>
					{string[0].toUpperCase() + string.slice(1).toLowerCase()}
				</NavLink>
			</li>
		)
	}
}

NavLinks.propTypes = {
	route: PropTypes.object,
	listId: PropTypes.string,
	setCurrentList: PropTypes.func
}

export default NavLinks
