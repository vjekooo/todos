
import React, { Fragment } from 'react'
// import CurrentUser from './CurrentUser'
// import SignIn from './SignIn'
import PropTypes from 'prop-types'

const Nav = ({on, toggle, currentUser}) => {
	console.log(on)
	// const showUserButton = !currentUser
	// 	? <SignIn />
	// 	: <CurrentUser currentUser={currentUser} />
	// const transitionClass = on
	// 	? 'animate'
	// 	: ''
	return (
		<Fragment>
			{
				on &&
					<div className="navigation">
						<div className="navigation__wrapper">
							{/* <div className="navigation__head">
								{showUserButton}
								<span
									className={`navigation__circle ${transitionClass}`}
									onClick={toggle}
								>
								</span>
							</div> */}
							<div className="navigation__content">
								<ul className="navigation__content-list">
									<li><a>ToDos</a></li>
									<li><a>Terminado</a></li>
								</ul>
								<button className="navigation__add-list btn">
									New list
								</button>
							</div>
						</div>
					</div>
			}
		</Fragment>
	)
}

Nav.propTypes = {
	on: PropTypes.bool,
	currentUser: PropTypes.object,
	toggle: PropTypes.func,
	menuButtonVisibility: PropTypes.bool
}

export default Nav
