
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ToDoStats = (props) => {
  const { todos } = props
  const toDosLength = todos.length
  const uncheckedLength = todos.filter(todo => !todo.checked).length
  return (
    <Fragment>
      <div className="todo-stats">
        <span>ToDos count: {toDosLength}</span>
        <span>Unchecked ToDos count: {uncheckedLength}</span>
      </div>
    </Fragment>
  )
}

ToDoStats.propTypes = {
  todos: PropTypes.array
}

export default ToDoStats
