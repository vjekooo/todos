
import React from 'react'
import PropTypes from 'prop-types'

const ToDo = (props) => {
  const { todo } = props
  return (
    <li>
      <input type="checkbox" />
      <span>
        {todo.text}
      </span>
      <button>
        delete
      </button>
    </li>
  )
}

ToDo.propTypes = {
  todo: PropTypes.object
}

export default ToDo
