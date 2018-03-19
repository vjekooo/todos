
import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import ToDoList from './ToDoList'
import Header from './Header'
import Nav from './Nav'
import Overlay from './Overlay'
import { getDate, getRandColor } from '../helpers'
import { auth, database } from '../database'

class App extends Component {
  constructor (props) {
    super(props)
    this.usersRef = null
    this.userRef = null
    this.state = {
      todos: {},
      currentTodo: '',
      currentUser: null,
      overlay: false,
      addButtonActive: false,
      input: '',
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
      this.userRef.on('value', (snapshot) => {
        this.setState({
          todos: snapshot.val().todos
        })
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      todos: {
        ...this.state.todos
      },
      overlay: true,
      input: event.target.value
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

  addToDo = () => {
    const { input } = this.state
    const todos = {...this.state.todos}
    todos[`todo-${getDate()}`] = {
      text: input,
      checked: false,
      color: getRandColor(3)
    }
    this.userRef.set({
      todos
    })
    this.setState({
      overlay: false,
      addButtonActive: false
    })
  }

  removeToDo = (id) => {
    const todos = {...this.state.todos}
    delete todos[id]
    this.userRef.set({
      todos
    })
  }

  editToDo = () => {
    const { input, currentTodo } = this.state
    const todos = {...this.state.todos}
    const currentItem = todos[currentTodo]
    todos[currentTodo] = {
      text: input,
      checked: currentItem.checked,
      color: currentItem.color
    }
    if (input) {
      this.userRef.set({
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
      checked: !currentItem.checked,
      color: currentItem.color
    }
    this.userRef.set({
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
      menuButtonVisibility
    } = this.state
    const overlayClass = overlay ? 'overlay visible' : ' overlay hidden'
    // const style = menuVisibility
    //   ? { left: '300px' }
    //   : { left: 0 }
    return (
      <Fragment>
        <Nav
          menuVisibility={menuVisibility}
          currentUser={currentUser}
          toggleMenu={this.toggleMenu}
          menuButtonVisibility={menuButtonVisibility}
        />
        <div
          className="container"
          // style={style}
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
          />
        </div>
        <Overlay
          input={input}
          currentTodo={currentTodo}
          overlayClass={overlayClass}
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
