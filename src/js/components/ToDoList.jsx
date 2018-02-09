
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const { todos, removeToDo, toggleToDo, editToDo, overlay, overlayToggle } = props
  const overlaySwitch = overlay ? 'add-task' : 'hidden'
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
      <span className="icon add"
        onClick={overlayToggle}
      >
      </span>
      <div className={overlaySwitch}>
        <form>
          <input type="text" id="task" />
          <label htmlFor="task">Add new task</label>
        </form>
      </div>
    </Fragment>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  overlay: PropTypes.bool,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func,
  overlayToggle: PropTypes.func
}

export default ToDoList
