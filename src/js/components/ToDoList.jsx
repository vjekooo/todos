
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'
import Toggle from './Toggle'
import Overlay from './Overlay'
import PlusButton from './PlusButton'

const ToDoList =
({todos, currentUser, removeToDo, toggleToDo, overlayToggle, setCurrentToDo}) => {
	const toDo = Object.keys(todos).map(todo => {
		return (
			<ToDo
				key={todo}
				todoId={todo}
				todo={todos[todo]}
				removeToDo={removeToDo}
				toggleToDo={toggleToDo}
				overlayToggle={overlayToggle}
				setCurrentToDo={setCurrentToDo}
			/>
		)
	}).sort((a, b) => {
		return a.props.todo.timestamp < b.props.todo.timestamp
	}).sort((a, b) => {
		return a.props.todo.checked > b.props.todo.checked
	})
	const renderToDo = Object.keys(todos).length !== 0
		? toDo
		: <h3 className="no-todo">Such empty, do something</h3>
	const signedUser = currentUser ? renderToDo : <h3>Please sign in</h3>
	return (
		<Fragment>
			<div className="todo">
				<ul>
					{signedUser}
				</ul>
			</div>
			<Toggle>
				{
					({on, toggle}) => (
						<Fragment>
							<Overlay on={on} toggle={toggle} />
							<PlusButton on={on} toggle={toggle} />
						</Fragment>
					)
				}
			</Toggle>
		</Fragment>
	)
}

ToDoList.propTypes = {
	todos: PropTypes.object,
	currentUser: PropTypes.object,
	input: PropTypes.string,
	currentTodo: PropTypes.string,
	addButtonActive: PropTypes.bool,
	addToDo: PropTypes.func,
	removeToDo: PropTypes.func,
	toggleToDo: PropTypes.func,
	editToDo: PropTypes.func,
	overlayToggle: PropTypes.func,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	setCurrentToDo: PropTypes.func
}

export default ToDoList
