
import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const { todos } = props
  return (
    <div className="todo">
      {
        todos.map(todo => <ToDo key={todo.text} todo={todo} />)
      }
    </div>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array
}

export default ToDoList
