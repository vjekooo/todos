
import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoStats from './ToDoStats'

let id = 0

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: id,
          text: 'Learn React',
          checked: false
        }
      ]
    }
  }

  addToDo = () => {
    const text = prompt('Add some text')
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id += 1, text: text, checked: false}
      ]
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

  render () {
    const { todos } = this.state
    return (
      <div className="container">
        <ToDoStats
          todos={todos}
        />
        <ToDoList
          todos={todos}
          addToDo={this.addToDo}
          removeToDo={this.removeToDo}
          toggleToDo={this.toggleToDo}
        />
      </div>
    )
  }
}

export default App
