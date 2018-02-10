
import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header'
import uuid4 from '../helpers'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: uuid4(),
          text: 'Learn React',
          checked: false
        },
        {
          id: uuid4(),
          text: 'Finish this app',
          checked: false
        },
        {
          id: uuid4(),
          text: 'Chill',
          checked: false
        }
      ],
      overlay: false,
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      todos: [
        ...this.state.todos
      ],
      overlay: true,
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { input } = this.state
    this.addToDo(input)
    event.preventDefault()
  }

  addToDo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: uuid4(), text: text, checked: false}
      ],
      overlay: false
    })
  }

  removeToDo = (id) => {
    const { todos } = this.state
    const updatedToDoState = todos.filter(todo => todo.id !== id)
    this.setState({
      todos: updatedToDoState
    })
  }

  toggleToDo = (id) => {
    const { todos } = this.state
    const updatedToDoChecked = todos.map(todo => {
      if (todo.id !== id) {
        return todo
      } else {
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }
      }
    })
    this.setState({
      todos: updatedToDoChecked
    })
  }

  editToDo = (id) => {
    const { todos } = this.state
    const text = prompt('Edit text')
    const updatedToDoRemove = todos.map(todo => {
      if (todo.id !== id) {
        return todo
      } else {
        return {
          id: todo.id,
          text: text,
          checked: todo.checked
        }
      }
    })
    if (text) {
      this.setState({
        todos: updatedToDoRemove
      })
    }
  }

  overlayToggle = () => {
    const { overlay } = this.state
    if (!overlay) {
      this.setState({
        ...this.state.todos,
        overlay: true
      })
    } else {
      this.setState({
        ...this.state.todos,
        overlay: false
      })
    }
  }

  render () {
    const { todos, overlay, input } = this.state
    return (
      <div className="container">
        <Header />
        <ToDoList
          todos={todos}
          overlay={overlay}
          input={input}
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
