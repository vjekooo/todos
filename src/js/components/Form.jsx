
import React from 'react'
import StateContext from './AppContext'

const Form = () => {
	return (
		<StateContext.Consumer>
			{(context) => (
				<form
					className="overlay__form"
					onSubmit={context.handleSubmit}
				>
					<label>
						<input
							className="overlay__input"
							type="text"
							placeholder="add task"
							value={context.input}
							onChange={context.handleChange}
						/>
					</label>
					<input
						className="overlay__add-button"
						type="submit"
						value={
							context.currentTodo
								? 'Edit'
								: 'Add'
						}
					/>
				</form>
			)}
		</StateContext.Consumer>
	)
}

export default Form
