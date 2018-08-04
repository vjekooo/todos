
import React from 'react'
import PropTypes from 'prop-types'
import saveIcon from '../../assets/images/bx-save.svg'
import deleteIcon from '../../assets/images/bx-trash.svg'

class EditForm extends React.Component {
	render () {
		const {input, handleChange, handleSubmit, removeToDo, currentTodo} = this.props
		return (
			<form className="todo-details__form" onSubmit={handleSubmit}>
				<input
					className="todo-details__input"
					type="text"
					placeholder="add task"
					value={input}
					onChange={handleChange}
				/>
				<div className="todo-details__icons">
					<input
						type="image"
						src={saveIcon}
					/>
					<img
						src={deleteIcon}
						alt="Delete icon"
						onClick={() => {
							window.confirm('Are you sure you want to delete this todo?') &&
								removeToDo(currentTodo)
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
	currentTodo: PropTypes.string
}

export default EditForm
