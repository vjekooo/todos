
import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoStats from './ToDoStats'
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
      ]
    }
  }

  addToDo = () => {
    const text = prompt('Add some text')
    if (text) {
      this.setState({
        todos: [
          ...this.state.todos,
          {id: uuid4(), text: text, checked: false}
        ]
      })
    }
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

  render () {
    const { todos } = this.state
    return (
      <div className="container">
        <Header />
        <ToDoStats
          todos={todos}
          addToDo={this.addToDo}
        />
        <ToDoList
          todos={todos}
          addToDo={this.addToDo}
          removeToDo={this.removeToDo}
          toggleToDo={this.toggleToDo}
          editToDo={this.editToDo}
        />
      </div>
    )
  }
}

export default App
