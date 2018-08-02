
import React from 'react'
import PropTypes from 'prop-types'
import backarrowIcon from '../../assets/images/bx-arrow-back.svg'
import editIcon from '../../assets/images/bx-edit.svg'
import deleteIcon from '../../assets/images/bx-trash.svg'

const ToDoDetails = (
	{currentTodo, details, pathname, input, handleChange,
		handleSubmit, removeToDo, todoDetailsToggle}
) => {
	const overlayClass = details ? 'visible' : 'hidden'
	const backRoute = pathname === '/'
		? 'ALL TODOS'
		: pathname.slice(1).toLocaleUpperCase()

	return (
		<div className={`todo-details ${overlayClass}`}>
			<div className="todo-details__head">
				<img
					onClick={() => {
						todoDetailsToggle()
					}}
					src={backarrowIcon}
				/>
				<div>
					{backRoute}
				</div>
			</div>
			<div className="todo-details__todo-edit">
				<div>
					<form className="todo-details__form" onSubmit={handleSubmit}>
						<label>
							<input
								className="todo-details__input"
								type="text"
								placeholder="add task"
								value={input}
								onChange={handleChange}
							/>
						</label>
						<div className="todo-details__icons">
							<input
								type="image"
								src={editIcon}
							/>
							<img
								src={deleteIcon}
								alt="Delete icon"
								onClick={() => {
									removeToDo(currentTodo)
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

ToDoDetails.propTypes = {
	currentTodo: PropTypes.string,
	overlay: PropTypes.bool,
	details: PropTypes.bool,
	pathname: PropTypes.string,
	input: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	removeToDo: PropTypes.func,
	todoDetailsToggle: PropTypes.func
}

export default ToDoDetails
