
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
			currentList: '',
			currentUser: null,
			input: '',
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
			this.listsRef.once('value', (snapshot) => {
				if (!snapshot.child('list01').exists() && !snapshot.child('list02').exists()) {
					this.listsRef.child('list01').set({
						route: '/',
						filterByCompleted: false,
						sort: '0',
						fixed: true
					})
					this.listsRef.child('list02').set({
						route: 'shopping',
						filterByCompleted: false,
						sort: '0',
						fixed: true
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

	setPathname = (pathname, listId) => {
		this.setState({
			pathname: pathname,
			currentList: listId
		})
	}

	setCurrentList = (value) => {
		this.setState({
			currentList: value
		})
	}

	handleChange = (event) => {
		this.setState({
			input: event.target.value
		})
	}

	handleSubmit = (type, action, event) => {
		event.preventDefault()
		if (type === 'todo' && action === 'add') {
			this.addToDo()
		}
		if (type === 'todo' && action === 'edit') {
			this.editToDo()
		}
		if (type === 'list' && action === 'add') {
			this.addList()
		}
		if (type === 'list' && action === 'edit') {
			this.editList()
		}
	}

	addList = () => {
		const { input } = this.state
		if (input) {
			this.listsRef.push({
				route: input.toLocaleLowerCase(),
				filterByCompleted: false,
				sort: '0',
				fixed: false
			})
			this.setState({
				input: ''
			})
		}
	}

	addToDo = () => {
		const { input, currentList } = this.state
		if (input) {
			this.todosRef.push({
				text: input,
				listId: currentList,
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
		if (input) {
			this.todosRef.child(currentTodo).update({
				text: input,
				listId: todos[currentTodo].listId,
				checked: todos[currentTodo].checked,
				timestamp: todos[currentTodo].timestamp
			})
			this.setState({
				currentTodo: ''
			})
		}
	}

	editList = () => {
		const { input, lists, currentList } = this.state
		if (input) {
			this.listsRef.child(currentList).update({
				route: input,
				filterByCompleted: lists[currentList].filterByCompleted,
				sort: lists[currentList].sort,
				fixed: lists[currentList].fixed
			})
			this.setState({
				currentList: ''
			})
		}
	}

	toggleToDo = (todoId) => {
		const todos = { ...this.state.todos }
		this.todosRef.child(todoId).update({
			text: todos[todoId].text,
			listId: todos[todoId].listId,
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

	setInput = (value, type) => {
		const {todos, lists} = this.state
		if (todos[value]) {
			this.setState({
				input: todos[value].text,
				currentTodo: value
			})
		}
		if (lists[value]) {
			this.setState({
				input: lists[value].route
			})
		}
	}

	toggleFilterByCompleted = () => {
		const { lists, currentList } = this.state
		this.listsRef.child(currentList).update({
			route: lists[currentList].route,
			filterByCompleted: !lists[currentList].filterByCompleted,
			sort: !lists[currentList].sort,
			fixed: lists[currentList].fixed
		})
	}

	toggleSort = (event) => {
		const { lists, currentList } = this.state
		this.listsRef.child(currentList).update({
			route: lists[currentList].route,
			filterByCompleted: lists[currentList].filterByCompleted,
			sort: event.target.getAttribute('data-sort'),
			fixed: lists[currentList].fixed
		})
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
			input,
			currentTodo,
			menuVisibility,
			menuButtonVisibility,
			lists,
			isTodosEmpty,
			pathname,
			details,
			currentList
		} = this.state

		const ToDoListComponent =
			(props) =>
				<ToDoList
					{...props}
					todos={todos}
					lists={lists}
					isTodosEmpty={isTodosEmpty}
					currentUser={currentUser}
					overlay={overlay}
					details={details}
					pathname={pathname}
					input={input}
					currentList={currentList}
					currentTodo={currentTodo}
					removeToDo={this.removeToDo}
					toggleToDo={this.toggleToDo}
					editToDo={this.editToDo}
					modalToggle={this.modalToggle}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					setPathname={this.setPathname}
					toggleMenu={this.toggleMenu}
					setInput={this.setInput}
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
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					lists={lists}
					removeList={this.removeList}
					setPathname={this.setPathname}
					setCurrentList={this.setCurrentList}
				/>
				<div
					className="container"
				>
					<Header
						currentUser={currentUser}
						pathname={pathname}
						menuButtonVisibility={menuButtonVisibility}
						toggleMenu={this.toggleMenu}
						removeList={this.removeList}
						lists={lists}
						currentList={currentList}
						editList={this.editList}
						input={input}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						setInput={this.setInput}
						toggleFilterByCompleted={this.toggleFilterByCompleted}
						toggleSort={this.toggleSort}
					/>
					<Switch>
						<Route
							path="/"
							render={ToDoListComponent}
						/>
						<Route
							path="/shopping"
							render={ToDoListComponent}
						/>
						{
							renderLists
						}
					</Switch>
				</div>
				<Toggle>
					{
						({on, toggle}) => (
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
										on={on}
										toggle={toggle}
										type="todo"
										action="add"
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
