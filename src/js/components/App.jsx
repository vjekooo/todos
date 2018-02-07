
import React, { Component } from 'react'
import ToDoList from './ToDoList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          text: 'noice'
        }
      ]
    }
  }
  render () {
    const { todos } = this.state
    return (
      <div className="container">
        <ToDoList todos={todos} />
      </div>
    )
  }
}

export default App
