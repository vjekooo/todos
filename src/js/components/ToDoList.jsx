
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'
import Overlay from './Overlay'

const ToDoList = (props) => {
  const {
    todos,
    active,
    input,
    currentTodo,
    removeToDo,
    toggleToDo,
    editToDo,
    overlay,
    overlayToggle,
    callOverlayForEdit,
    handleSubmit,
    handleChange
  } = props
  const toDos = todos.map(todo =>
    <ToDo
      key={todo.text}
      todo={todo}
      removeToDo={removeToDo}
      toggleToDo={toggleToDo}
      callOverlayForEdit={callOverlayForEdit}
    />
  )
  const overlayClass = overlay ? 'overlay visible' : ' overlay hidden'
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
        currentTodo={currentTodo}
        overlayClass={overlayClass}
        editToDo={editToDo}
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
  currentTodo: PropTypes.string,
  active: PropTypes.bool,
  overlay: PropTypes.bool,
  addToDo: PropTypes.func,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func,
  overlayToggle: PropTypes.func,
  callOverlayForEdit: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default ToDoList
