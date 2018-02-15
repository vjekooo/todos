
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const { todo, overlayToggle, toggleToDo, removeToDo } = props
  const isChecked = todo.checked ? 'checked' : 'unchecked'
  const color = {
    backgroundColor: todo.color
  }
  return (
    <li style={color}>
      <span>
        <input
          type="checkbox"
          checked={todo.checked}
          onClick={() => { toggleToDo(todo.id) }}
        />
        <span className={isChecked}>
          {todo.text}
        </span>
      </span>
      <span>
        <button
          onClick={() => { overlayToggle(todo.id) }}
        >
          edit
        </button>
        <span
          className="icon remove"
          onClick={() => { removeToDo(todo.id) }}
        >
        </span>
      </span>
    </li>
  )
}

ToDo.propTypes = {
  todo: PropTypes.object,
  removeToDo: PropTypes.func,
  checked: PropTypes.bool,
  toggleToDo: PropTypes.func,
  overlayToggle: PropTypes.func
}

export default ToDo
