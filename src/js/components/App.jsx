
import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header'
import { getDate, getRandColor } from '../helpers'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: {
        'todo-1234567': {
          text: 'Learn react',
          checked: false,
          color: getRandColor(3)
        },
        'todo-1234789': {
          text: 'Whoa',
          checked: false,
          color: getRandColor(3)
        }
      },
      currentTodo: '',
      overlay: false,
      addButtonActive: false,
      input: ''
    }
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
    this.setState({
      todos: todos,
      overlay: false,
      addButtonActive: false
    })
  }

  removeToDo = (id) => {
    const todos = {...this.state.todos}
    delete todos[id]
    this.setState({
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
      this.setState({
        todos: todos,
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
    this.setState({
      todos: todos
    })
  }

  overlayToggle = (id) => {
    const { todos, overlay } = this.state
    const isItem = Object.keys(todos).filter(todo => {
      return todo === id
    })
    const currentItem = todos[isItem]
    const input = Object.prototype.toString.call(id) === '[object Object]' ? '' : currentItem.text
    if (!overlay) {
      this.setState({
        currentTodo: id,
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
    const { todos, overlay, addButtonActive, input, currentTodo } = this.state
    console.log(todos)
    return (
      <div className="container">
        <Header />
        <ToDoList
          todos={todos}
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
