import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
	render () {
		const { input, handleChange, handleSubmit } = this.props
		return (
			<form className="overlay__form" onSubmit={handleSubmit}>
				<input
					className="overlay__input"
					type="text"
					placeholder="add task"
					value={input}
					onChange={handleChange}
				/>
				<button
					className="overlay__add-button"
					type="submit"
				>
					Add
				</button>
			</form>
		)
	}
}

Form.propTypes = {
	input: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func
}

export default Form
