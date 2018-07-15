
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Toggle from './Toggle'
import Overlay from './Overlay'

const ToDo = ({todo, todoId, toggleToDo, removeToDo, setCurrentToDo}) => {
	const isChecked = todo.checked ? 'checked' : 'unchecked'
	return (
		<li className="todo__item">
			<span className="todo__input--checked">
				<input
					type="checkbox"
					id={todoId}
					checked={todo.checked}
					onClick={() => { toggleToDo(todoId) }}
				/>
				<label htmlFor={todoId}></label>
			</span>
			<span className={`todo-text ${isChecked}`}>
				{todo.text}
			</span>
			<Toggle>
				{
					({on, toggle}) => (
						<Fragment>
							<Overlay on={on} toggle={toggle} />
							<button
								className="btn"
								onClick={toggle}
							>
								edit
							</button>
						</Fragment>
					)
				}
			</Toggle>
			<span
				className="icon remove"
				onClick={() => { removeToDo(todoId) }}
			>
			</span>
		</li>
	)
}

ToDo.propTypes = {
	todo: PropTypes.object,
	todoId: PropTypes.string,
	removeToDo: PropTypes.func,
	checked: PropTypes.bool,
	toggleToDo: PropTypes.func,
	overlayToggle: PropTypes.func,
	setCurrentToDo: PropTypes.func
}

export default ToDo
