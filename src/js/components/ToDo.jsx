
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const { todo, removeToDo } = props
  return (
    <li>
      <input type="checkbox" />
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
  removeToDo: PropTypes.func
}

export default ToDo
