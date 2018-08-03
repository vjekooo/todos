import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
	constructor (props) {
		super(props)
		this.inputRef = React.createRef()
	}

	focusTextInput= () => {
		this.inputRef.current.focus()
	}

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
					ref={this.inputRef}
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
				<input
					type="hidden"
					onClick={this.focusTextInput}
				/>
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
