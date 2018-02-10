
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const { todos, input, removeToDo, toggleToDo, editToDo, overlay, overlayToggle, handleSubmit, handleChange } = props
  const overlaySwitch = overlay ? 'overlay' : 'hidden'
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
        <span
          className="icon remove"
          onClick={overlayToggle}
        >
        </span>
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
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  input: PropTypes.string,
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
