
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const { todos, removeToDo, toggleToDo, editToDo } = props
  const toDos = todos.map(todo =>
    <ToDo
      key={todo.text}
      todo={todo}
      removeToDo={removeToDo}
      toggleToDo={toggleToDo}
      editToDo={editToDo}
    />
  )
  return (
    <Fragment>
      <div className="todo">
        <ul>
          {toDos}
        </ul>
      </div>
      <span className="icon add">

      </span>
      <div className="add-task hidden">
        <form>
          <input type="text" id="task" />
          <label htmlFor="task">Add new task</label>
          <input type="text" id="notes" />
          <label htmlFor="notes">Add new note</label>
        </form>
      </div>
    </Fragment>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func
}

export default ToDoList
