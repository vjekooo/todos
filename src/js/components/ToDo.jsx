
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const { todo, removeToDo, toggleToDo, editToDo } = props
  const isChecked = todo.checked ? 'checked' : 'unchecked'
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onClick={() => { toggleToDo(todo.id) }}
      />
      <span className={isChecked}>
        {todo.text}
      </span>
      <button
        onClick={() => { editToDo(todo.id) }}
      >
        edit
      </button>
      <span
        className="icon icon-minus"
        onClick={() => { removeToDo(todo.id) }}
      >
      </span>
    </li>
  )
}

ToDo.propTypes = {
  todo: PropTypes.object,
  removeToDo: PropTypes.func,
  checked: PropTypes.bool,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func
}

export default ToDo
