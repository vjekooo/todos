
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'
import ToDoDetails from './ToDoDetails'

class ToDoList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			pathname: ''
		}
	}
	componentDidMount () {
		this.setState({
			pathname: this.props.location.pathname
		})
		this.props.setPathname(this.props.location.pathname, this.props.location.param1)
	}

	componentWillReceiveProps (nextProps) {
		if (this.props.location.pathname !== nextProps.location.pathname) {
			this.setState({
				pathname: nextProps.location.pathname
			})
			this.props.setPathname(nextProps.location.pathname, nextProps.location.param1)
			this.props.toggleMenu()
		}
	}

	render () {
		const {
			input, todos, isTodosEmpty, overlay, currentUser, currentTodo,
			removeToDo, toggleToDo, editToDo, handleChange, handleSubmit,
			todoDetailsToggle, details, pathname
		} = this.props
		const toDo = Object.keys(todos).map(todo => {
			return (
				<ToDo
					key={todo}
					todoId={todo}
					todo={todos[todo]}
					toggleToDo={toggleToDo}
					todoDetailsToggle={todoDetailsToggle}
				/>
			)
		}).sort((a, b) => {
			return a.props.todo.timestamp < b.props.todo.timestamp
		}).sort((a, b) => {
			return a.props.todo.checked > b.props.todo.checked
		})

		const filteredTodos = toDo.filter(item => {
			if (this.state.pathname === '/') {
				return item
			}
			if (item.props.todo.list === this.state.pathname) {
				return item
			}
		})

		const renderToDo = !isTodosEmpty
			? filteredTodos
			: <h3 className="no-todo">Such empty, do something</h3>

		const signedUser = currentUser
			? renderToDo
			: <h3>Please sign in</h3>

		return (
			<Fragment>
				<div className="todo">
					<ul>
						{signedUser}
					</ul>
				</div>
				<ToDoDetails
					input={input}
					currentTodo={currentTodo}
					overlay={overlay}
					details={details}
					pathname={pathname}
					editToDo={editToDo}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					removeToDo={removeToDo}
					todoDetailsToggle={todoDetailsToggle}
				>
				</ToDoDetails>
			</Fragment>
		)
	}
}

ToDoList.propTypes = {
	todos: PropTypes.object,
	isTodosEmpty: PropTypes.bool,
	currentUser: PropTypes.object,
	input: PropTypes.string,
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
	todoDetailsToggle: PropTypes.func
}

export default ToDoList
