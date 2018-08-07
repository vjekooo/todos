
import React, { Fragment } from 'react'
import Toggle from './Toggle'
import ToDoDetails from './ToDoDetails'
import PropTypes from 'prop-types'

const ToDo = ({
	todo, todoId, toggleToDo,
	input, details, pathname, handleChange, handleSubmit,
	editToDo, removeToDo, setInput
}) => {
	const isChecked = todo.checked
		? 'checked'
		: 'unchecked'
	return (
		<li
			className="todo__item"
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
			<Toggle>
				{
					({on, toggle}) => (
						<Fragment>
							<span
								className={`todo-text ${isChecked}`}
								onClick={toggle}
							>
								{todo.text}
							</span>
							{
								on &&
								<ToDoDetails
									input={input}
									currentTodo={todoId}
									details={details}
									pathname={pathname}
									editToDo={editToDo}
									handleChange={handleChange}
									handleSubmit={handleSubmit}
									removeToDo={removeToDo}
									setInput={setInput}
									on={on}
									toggle={toggle}
								>
								</ToDoDetails>
							}
						</Fragment>
					)
				}
			</Toggle>
		</li>
	)
}

ToDo.propTypes = {
	todo: PropTypes.object,
	todoId: PropTypes.string,
	removeToDo: PropTypes.func,
	checked: PropTypes.bool,
	toggleToDo: PropTypes.func,
	input: PropTypes.string,
	details: PropTypes.bool,
	pathname: PropTypes.string,
	currentTodo: PropTypes.string,
	editToDo: PropTypes.func,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	setInput: PropTypes.func
}

export default ToDo
