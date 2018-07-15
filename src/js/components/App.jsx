
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ToDoList from './ToDoList'
import Header from './Header'
import { getDate } from '../helpers'
import { auth, database } from '../database'
import StateContext from './AppContext'

class App extends Component {
	constructor (props) {
		super(props)
		this.usersRef = null
		this.userRef = null
		this.state = {
			todos: {},
			currentTodo: null,
			currentUser: null,
			input: ''
		}
	}

	componentDidMount () {
		auth.onAuthStateChanged(currentUser => {
			this.setState({
				currentUser: currentUser
			})
			this.usersRef = database.ref('/users')
			this.userRef = this.usersRef.child(currentUser.uid)
			this.userRef.on('value', (snapshot) => {
				if (snapshot.val().todos) {
					this.setState({
						todos: snapshot.val().todos
					})
				}
			})
		})
	}

	handleChange = (event) => {
		this.setState({
			todos: {
				...this.state.todos
			},
			input: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const { currentTodo } = this.state
		if (currentTodo) {
			this.editToDo(currentTodo)
		} else {
			this.addToDo()
		}
	}

	addToDo = () => {
		const { input } = this.state
		const todos = {...this.state.todos}
		todos[`todo-${getDate()}`] = {
			text: input,
			checked: false,
			timestamp: getDate()
		}
		if (input) {
			this.userRef.set({
				todos
			})
		}
	}

	removeToDo = (id) => {
		const todos = {...this.state.todos}
		delete todos[id]
		this.userRef.set({
			todos
		})
	}

	editToDo = (todo) => {
		const { input } = this.state
		const todos = {...this.state.todos}
		todos[todo] = {
			text: input,
			checked: todo.checked,
			timestamp: todo.timestamp
		}
		if (input) {
			this.userRef.set({
				todos
			})
		}
	}

	toggleToDo = (id) => {
		const todos = {...this.state.todos}
		const currentItem = todos[id]
		todos[id] = {
			text: currentItem.text,
			checked: !currentItem.checked,
			timestamp: currentItem.timestamp
		}
		this.userRef.set({
			todos
		})
	}

	setCurrentToDo = (todo) => {
		this.setState({
			currentTodo: todo
		})
	}

	// overlayToggle = (id) => {
	// 	const { todos, overlay } = this.state
	// 	const currentItem = todos[id]
	// 	const input = Object.prototype.toString.call(id) === '[object Object]' ? '' : currentItem.text
	// 	const currentTodo = Object.prototype.toString.call(id) === '[object Object]' ? null : id
	// 	if (!overlay) {
	// 		this.setState({
	// 			currentTodo: currentTodo,
	// 			overlay: true,
	// 			input: input,
	// 			addButtonActive: true
	// 		})
	// 	} else {
	// 		this.setState({
	// 			overlay: false,
	// 			input: '',
	// 			currentTodo: null,
	// 			addButtonActive: false
	// 		})
	// 	}
	// }

	// toggleMenu = () => {
	// 	const { menuVisibility } = this.state
	// 	if (menuVisibility) {
	// 		this.setState({
	// 			menuVisibility: false,
	// 			menuButtonVisibility: false
	// 		})
	// 	} else {
	// 		this.setState({
	// 			menuVisibility: true,
	// 			menuButtonVisibility: true
	// 		})
	// 	}
	// }

	render () {
		const {
			todos,
			overlay,
			currentUser,
			addButtonActive,
			input,
			currentTodo,
			menuButtonVisibility
		} = this.state
		return (
			<StateContext.Provider
				value={{
					input: this.state.input,
					currentTodo: this.state.currentTodo,
					handleSubmit: this.handleSubmit,
					handleChange: this.handleChange,
					setCurrentToDo: this.setCurrentToDo
				}}
			>
				<div
					className="container"
				>
					<Header
						currentUser={currentUser}
						toggleMenu={this.toggleMenu}
						menuButtonVisibility={menuButtonVisibility}
					/>
					<ToDoList
						todos={todos}
						currentUser={currentUser}
						overlay={overlay}
						addButtonActive={addButtonActive}
						input={input}
						currentTodo={currentTodo}
						addToDo={this.addToDo}
						removeToDo={this.removeToDo}
						toggleToDo={this.toggleToDo}
						editToDo={this.editToDo}
						overlayToggle={this.overlayToggle}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						setCurrentToDo={this.setCurrentToDo}
					/>
				</div>
			</StateContext.Provider>
		)
	}
}

export default hot(module)(App)
