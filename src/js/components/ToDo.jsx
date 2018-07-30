import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({ todo, todoId, overlayToggle, toggleToDo, removeToDo }) => {
	const isChecked = todo.checked
		? 'checked'
		: 'unchecked'
	return (
		<li className="todo__item">
			<span className="todo__input--checked">
				<input
					type="checkbox"
					id={todoId}
					checked={todo.checked}
					onClick={() => {
						toggleToDo(todoId)
					}}
				/>
				<label htmlFor={todoId} />
			</span>
			<span className={`todo-text ${isChecked}`}>{todo.text}</span>
			<button
				className="btn"
				onClick={() => {
					overlayToggle(todoId)
				}}
			>
				edit
			</button>
			<span
				className="icon remove"
				onClick={() => {
					removeToDo(todoId)
				}}
			/>
		</li>
	)
}

ToDo.propTypes = {
	todo: PropTypes.object,
	todoId: PropTypes.string,
	removeToDo: PropTypes.func,
	checked: PropTypes.bool,
	toggleToDo: PropTypes.func,
	overlayToggle: PropTypes.func
}

export default ToDo
