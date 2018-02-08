
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const { todo, removeToDo, toggleToDo } = props
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
      <span
        className="icon-minus"
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
  toggleToDo: PropTypes.func
}

export default ToDo
