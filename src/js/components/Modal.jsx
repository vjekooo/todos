
import React from 'react'
import Form from './Form'
import PropTypes from 'prop-types'

const Modal = ({handleChange, handleSubmit, on, toggle, form}) => {
	return (
		<div
			className="modal-background"
			onClick={toggle}
		>
			<div
				className="modal"
				onClick={(event) => event.stopPropagation()}
			>
				<h3 className="modal__title">
					{
						`New ${form}`
					}
				</h3>
				<Form
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					on={on}
					toggle={toggle}
					form={form}
				/>
			</div>
		</div>
	)
}

Modal.propTypes = {
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	on: PropTypes.bool,
	toggle: PropTypes.func,
	form: PropTypes.string
}

export default Modal
