
import React from 'react'
import ListForm from './ListForm'
import PropTypes from 'prop-types'

const Modal = ({handleListChange, handleListSubmit}) => {
	return (
		<div className="modal-background">
			<div className="modal">
				<h3 className="modal__title">
					New List
				</h3>
				<ListForm
					handleListChange={handleListChange}
					handleListSubmit={handleListSubmit}
				/>
			</div>
		</div>
	)
}

Modal.propTypes = {
	handleListChange: PropTypes.func,
	handleListSubmit: PropTypes.func
}

export default Modal
