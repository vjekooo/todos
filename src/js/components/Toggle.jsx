
import React from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends React.Component {
	constructor (props) {
		super()

		this.state = {
			on: false
		}
	}

	toggle = () => {
		console.log(this.state.on)
		this.setState({
			on: !this.state.on
		})
	}

	render () {
		const { children } = this.props
		return children({
			on: this.state.on,
			toggle: this.toggle,
			setCurrentToDo: this.setCurrentToDo
		})
	}
}

Toggle.propTypes = {
	children: PropTypes.func
}
