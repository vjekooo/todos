
import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

const Overlay = ({overlay}) => {
	const overlayClass = overlay ? 'overlay visible' : 'overlay hidden'
	return (
		<div className={overlayClass}>
			<div className="overlay__add-task">
				<Form />
			</div>
		</div>
	)
}

Overlay.propTypes = {
	input: PropTypes.string,
	active: PropTypes.bool,
	overlay: PropTypes.bool,
	currentTodo: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func
}

export default Overlay
