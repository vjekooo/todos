
import React from 'react'
import PropTypes from 'prop-types'

class ListForm extends React.Component {
	constructor (props) {
		super(props)
		this.inputRef = React.createRef()
	}

	componentDidMount () {
		this.inputRef.current.focus()
	}

	render () {
		const { handleListChange, handleListSubmit } = this.props
		return (
			<form
				action="submit"
				onSubmit={handleListSubmit}
				className="form"
			>
				<input
					className="form__input"
					type="text"
					onChange={handleListChange}
					ref={this.inputRef}
				/>
				<div className="form__action">
					<button
						className="button button--cancel"
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

ListForm.propTypes = {
	handleListChange: PropTypes.func,
	handleListSubmit: PropTypes.func
}

export default ListForm
