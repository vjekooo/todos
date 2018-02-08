
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const { todos, addToDo, removeToDo, toggleToDo } = props
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
      <div>
        <button
          onClick={addToDo}
        >
          add todo
        </button>
      </div>
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
  addToDo: PropTypes.func,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func
}

export default ToDoList
