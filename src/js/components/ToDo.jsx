
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const { todos, todoId, overlayToggle, toggleToDo, removeToDo } = props
  const todo = todos[todoId]
  const isChecked = todo.checked ? 'checked' : 'unchecked'
  const color = {
    backgroundColor: todo.color
  }
  console.log(todo.checked)
  return (
    <li style={color}>
      <span>
        <input
          type="checkbox"
          checked={todo.checked}
          onClick={() => { toggleToDo(todoId) }}
        />
        <span className={isChecked}>
          {todo.text}
        </span>
      </span>
      <span>
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
