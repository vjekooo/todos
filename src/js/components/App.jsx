
import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header'
import { uuidv4, getRandColor, getDate } from '../helpers'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: uuidv4(),
          created: getDate(),
          text: 'Learn React',
          checked: false,
          color: getRandColor(3)
        },
        {
          id: uuidv4(),
          created: getDate(),
          text: 'Finish this app',
          checked: false,
          color: getRandColor(3)
        },
        {
          id: uuidv4(),
          created: getDate(),
          text: 'Chill',
          checked: false,
          color: getRandColor(3)
        }
      ],
      currentTodo: '',
      overlay: false,
      addButtonActive: false,
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
    const { currentTodo } = this.state
    event.preventDefault()
    if (currentTodo) {
      this.editToDo()
    } else {
      this.addToDo()
    }
  }

  addToDo = () => {
    const { input } = this.state
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          created: getDate(),
          text: input,
          checked: false,
          color: getRandColor(3)
        }
      ],
      overlay: false
    })
    this.handleToggleButtonClass()
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
          checked: !todo.checked,
          color: todo.color
        }
      }
    })
    this.setState({
      todos: updatedToDoChecked
    })
  }

  editToDo = () => {
    const { todos, input, currentTodo } = this.state
    const updatedToDoRemove = todos.map(todo => {
      if (todo.id !== currentTodo) {
        return todo
      } else {
        return {
          id: todo.id,
          created: todo.created,
          text: input,
          checked: todo.checked,
          color: todo.color
        }
      }
    })
    if (input) {
      this.setState({
        todos: updatedToDoRemove,
        currentTodo: '',
        overlay: false,
        addButtonActive: false
      })
    }
  }

  overlayToggleEdit = (id) => {
    const { todos } = this.state
    const currentTodo = todos.filter(todo => {
      return todo.id === id
    })
    this.setState({
      currentTodo: currentTodo[0].id
    })
    this.overlayToggleAdd(id)
  }

  overlayToggleAdd = (id) => {
    const { todos, overlay } = this.state
    const isItem = todos.filter(todo => {
      return todo.id === id
    })
    const input = id.target ? '' : isItem[0].text
    if (!overlay) {
      this.setState({
        ...this.state.todos,
        overlay: true,
        input: input
      })
    } else {
      this.setState({
        ...this.state.todos,
        overlay: false,
        input: '',
        currentTodo: null
      })
    }
    this.handleToggleButtonClass()
  }

  handleToggleButtonClass = () => {
    const { addButtonActive } = this.state
    if (!addButtonActive) {
      this.setState({
        addButtonActive: true
      })
    } else {
      this.setState({
        addButtonActive: false
      })
    }
  }

  render () {
    const { todos, overlay, addButtonActive, input, currentTodo } = this.state
    console.log(todos[0].created)
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
          overlayToggleAdd={this.overlayToggleAdd}
          overlayToggleEdit={this.overlayToggleEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App
