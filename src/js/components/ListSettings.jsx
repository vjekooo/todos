
import React from 'react'
import PropTypes from 'prop-types'
import deleteIcon from '../../assets/images/bx-trash.svg'
import renameIcon from '../../assets/images/bx-edit.svg'
import sortIcon from '../../assets/images/bx-sort-alt.svg'
import hideIcon from '../../assets/images/bx-check-circle.svg'

const ListSettings = ({toggle, removeList, lists, currentList}) => {
	return (
		<div
			className="list-settings-background"
			onClick={toggle}
		>
			<div
				className="list-settings"
				onClick={(event) => event.stopPropagation()}
			>
				<ul>
					<li className="list-settings__list">
						<img
							className="list-settings__list-image"
							src={renameIcon}
							alt="Delete list icon"
						/>
						Rename list
					</li>
					<li className="list-settings__list">
						<img
							className="list-settings__list-image"
							src={sortIcon}
							alt="Delete list icon"
						/>
						Sort
					</li>
					<li className="list-settings__list">
						<img
							className="list-settings__list-image"
							src={hideIcon}
							alt="Delete list icon"
						/>
						Hide completed to-dos
					</li>
					<li
						className="list-settings__list"
						onClick={() => {
							window.confirm('Are you sure?') &&
								removeList(currentList)
							toggle()
						}}
					>
						<img
							className="list-settings__list-image"
							src={deleteIcon}
							alt="Delete list icon"
						/>
						Delete list
					</li>
				</ul>
			</div>
		</div>
	)
}

ListSettings.propTypes = {
	toggle: PropTypes.func,
	removeList: PropTypes.func,
	lists: PropTypes.object,
	currentList: PropTypes.string
}

export default ListSettings
