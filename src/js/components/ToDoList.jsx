
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

class ToDoList extends React.Component {
	componentDidMount () {
		this.props.setPathname(this.props.location.pathname, this.props.location.param1)
	}

	componentDidUpdate (prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.props.setPathname(this.props.location.pathname, this.props.location.param1)
			this.props.toggleMenu()
		}
	}

	render () {
		const {
			input, todos, isTodosEmpty, currentUser, currentList,
			removeToDo, toggleToDo, editToDo, handleChange, handleSubmit,
			details, pathname, setInput, lists
		} = this.props
		const toDo = Object.keys(todos).map(todo => {
			return (
				<ToDo
					key={todo}
					todoId={todo}
					todo={todos[todo]}
					toggleToDo={toggleToDo}
					input={input}
					removeToDo={removeToDo}
					editToDo={editToDo}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					details={details}
					pathname={pathname}
					setInput={setInput}
				/>
			)
		}).sort((a, b) => {
			return a.props.todo.timestamp < b.props.todo.timestamp
		}).sort((a, b) => {
			return a.props.todo.checked > b.props.todo.checked
		}).sort((a, b) => {
			const listExists = lists[currentList]
				? lists[currentList]
				: []
			if (listExists.sort === '0') {
				return a.props.todo.checked > b.props.todo.checked
			}
			if (listExists.sort === '1') {
				return a.props.todo.text > b.props.todo.text
			}
			if (listExists.sort === '2') {
				return a.props.todo.timestamp < b.props.todo.timestamp
			}
		})

		const listExists = lists[currentList]
			? lists[currentList]
			: []

		const filterByList = toDo.filter(item => {
			return pathname === '/'
				? item
				: item.props.todo.listId === currentList
		})

		const filterByChecked = filterByList.filter(item => {
			return listExists.filterByCompleted
				? !item.props.todo.checked
				: item
		})

		const renderToDo = !isTodosEmpty
			? filterByChecked
			: <li>
				<h3 className="no-todo">Such empty, do something</h3>
			</li>

		const userToDos = currentUser
			? renderToDo
			: <li>
				<h3>Please sign in</h3>
			</li>

		return (
			<Fragment>
				<div className="todo">
					<ul>
						{userToDos}
					</ul>
				</div>
			</Fragment>
		)
	}
}

ToDoList.propTypes = {
	todos: PropTypes.object,
	lists: PropTypes.object,
	isTodosEmpty: PropTypes.bool,
	currentUser: PropTypes.object,
	input: PropTypes.string,
	currentList: PropTypes.string,
	filter: PropTypes.string,
	overlay: PropTypes.bool,
	details: PropTypes.bool,
	pathname: PropTypes.string,
	location: PropTypes.object,
	currentTodo: PropTypes.string,
	addButtonActive: PropTypes.bool,
	addToDo: PropTypes.func,
	removeToDo: PropTypes.func,
	toggleToDo: PropTypes.func,
	toggleMenu: PropTypes.func,
	editToDo: PropTypes.func,
	modalToggle: PropTypes.func,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	setPathname: PropTypes.func,
	setInput: PropTypes.func,
	todoDetailsToggle: PropTypes.func
}

export default ToDoList
