import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import AllTodosIcon from '../../assets/images/bx-collection.svg'
import ShoppingIcon from '../../assets/images/bx-shopping-bag-alt.svg'

class NavLinksFixed extends React.Component {
	componentDidUpdate (prevProps) {
		if (prevProps.listId !== this.props.listId) {
			console.log('ysss')
			this.setState({
				currentList: this.props.listId
			})
		}
	}
	render () {
		const { route } = this.props
		const string = route.route
		const newRoute = string === '/'
			? '/'
			: `/${route.route}`
		const newTo = {
			pathname: newRoute,
			param1: this.props.listId
		}
		return (
			<li className="flex-row flex-row--center">
				<img
					src={
						string === '/'
							? AllTodosIcon
							: ShoppingIcon
					}
					alt={string}
				/>
				<NavLink
					exact={string === '/' && true}
					to={newTo}
					activeClassName="active"
				>
					{
						string === '/'
							? 'All todos'
							: string[0].toUpperCase() + string.slice(1).toLowerCase()
					}
				</NavLink>
			</li>
		)
	}
}

NavLinksFixed.propTypes = {
	route: PropTypes.object,
	listId: PropTypes.string,
	setPathname: PropTypes.func
}

export default NavLinksFixed
