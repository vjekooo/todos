
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'
import Overlay from './Overlay'

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
      <Overlay
        input={input}
        overlayClass={overlayClass}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      >
      </Overlay>
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
