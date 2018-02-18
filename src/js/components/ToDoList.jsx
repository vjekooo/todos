
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'
import Overlay from './Overlay'

const ToDoList = (props) => {
  const {
    todos,
    currentUser,
    addButtonActive,
    input,
    currentTodo,
    removeToDo,
    toggleToDo,
    editToDo,
    overlay,
    overlayToggle,
    handleSubmit,
    handleChange
  } = props
  const toDo = Object.keys(todos).map(todo =>
    <ToDo
      key={todo}
      todoId={todo}
      todos={todos}
      removeToDo={removeToDo}
      toggleToDo={toggleToDo}
      overlayToggle={overlayToggle}
    />
  )
  const renderToDo = Object.keys(todos).length !== 0
    ? toDo
    : <h3 className="no-todo">Such empty, do something</h3>
  const overlayClass = overlay ? 'overlay visible' : ' overlay hidden'
  const activeClass = addButtonActive ? 'icon add active' : 'icon add non-active'
  const signedUser = currentUser ? renderToDo : <h3>Please sign in</h3>
  return (
    <Fragment>
      <div className="todo">
        <ul>
          {signedUser}
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
  todos: PropTypes.object,
  currentUser: PropTypes.object,
  input: PropTypes.string,
  currentTodo: PropTypes.string,
  addButtonActive: PropTypes.bool,
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
