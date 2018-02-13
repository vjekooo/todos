
import React from 'react'
import PropTypes from 'prop-types'

const Overlay = (props) => {
  const { input, currentTodo, handleChange, handleSubmit, overlayClass } = props
  const value = currentTodo ? 'Edit' : 'Add'
  return (
    <div className={overlayClass}>
      <div className="add-task">
        <form
          onSubmit={handleSubmit}
        >
          <label>
            Task:
            <input
              type="text"
              placeholder="add task"
              value={input}
              onChange={handleChange}
            />
          </label>
          <input className="add-button" type="submit" value={value} />
        </form>
      </div>
    </div>
  )
}

Overlay.propTypes = {
  input: PropTypes.string,
  active: PropTypes.bool,
  overlay: PropTypes.bool,
  currentTodo: PropTypes.string,
  overlayClass: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Overlay
