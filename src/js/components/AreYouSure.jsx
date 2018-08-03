
import React from 'react'
import PropTypes from 'prop-types'

const AreYouSure = ({deleteItem}) => {
	return (
		<div className="are-you-sure">
			<h3 className="are-you-sure__title">
				Delete this item?
			</h3>
			<div className="are-you-sure__action">
				<button
					className="button button--cancel"
					type="button"
				>
					YES
				</button>
				<button
					type="button"
					className="button button--add"
				>
					NO
				</button>
			</div>
		</div>
	)
}

AreYouSure.propTypes = {
	deleteItem: PropTypes.func
}

export default AreYouSure
