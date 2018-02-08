
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const { todos, removeToDo, toggleToDo } = props
  const toDos = todos.map(todo =>
    <ToDo
      key={todo.text}
      todo={todo}
      removeToDo={removeToDo}
      toggleToDo={toggleToDo}
    />
  )
  return (
    <Fragment>
      <div className="todo">
        <ul>
          {toDos}
        </ul>
      </div>
    </Fragment>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func
}

export default ToDoList
