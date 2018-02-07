
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

  addToDo = () => {
    const text = prompt('Add some text')
    this.setState({
      todos: [
        ...this.state.todos,
        {text}
      ]
    })
  }

  render () {
    const { todos } = this.state
    return (
      <div className="container">
        <ToDoList
          todos={todos}
          addToDo={this.addToDo}
        />
      </div>
    )
  }
}

export default App
