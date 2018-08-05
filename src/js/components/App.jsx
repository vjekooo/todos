
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ToDoList from './ToDoList'
import Header from './Header'
import Nav from './Nav'
import Toggle from './Toggle'
import Modal from './Modal'
import { getDate } from '../helpers'
import { auth, database } from '../database'

class App extends React.Component {
	constructor (props) {
		super(props)
		this.usersRef = null
		this.userRef = null
		this.state = {
			todos: {},
			isTodosEmpty: false,
			lists: {},
			details: false,
			currentTodo: '',
			currentUser: null,
			addButtonActive: false,
			input: '',
			listInput: '',
			pathname: '',
			menuVisibility: false,
			menuButtonVisibility: false
		}
	}

	componentDidMount () {
		auth.onAuthStateChanged(currentUser => {
			this.setState({
				currentUser: currentUser
			})
			this.usersRef = database.ref('/users')
			this.userRef = this.usersRef.child(currentUser.uid)
			this.todosRef = this.userRef.child('todos')
			this.listsRef = this.userRef.child('lists')
			this.todosRef.on('value', (snapshot) => {
				if (snapshot.exists()) {
					this.setState({
						todos: snapshot.val()
					})
				} else {
					this.setState({
						isTodosEmpty: true
					})
				}
			})
			this.listsRef.on('value', (snapshot) => {
				if (snapshot.exists()) {
					this.setState({
						lists: snapshot.val()
					})
				}
			})
		})
	}

	setPathname = (data) => {
		this.setState({
			pathname: data
		})
	}

	handleChange = (event) => {
		this.setState({
			input: event.target.value
		})
	}

	handleListChange = (event) => {
		this.setState({
			listInput: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const { currentTodo } = this.state
		if (!currentTodo) {
			this.addToDo()
		} else {
			this.editToDo()
		}
	}

	handleListSubmit = (event) => {
		event.preventDefault()
		this.addList()
	}

	addList = () => {
		const { listInput } = this.state
		if (listInput) {
			this.listsRef.push({
				route: listInput.toLocaleLowerCase()
			})
			this.setState({
				listInput: ''
			})
		}
	}

	addToDo = () => {
		const { input, pathname } = this.state
		if (input) {
			this.todosRef.push({
				text: input,
				list: pathname,
				checked: false,
				timestamp: getDate()
			})
			this.setState({
				input: ''
			})
		}
	}

	removeToDo = (todoId) => {
		this.todosRef.child(todoId).remove()
		this.setState({
			details: !this.state.details,
			input: '',
			currentTodo: ''
		})
	}

	removeList = (listId) => {
		this.listsRef.child(listId).remove()
		this.setState({
			input: ''
		})
	}

	editToDo = () => {
		const { input, currentTodo } = this.state
		const todos = { ...this.state.todos }
		const currentItem = todos[currentTodo]
		if (input) {
			this.todosRef.child(currentTodo).update({
				text: input,
				list: currentItem.list,
				checked: currentItem.checked,
				timestamp: currentItem.timestamp
			})
			this.setState({
				currentTodo: ''
			})
		}
	}

	toggleToDo = (todoId) => {
		const todos = { ...this.state.todos }
		this.todosRef.child(todoId).update({
			text: todos[todoId].text,
			list: todos[todoId].list,
			checked: !todos[todoId].checked,
			timestamp: todos[todoId].timestamp
		})
	}

	todoDetailsToggle = (id) => {
		const { todos } = this.state
		this.setState({
			details: !this.state.details
		})
		if (id) {
			this.setState({
				input: todos[id].text,
				currentTodo: id
			})
		} else {
			this.setState({
				input: '',
				currentTodo: ''
			})
		}
	}

	toggleMenu = () => {
		const { menuVisibility } = this.state
		if (menuVisibility) {
			this.setState({
				menuVisibility: false,
				menuButtonVisibility: false
			})
		} else {
			this.setState({
				menuVisibility: true,
				menuButtonVisibility: true
			})
		}
	}

	render () {
		const {
			todos,
			overlay,
			currentUser,
			addButtonActive,
			input,
			currentTodo,
			menuVisibility,
			menuButtonVisibility,
			lists,
			isTodosEmpty,
			pathname,
			details
		} = this.state

		const ToDoListComponent =
			(props) =>
				<ToDoList
					{...props}
					todos={todos}
					isTodosEmpty={isTodosEmpty}
					currentUser={currentUser}
					overlay={overlay}
					details={details}
					pathname={pathname}
					addButtonActive={addButtonActive}
					input={input}
					currentTodo={currentTodo}
					removeToDo={this.removeToDo}
					toggleToDo={this.toggleToDo}
					editToDo={this.editToDo}
					modalToggle={this.modalToggle}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					setPathname={this.setPathname}
					toggleMenu={this.toggleMenu}
					todoDetailsToggle={this.todoDetailsToggle}
				/>

		const renderLists = Object.keys(lists).map(list => (
			<Route
				key={list}
				path={`/${lists[list].route}`}
				render={ToDoListComponent}
			/>
		))
		return (
			<Fragment>
				<Nav
					menuVisibility={menuVisibility}
					currentUser={currentUser}
					toggleMenu={this.toggleMenu}
					menuButtonVisibility={menuButtonVisibility}
					handleListChange={this.handleListChange}
					handleListSubmit={this.handleListSubmit}
					lists={lists}
					removeList={this.removeList}
				/>
				<div
					className="container"
				>
					<Header
						currentUser={currentUser}
						pathname={pathname}
						menuButtonVisibility={menuButtonVisibility}
						toggleMenu={this.toggleMenu}
					/>
					<Switch>
						<Route
							path="/"
							render={ToDoListComponent}
						/>
						<Route
							path="/shoping"
							render={ToDoListComponent}
						/>
						{
							renderLists
						}
					</Switch>
				</div>
				<Toggle>
					{
						({ on, toggle }) => (
							<Fragment>
								{
									!on &&
									<span className="icon add"
										onClick={toggle}
									>
									</span>
								}
								{
									on &&
									<Modal
										handleChange={this.handleChange}
										handleSubmit={this.handleSubmit}
										form="todo"
										on={on}
										toggle={toggle}
									/>
								}
							</Fragment>
						)
					}
				</Toggle>
			</Fragment>
		)
	}
}

export default hot(module)(App)
