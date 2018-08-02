
import React from 'react'
import PropTypes from 'prop-types'
import backarrowIcon from '../../assets/images/bx-arrow-back.svg'
import saveIcon from '../../assets/images/bx-save.svg'
import deleteIcon from '../../assets/images/bx-trash.svg'

class ToDoDetails extends React.Component {
	constructor (props) {
		super(props)
		this.inputRef = React.createRef()
	}
	componentDidUpdate () {
		this.inputRef.current.focus()
	}
	render () {
		const {
			currentTodo, details, pathname, input, handleChange,
			handleSubmit, removeToDo, todoDetailsToggle
		} = this.props
		const overlayClass = details ? 'visible' : 'hidden'
		const backRoute = pathname === '/'
			? 'ALL TODOS'
			: pathname.slice(1).toLocaleUpperCase()

		return (
			<div className={`todo-details ${overlayClass}`}>
				<div className="todo-details__head">
					<img
						onClick={() => {
							todoDetailsToggle()
						}}
						src={backarrowIcon}
					/>
					<div>
						{backRoute}
					</div>
				</div>
				<div className="todo-details__todo-edit">
					<div>
						<form className="todo-details__form" onSubmit={handleSubmit}>
							<label>
								<input
									className="todo-details__input"
									type="text"
									value={input}
									onChange={handleChange}
									ref={this.inputRef}
								/>
							</label>
							<div className="todo-details__icons">
								<input
									type="image"
									src={saveIcon}
								/>
								<img
									src={deleteIcon}
									alt="Delete icon"
									onClick={() => {
										removeToDo(currentTodo)
									}}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

ToDoDetails.propTypes = {
	currentTodo: PropTypes.string,
	overlay: PropTypes.bool,
	details: PropTypes.bool,
	pathname: PropTypes.string,
	input: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	removeToDo: PropTypes.func,
	todoDetailsToggle: PropTypes.func
}

export default ToDoDetails
