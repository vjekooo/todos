import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ToDoStats = ({ todos, addToDo }) => {
	const toDosLength = todos.length
	const uncheckedLength = todos.filter(todo => !todo.checked).length
	return (
		<Fragment>
			<div className="todo-stats">
				<span>ToDos count: {toDosLength}</span>
				<span>Unchecked ToDos count: {uncheckedLength}</span>
				<span className="icon add" onClick={addToDo} />
			</div>
		</Fragment>
	)
}

ToDoStats.propTypes = {
	todos: PropTypes.array,
	addToDo: PropTypes.func
}

export default ToDoStats
