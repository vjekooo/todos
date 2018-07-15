
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

const Overlay = ({on, toggle, todo}) => {
	console.log(on)
	return (
		<Fragment>
			{
				on &&
					<div
						className="overlay"
						onClick={toggle}
					>
						<div
							className="overlay__add-task"
							onClick={(event) => event.stopPropagation()}
						>
							<Form on={on} toggle={toggle} todo={todo} />
						</div>
					</div>
			}
		</Fragment>
	)
}

Overlay.propTypes = {
	on: PropTypes.bool,
	todo: PropTypes.object,
	toggle: PropTypes.func
}

export default Overlay
