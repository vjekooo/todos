
import React from 'react'
import PropTypes from 'prop-types'

class ListForm extends React.Component {
	render () {
		const { handleListChange, handleListSubmit } = this.props
		return (
			<form action="submit" onSubmit={handleListSubmit}>
				<input
					onChange={handleListChange}
				/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

ListForm.propTypes = {
	handleListChange: PropTypes.func,
	handleListSubmit: PropTypes.func
}

export default ListForm
