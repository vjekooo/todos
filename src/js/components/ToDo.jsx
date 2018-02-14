
import React from 'react'
import PropTypes from 'prop-types'
import { getRandColor } from '../helpers'

const ToDo = (props) => {
  const { todo, callOverlayForEdit, toggleToDo, removeToDo } = props
  const isChecked = todo.checked ? 'checked' : 'unchecked'
  const color = {
    backgroundColor: getRandColor(3)
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
          onClick={() => { callOverlayForEdit(todo.id) }}
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
  callOverlayForEdit: PropTypes.func
}

export default ToDo
