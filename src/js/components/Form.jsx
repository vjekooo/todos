
import React from 'react'
import ProTypes from 'prop-types'
import StateContext from './AppContext'

const Form = ({toggle, todo}) => {
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
							todo
								? 'Edit'
								: 'Add'
						}
					/>
				</form>
			)}
		</StateContext.Consumer>
	)
}

Form.propTypes = {
	toggle: ProTypes.func,
	todo: ProTypes.object
}

export default Form
