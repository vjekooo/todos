
import React from 'react'
import PropTypes from 'prop-types'
import saveIcon from '../../assets/images/bx-save.svg'
import deleteIcon from '../../assets/images/bx-trash.svg'

class EditForm extends React.Component {
	constructor (props) {
		super(props)
		this.editInputRef = React.createRef()
	}
	componentDidMount () {
		this.props.setInput(this.props.currentItem, this.props.type)
	}
	render () {
		const {
			input, handleChange, handleSubmit, removeToDo,
			currentItem, type, action
		} = this.props
		return (
			<form
				className="todo-details__form"
				onSubmit={(event) => handleSubmit(type, action, event)}
			>
				<input
					className="todo-details__input"
					type="text"
					value={input}
					onChange={handleChange}
					ref={this.editInputRef}
				/>
				<div className="todo-details__icons">
					<input
						type="image"
						src={saveIcon}
						alt="Edit icon"
					/>
					<img
						src={deleteIcon}
						alt="Delete icon"
						onClick={() => {
							window.confirm('Are you sure you want to delete this todo?') &&
								removeToDo(currentItem)
						}}
					/>
				</div>
			</form>
		)
	}
}

EditForm.propTypes = {
	input: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	removeToDo: PropTypes.func,
	setInput: PropTypes.func,
	currentItem: PropTypes.string,
	type: PropTypes.string,
	action: PropTypes.string
}

export default EditForm
