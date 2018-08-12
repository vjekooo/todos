
import React from 'react'
import PropTypes from 'prop-types'

import completedIcon from '../../assets/images/bx-check-circle.svg'
import aplhaIcon from '../../assets/images/bx-alpha.svg'
import dateIcon from '../../assets/images/bx-watch.svg'

const SortList = ({on, toggle, toggleSort, lists, currentList}) => {
	const listExists = lists[currentList]
		? lists[currentList]
		: []
	return (
		<div
			className="sort-list-background"
			onClick={toggle}
		>
			<div
				className="sort-list"
				onClick={(event) => event.stopPropagation()}
			>
				<h3 className="sort-list__title">Sort list</h3>
				<ul>
					<li
						className={
							listExists.sort === '0'
								? 'sort-list__list sort-list__list--active'
								: 'sort-list__list'
						}
						data-sort="0"
						onClick={(event) => {
							toggleSort(event)
							toggle()
						}}
					>
						<img src={completedIcon} alt="Completed icon" className="sort-list__img" />
						Completed
					</li>
					<li
						className={
							listExists.sort === '1'
								? 'sort-list__list sort-list__list--active'
								: 'sort-list__list'
						}
						data-sort="1"
						onClick={(event) => {
							toggleSort(event)
							toggle()
						}}
					>
						<img src={aplhaIcon} alt="Alphabetically icon"className="sort-list__img" />
						Alphabetically
					</li>
					<li
						className={
							listExists.sort === '2'
								? 'sort-list__list sort-list__list--active'
								: 'sort-list__list'
						}
						data-sort="2"
						onClick={(event) => {
							toggleSort(event)
							toggle()
						}}
					>
						<img src={dateIcon} alt="Creation date icon" className="sort-list__img" />
						Creation date
					</li>
				</ul>
			</div>
		</div>
	)
}

SortList.propTypes = {
	on: PropTypes.bool,
	toggle: PropTypes.func,
	toggleSort: PropTypes.func,
	currentList: PropTypes.string,
	lists: PropTypes.object
}

export default SortList
