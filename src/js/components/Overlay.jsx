
import React from 'react'
import Form from './Form'
import PropTypes from 'prop-types'

const Overlay = (
	{ input, currentTodo, handleChange, handleSubmit, overlay }
) => {
	const overlayClass = overlay ? 'overlay visible' : 'overlay hidden'
	const value = currentTodo ? 'Edit' : 'Add'
	return (
		<div className={overlayClass}>
			<div className="overlay__add-task">
				<Form
					input={input}
					value={value}
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
