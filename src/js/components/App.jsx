
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
      active: false,
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
    if (text) {
      this.setState({
        todos: [
          ...this.state.todos,
          {id: uuid4(), text: text, checked: false}
        ],
        overlay: false
      })
    }
    this.handleAddButtonClass()
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

  callOverlayForEdit = (id) => {
    this.overlayToggle(id)
  }

  editToDo = (id) => {
    // const { todos } = this.state
    // const updatedToDoRemove = todos.map(todo => {
    //   if (todo.id !== id) {
    //     return todo
    //   } else {
    //     return {
    //       id: todo.id,
    //       text: text,
    //       checked: todo.checked
    //     }
    //   }
    // })
    // if (text) {
    //   this.setState({
    //     todos: updatedToDoRemove
    //   })
    // }
  }

  overlayToggle = (id) => {
    const { todos, overlay } = this.state
    const isItem = todos.filter(todo => {
      return todo.id === id
    })
    // const input = id === 'string' ? isItem[0].text : ''
    console.log('typeof: ', typeof id)
    if (id === 'string') {
      console.log('string')
    } else {
      console.log('drugo')
    }
    if (!overlay) {
      this.setState({
        ...this.state.todos,
        overlay: true,
        input: isItem[0].text
      })
    } else {
      this.setState({
        ...this.state.todos,
        overlay: false
      })
    }
    this.handleAddButtonClass()
  }

  handleAddButtonClass = () => {
    const { active } = this.state
    if (!active) {
      this.setState({
        active: true
      })
    } else {
      this.setState({
        active: false
      })
    }
  }

  render () {
    const { todos, overlay, active, input } = this.state
    console.log('state input: ', input)
    return (
      <div className="container">
        <Header />
        <ToDoList
          todos={todos}
          overlay={overlay}
          active={active}
          input={input}
          addToDo={this.addToDo}
          removeToDo={this.removeToDo}
          toggleToDo={this.toggleToDo}
          editToDo={this.editToDo}
          overlayToggle={this.overlayToggle}
          callOverlayForEdit={this.callOverlayForEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App
