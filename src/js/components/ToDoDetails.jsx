
import React from 'react'
import EditForm from './EditForm'
import PropTypes from 'prop-types'
import backarrowIcon from '../../assets/images/bx-arrow-back.svg'

const ToDoDetails = (
	{currentTodo, pathname, input, handleChange,
		handleSubmit, removeToDo, setInput, on, toggle}
) => {
	const backRoute = pathname === '/'
		? 'ALL TODOS'
		: pathname.slice(1).toLocaleUpperCase()

	return (
		<div
			className="todo-details"
		>
			<div className="todo-details__head">
				<img
					onClick={toggle}
					src={backarrowIcon}
					alt="Back arrow"
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
					setInput={setInput}
					removeToDo={removeToDo}
					currentItem={currentTodo}
					type="todo"
					action="edit"
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
	setInput: PropTypes.func,
	toggle: PropTypes.func,
	on: PropTypes.bool
}

export default ToDoDetails
