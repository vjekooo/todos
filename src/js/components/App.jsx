
import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header'
import { getDate, getRandColor } from '../helpers'
import { database } from '../database'

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

  componentDidMount () {
    database.ref('/').on('value', () => {
      console.log('DATA CHANGED')
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
    const remove = Object.keys(todos).filter(todo => todo === id)
    delete todos[remove]
    this.setState({
      todos
    })
  }

  // toggleToDo = (id) => {
  //   const { todos } = this.state
  //   const updatedToDoChecked = todos.map(todo => {
  //     if (todo.id !== id) {
  //       return todo
  //     } else {
  //       return {
  //         id: todo.id,
  //         text: todo.text,
  //         checked: !todo.checked,
  //         color: todo.color
  //       }
  //     }
  //   })
  //   this.setState({
  //     todos: updatedToDoChecked
  //   })
  // }

  // editToDo = () => {
  //   const { todos, input, currentTodo } = this.state
  //   const updatedToDoRemove = todos.map(todo => {
  //     if (todo.id !== currentTodo) {
  //       return todo
  //     } else {
  //       return {
  //         id: todo.id,
  //         created: todo.created,
  //         text: input,
  //         checked: todo.checked,
  //         color: todo.color
  //       }
  //     }
  //   })
  //   if (input) {
  //     this.setState({
  //       todos: updatedToDoRemove,
  //       currentTodo: '',
  //       overlay: false,
  //       addButtonActive: false
  //     })
  //   }
  // }

  overlayToggle = (id) => {
    const { todos, overlay } = this.state
    const isItem = Object.keys(todos).filter(todo => {
      return todo
    })
    const currentItem = todos[isItem]
    const input = Object.prototype.toString.call(id) === '[object Object]' ? '' : currentItem.text
    if (!overlay) {
      this.setState({
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
    // console.log(overlay, addButtonActive)
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
