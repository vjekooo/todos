
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const {
    todos,
    currentUser,
    addButtonActive,
    removeToDo,
    toggleToDo,
    overlayToggle
  } = props
  const toDo = Object.keys(todos).map(todo => {
    return (
      <ToDo
        key={todo}
        todoId={todo}
        todo={todos[todo]}
        removeToDo={removeToDo}
        toggleToDo={toggleToDo}
        overlayToggle={overlayToggle}
      />
    )
  }).sort((a, b) => {
    return a.props.todo.checked > b.props.todo.checked
  })
  const renderToDo = Object.keys(todos).length !== 0
    ? toDo
    : <h3 className="no-todo">Such empty, do something</h3>
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
    </Fragment>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.object,
  currentUser: PropTypes.object,
  input: PropTypes.string,
  currentTodo: PropTypes.string,
  addButtonActive: PropTypes.bool,
  addToDo: PropTypes.func,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func,
  overlayToggle: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default ToDoList
