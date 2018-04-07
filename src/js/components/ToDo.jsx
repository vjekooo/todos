
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const {
    todo,
    todoId,
    overlayToggle,
    toggleToDo,
    removeToDo
  } = props
  const isChecked = todo.checked ? 'checked' : 'unchecked'
  // const color = {
  //   backgroundColor: todo.color
  // }
  return (
    <li className="todo__item">
      <span className="todo__input--checked">
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
        className="btn"
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
  todo: PropTypes.object,
  todoId: PropTypes.string,
  removeToDo: PropTypes.func,
  checked: PropTypes.bool,
  toggleToDo: PropTypes.func,
  overlayToggle: PropTypes.func
}

export default ToDo
