
import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
	constructor (props) {
		super(props)
		this.inputRef = React.createRef()
	}

	componentDidMount () {
		this.inputRef.current.focus()
	}

	render () {
		const { handleChange, handleSubmit, toggle, type, action } = this.props
		return (
			<form
				action="submit"
				onSubmit={
					(event) => {
						handleSubmit(type, action, event)
						toggle()
					}
				}
				className="form"
			>
				<input
					className="form__input"
					type="text"
					onChange={handleChange}
					ref={this.inputRef}
				/>
				<div className="form__action">
					<button
						className="button button--cancel"
						onClick={toggle}
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
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	toggle: PropTypes.func,
	type: PropTypes.string,
	action: PropTypes.string
}

export default Form
