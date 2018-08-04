
import React from 'react'
import Form from './Form'
import PropTypes from 'prop-types'

class ToDoModal extends React.Component {
	render () {
		const { input, handleChange, handleSubmit, overlay, modalToggle } = this.props
		const modalClass = overlay ? 'visible' : 'hidden'
		return (
			<div className={`todo-modal ${modalClass}`}>
				<div className="todo-modal__content">
					<h3 className="todo-modal__title">
						New Todo
					</h3>
					<Form
						input={input}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						modalToggle={modalToggle}
					/>
				</div>
			</div>
		)
	}
}

ToDoModal.propTypes = {
	input: PropTypes.string,
	active: PropTypes.bool,
	overlay: PropTypes.bool,
	currentTodo: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	modalToggle: PropTypes.func
}

export default ToDoModal
