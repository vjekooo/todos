
import React, { Component } from 'react'
import ToDoList from './ToDoList'

let id = 0

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 0,
          text: 'noice'
        }
      ]
    }
  }

  addToDo = () => {
    const text = prompt('Add some text')
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id++, text}
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

  render () {
    const { todos } = this.state
    return (
      <div className="container">
        <ToDoList
          todos={todos}
          addToDo={this.addToDo}
          removeToDo={this.removeToDo}
        />
      </div>
    )
  }
}

export default App
