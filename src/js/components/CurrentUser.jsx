import React from 'react'
import PropTypes from 'prop-types'
import { auth } from '../database'
import { getFirstName } from '../helpers'

const CurrentUser = props => {
	const { currentUser } = props
	const userIcon = currentUser.photoURL
	const firstName = !currentUser ? '' : getFirstName(currentUser.displayName)
	return (
		<button className="current-user btn" onClick={() => auth.signOut()}>
			<img src={userIcon} />
			<span>{firstName}</span>
			Sign Out
		</button>
	)
}

CurrentUser.propTypes = {
	currentUser: PropTypes.object
}

export default CurrentUser
