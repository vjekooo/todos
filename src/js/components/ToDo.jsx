import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({ todo, todoId, todoDetailsToggle, toggleToDo }) => {
	const isChecked = todo.checked
		? 'checked'
		: 'unchecked'
	return (
		<li
			className="todo__item"
			onClick={() => {
				todoDetailsToggle(todoId)
			}}
		>
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
			<span
				className={`todo-text ${isChecked}`}
			>
				{todo.text}
			</span>
		</li>
	)
}

ToDo.propTypes = {
	todo: PropTypes.object,
	todoId: PropTypes.string,
	removeToDo: PropTypes.func,
	checked: PropTypes.bool,
	toggleToDo: PropTypes.func,
	todoDetailsToggle: PropTypes.func
}

export default ToDo
