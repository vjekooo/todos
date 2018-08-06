
import React from 'react'
import EditForm from './EditForm'
import PropTypes from 'prop-types'
import backarrowIcon from '../../assets/images/bx-arrow-back.svg'

const ToDoDetails = (
	{currentTodo, details, pathname, input, handleChange,
		handleSubmit, removeToDo, todoDetailsToggle}
) => {
	const overlayClass = details ? 'visible' : 'hidden'
	const backRoute = pathname === '/'
		? 'ALL TODOS'
		: pathname.slice(1).toLocaleUpperCase()

	return (
		<div
			className={`todo-details ${overlayClass}`}
		>
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
				<EditForm
					input={input}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					removeToDo={removeToDo}
					currentTodo={currentTodo}
				/>
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
