
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const {
    todos,
    active,
    input,
    removeToDo,
    toggleToDo,
    editToDo,
    overlay,
    overlayToggle,
    handleSubmit,
    handleChange
  } = props
  const toDos = todos.map(todo =>
    <ToDo
      key={todo.text}
      todo={todo}
      removeToDo={removeToDo}
      toggleToDo={toggleToDo}
      editToDo={editToDo}
    />
  )
  const overlayClass = overlay ? 'overlay' : 'hidden'
  const activeClass = active ? 'icon add active' : 'icon add non-active'
  return (
    <Fragment>
      <div className="todo">
        <ul>
          {toDos}
        </ul>
      </div>
      <span className={activeClass}
        onClick={overlayToggle}
      >
      </span>
      <div className={overlayClass}>
        <div className="add-task">
          <form
            onSubmit={handleSubmit}
          >
            <label>
              Task:
              <input
                type="text"
                value={input}
                onChange={handleChange}
              />
            </label>
            <input className="add-button" type="submit" value="Add"/>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  input: PropTypes.string,
  active: PropTypes.bool,
  overlay: PropTypes.bool,
  addToDo: PropTypes.func,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func,
  overlayToggle: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default ToDoList
