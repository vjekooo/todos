import React from 'react'
import PropTypes from 'prop-types'

const PlusButton = ({on, toggle}) => {
	const activeClass = on
		? 'icon add active'
		: 'icon add non-active'

	return (
		<span
			className={activeClass} onClick={toggle}
		>
		</span>
	)
}

PlusButton.propTypes = {
	on: PropTypes.bool,
	toggle: PropTypes.func
}

export default PlusButton
