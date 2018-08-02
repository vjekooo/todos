import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ input, handleChange, handleSubmit }) => {
	return (
		<form className="overlay__form" onSubmit={handleSubmit}>
			<label>
				<input
					className="overlay__input"
					type="text"
					placeholder="add task"
					value={input}
					onChange={handleChange}
				/>
			</label>
			<input
				className="overlay__add-button"
				type="submit"
				value="Add"
			/>
		</form>
	)
}

Form.propTypes = {
	input: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func
}

export default Form
