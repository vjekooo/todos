
import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header'
import { getDate, getRandColor } from '../helpers'
import { auth, database } from '../database'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: {},
      currentTodo: '',
      currentUser: null,
      overlay: false,
      addButtonActive: false,
      input: ''
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged(currentUser => {
      console.log(currentUser)
      this.setState({
        currentUser: currentUser
      })
    })
    database.ref().on('value', (snapshot) => {
      this.setState({
        todos: snapshot.val().todos
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
    database.ref().set({
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
    database.ref().set({
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
      database.ref().set({
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
    database.ref().set({
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

  render () {
    const { todos, overlay, currentUser, addButtonActive, input, currentTodo } = this.state
    return (
      <div className="container">
        <Header
          currentUser={currentUser}
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
    )
  }
}

export default App
