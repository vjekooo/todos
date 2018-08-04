import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
	render () {
		const { input, handleChange, handleSubmit, modalToggle } = this.props
		return (
			<form
				className="form"
				onSubmit={handleSubmit}
			>
				<input
					className="form__input"
					type="text"
					value={input}
					onChange={handleChange}
				/>
				<div className="form__action">
					<button
						className="button button--cancel"
						type="button"
						onClick={() => modalToggle()}
					>
						CANCEL
					</button>
					<button
						type="submit"
						className="button button--add"
					>
						ADD
					</button>
				</div>
			</form>
		)
	}
}

Form.propTypes = {
	input: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	modalToggle: PropTypes.func
}

export default Form
