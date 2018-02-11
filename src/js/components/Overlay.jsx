
import React from 'react'
import PropTypes from 'prop-types'

const Overlay = (props) => {
  const { input, handleChange, handleSubmit, overlayClass } = props
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
              value={input}
              onChange={handleChange}
            />
          </label>
          <input className="add-button" type="submit" value="Add"/>
        </form>
      </div>
    </div>
  )
}

Overlay.propTypes = {
  input: PropTypes.string,
  active: PropTypes.bool,
  overlay: PropTypes.bool,
  overlayClass: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Overlay
