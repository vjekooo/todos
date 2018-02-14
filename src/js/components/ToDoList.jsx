
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'
import Overlay from './Overlay'

const ToDoList = (props) => {
  const {
    todos,
    addButtonActive,
    input,
    currentTodo,
    removeToDo,
    toggleToDo,
    editToDo,
    overlay,
    overlayToggleAdd,
    overlayToggleEdit,
    handleSubmit,
    handleChange
  } = props
  const toDo = todos.map(todo =>
    <ToDo
      key={todo.text}
      todo={todo}
      removeToDo={removeToDo}
      toggleToDo={toggleToDo}
      overlayToggleEdit={overlayToggleEdit}
    />
  )
  const renderToDo = todos.length !== 0 ? toDo : <h3 className="no-todo">Such empty, do something</h3>
  const overlayClass = overlay ? 'overlay visible' : ' overlay hidden'
  const activeClass = addButtonActive ? 'icon add active' : 'icon add non-active'
  return (
    <Fragment>
      <div className="todo">
        <ul>
          {renderToDo}
        </ul>
      </div>
      <span className={activeClass}
        onClick={overlayToggleAdd}
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
  addButtonActive: PropTypes.bool,
  overlay: PropTypes.bool,
  addToDo: PropTypes.func,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func,
  overlayToggleAdd: PropTypes.func,
  overlayToggleEdit: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default ToDoList
