
import React from 'react'
import PropTypes from 'prop-types'

const Overlay = (props) => {
  const { input, currentTodo, handleChange, handleSubmit, overlay } = props
  const overlayClass = overlay ? 'overlay visible' : 'overlay hidden'
  const value = currentTodo ? 'Edit' : 'Add'
  return (
    <div className={overlayClass}>
      <div className="overlay__add-task">
        <form
          className="overlay__form"
          onSubmit={handleSubmit}
        >
          <label>
            <input
              className="overlay__input"
              type="text"
              placeholder="add task"
              value={input}
              onChange={handleChange}
            />
          </label>
          <input className="overlay__add-button" type="submit" value={value} />
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
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Overlay
