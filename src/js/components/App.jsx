
import React, { Component } from 'react'
import ToDoList from './ToDoList'

let id = 0

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: id,
          text: 'noice',
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
    const updatedChecked = todos.map(todo => {
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
      todos: updatedChecked
    })
  }

  render () {
    const { todos } = this.state
    console.log(this.state.todos)
    return (
      <div className="container">
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
