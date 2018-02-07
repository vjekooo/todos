
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const { todo, removeToDo, toggleToDo } = props
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onClick={() => { toggleToDo(todo.id) }}
      />
      <span>
        {todo.text}
      </span>
      <button
        onClick={() => { removeToDo(todo.id) }}
      >
        delete
      </button>
    </li>
  )
}

ToDo.propTypes = {
  todo: PropTypes.object,
  removeToDo: PropTypes.func,
  checked: PropTypes.bool,
  toggleToDo: PropTypes.func
}

export default ToDo
