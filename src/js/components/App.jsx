
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ToDoList from './ToDoList'
import Header from './Header'
import Nav from './Nav'
import Overlay from './Overlay'
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
			currentTodo: '',
			currentUser: null,
			overlay: false,
			details: false,
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
				if (snapshot.child('todos').exists()) {
					this.setState({
						todos: snapshot.val().todos
					})
				} else {
					this.setState({
						isTodosEmpty: true
					})
				}
			})
			this.listsRef.on('value', (snapshot) => {
				if (snapshot.child('lists').exists()) {
					this.setState({
						lists: snapshot.val().lists
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
			overlay: true,
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
		const objKey = `list-${getDate()}`
		const newList = {
			[objKey]: {
				route: listInput.toLocaleLowerCase()
			}
		}
		const listsObj = { ...this.state.lists, ...newList }
		if (listInput) {
			this.listsRef.set({
				lists: listsObj
			})
		}
	}

	addToDo = () => {
		const { input, pathname } = this.state
		const todos = { ...this.state.todos }
		todos[`todo-${getDate()}`] = {
			text: input,
			list: pathname,
			checked: false,
			timestamp: getDate()
		}
		if (input) {
			this.todosRef.set({
				todos
			})
			this.setState({
				overlay: false,
				addButtonActive: false
			})
		}
	}

	removeToDo = () => {
		const todos = {...this.state.todos}
		const { currentTodo } = this.state
		delete todos[currentTodo]
		this.setState({
			details: !this.state.details,
			input: ''
		})
		this.todosRef.set({
			todos
		})
	}

	removeList = (id) => {
		const lists = {...this.state.lists}
		delete lists[id]
		this.listsRef.set({
			lists
		})
	}

	editToDo = () => {
		const { input, currentTodo } = this.state
		const todos = { ...this.state.todos }
		const currentItem = todos[currentTodo]
		todos[currentTodo] = {
			text: input,
			list: currentItem.list,
			checked: currentItem.checked,
			timestamp: currentItem.timestamp
		}
		if (input) {
			this.todosRef.set({
				todos
			})
			this.setState({
				currentTodo: {},
				overlay: false,
				addButtonActive: false
			})
		}
	}

	toggleToDo = (id) => {
		const todos = { ...this.state.todos }
		const currentItem = todos[id]
		todos[id] = {
			text: currentItem.text,
			list: currentItem.list,
			checked: !currentItem.checked,
			timestamp: currentItem.timestamp
		}
		this.todosRef.set({
			todos
		})
	}

	overlayToggle = () => {
		this.setState({
			overlay: !this.state.overlay,
			addButtonActive: !this.state.addButtonActive
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
					overlayToggle={this.overlayToggle}
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
					overlayToggle={this.overlayToggle}
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
				<Overlay
					input={input}
					currentTodo={currentTodo}
					overlay={overlay}
					editToDo={this.editToDo}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				>
				</Overlay>
			</Fragment>
		)
	}
}

export default hot(module)(App)
