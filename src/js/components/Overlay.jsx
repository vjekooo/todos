
import React from 'react'
import Form from './Form'
import PropTypes from 'prop-types'

const Overlay = (
	{ input, handleChange, handleSubmit, overlay }
) => {
	const overlayClass = overlay ? 'overlay visible' : 'overlay hidden'
	return (
		<div className={overlayClass}>
			<div className="overlay__add-task">
				<Form
					input={input}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
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
