
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Toggle from './Toggle'
import EditForm from './EditForm'

import deleteIcon from '../../assets/images/bx-trash.svg'
import renameIcon from '../../assets/images/bx-edit.svg'
import sortIcon from '../../assets/images/bx-sort-alt.svg'
import hideIcon from '../../assets/images/bx-check-circle.svg'

const ListSettings = (
	{toggle, removeList, currentList, editList, input, pathname,
		handleChange, handleSubmit, setInput, toggleFilterByCompleted}
) => {
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
					<Toggle>
						{
							({on, toggle}) => (
								<Fragment>
									{
										pathname !== '/' && pathname !== 'shopping' &&
										<li
											className="list-settings__list"
											onClick={toggle}
										>
											<img
												className="list-settings__list-image"
												src={renameIcon}
												alt="Rename list icon"
											/>
											Rename list
										</li>
									}
									{
										on &&
										<li className="list-settings__list">
											<EditForm
												input={input}
												handleChange={handleChange}
												handleSubmit={handleSubmit}
												setInput={setInput}
												editList={editList}
												currentItem={currentList}
												type="list"
												action="edit"
											/>
										</li>
									}
								</Fragment>
							)
						}
					</Toggle>
					<li className="list-settings__list">
						<img
							className="list-settings__list-image"
							src={sortIcon}
							alt="Delete list icon"
						/>
						Sort - COMING SOON
					</li>
					<li
						className="list-settings__list"
						onClick={toggleFilterByCompleted}
					>
						<img
							className="list-settings__list-image"
							src={hideIcon}
							alt="Hide list icon"
						/>
						Hide completed to-dos
					</li>
					{
						pathname !== '/' && pathname !== 'shopping' &&
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
					}
				</ul>
			</div>
		</div>
	)
}

ListSettings.propTypes = {
	toggle: PropTypes.func,
	removeList: PropTypes.func,
	editList: PropTypes.func,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	setInput: PropTypes.func,
	toggleFilterByCompleted: PropTypes.func,
	lists: PropTypes.object,
	currentList: PropTypes.string,
	input: PropTypes.string,
	pathname: PropTypes.string
}

export default ListSettings
