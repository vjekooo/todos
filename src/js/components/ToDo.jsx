
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const {
    todos,
    todoId,
    overlayToggle,
    toggleToDo,
    removeToDo
  } = props
  const todo = todos[todoId]
  const isChecked = todo.checked ? 'checked' : 'unchecked'
  // const color = {
  //   backgroundColor: todo.color
  // }
  return (
    <li>
      <span className="input-checked">
        <input
          type="checkbox"
          id={todoId}
          checked={todo.checked}
          onClick={() => { toggleToDo(todoId) }}
        />
        <label htmlFor={todoId}></label>
      </span>
      <span className={`todo-text ${isChecked}`}>
        {todo.text}
      </span>
      <button
        onClick={() => { overlayToggle(todoId) }}
      >
        edit
      </button>
      <span
        className="icon remove"
        onClick={() => { removeToDo(todoId) }}
      >
      </span>
    </li>
  )
}

ToDo.propTypes = {
  todos: PropTypes.object,
  todoId: PropTypes.string,
  removeToDo: PropTypes.func,
  checked: PropTypes.bool,
  toggleToDo: PropTypes.func,
  overlayToggle: PropTypes.func
}

export default ToDo
