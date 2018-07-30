
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ToDoList from './ToDoList'
import Header from './Header'
import Nav from './Nav'
import { getDate } from '../helpers'
import { auth, database } from '../database'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.usersRef = null
    this.userRef = null
    this.state = {
      todos: {},
      lists: {},
      currentTodo: '',
      currentUser: null,
      overlay: false,
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
        this.setState({
          todos: snapshot.val().todos
        })
      })
      this.listsRef.on('value', (snapshot) => {
        this.setState({
          lists: snapshot.val().lists
        })
      })
    })
  }

  sendPathname = (data) => {
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
    if (currentTodo) {
      this.editToDo()
    } else {
      this.addToDo()
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
    const listsObj = {...this.state.lists, ...newList}
    if (listInput) {
      this.listsRef.set({
        lists: listsObj
      })
    }
  }

  addToDo = () => {
    const { input, pathname } = this.state
    const todos = {...this.state.todos}
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

  removeToDo = (id) => {
    const todos = {...this.state.todos}
    delete todos[id]
    this.todosRef.set({
      todos
    })
  }

  editToDo = () => {
    const { input, currentTodo } = this.state
    const todos = {...this.state.todos}
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
        currentTodo: '',
        overlay: false,
        addButtonActive: false
      })
    }
  }

  toggleToDo = (id) => {
    const todos = {...this.state.todos}
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

  overlayToggle = (id) => {
    const { todos, overlay } = this.state
    const currentItem = todos[id]
    const input = Object.prototype.toString.call(id) === '[object Object]' ? '' : currentItem.text
    const currentTodo = Object.prototype.toString.call(id) === '[object Object]' ? null : id
    if (!overlay) {
      this.setState({
        currentTodo: currentTodo,
        overlay: true,
        input: input,
        addButtonActive: true
      })
    } else {
      this.setState({
        overlay: false,
        input: '',
        currentTodo: null,
        addButtonActive: false
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
      lists
    } = this.state
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
        />
        <div
          className="container"
        >
          <Header
            currentUser={currentUser}
            toggleMenu={this.toggleMenu}
            menuButtonVisibility={menuButtonVisibility}
          />
          <Switch>
            <Route
              path="/"
              render={(props) =>
                <
                  ToDoList
                  {...props}
                  todos={todos}
                  currentUser={currentUser}
                  overlay={overlay}
                  addButtonActive={addButtonActive}
                  input={input}
                  currentTodo={currentTodo}
                  removeToDo={this.removeToDo}
                  toggleToDo={this.toggleToDo}
                  editToDo={this.editToDo}
                  overlayToggle={this.overlayToggle}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  sendPathname={this.sendPathname}
                />
              }
            />
            <Route
              path="/shoping"
              render={(props) =>
                <
                  ToDoList
                  {...props}
                  todos={todos}
                  currentUser={currentUser}
                  overlay={overlay}
                  addButtonActive={addButtonActive}
                  input={input}
                  currentTodo={currentTodo}
                  removeToDo={this.removeToDo}
                  toggleToDo={this.toggleToDo}
                  editToDo={this.editToDo}
                  overlayToggle={this.overlayToggle}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  sendPathname={this.sendPathname}
                />
              }
            />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default hot(module)(App)
