
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ToDoStats = (props) => {
  const { todos } = props
  return (
    <Fragment>
      <div className="todo-stats">
        <span>ToDos count: {todos.length}</span>
        <span>Unchecked ToDos count: {todos.filter(todo => !todo.checked).length}</span>
      </div>
    </Fragment>
  )
}

ToDoStats.propTypes = {
  todos: PropTypes.array
}

export default ToDoStats
