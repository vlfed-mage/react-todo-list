import React from 'react';

const ItemStatusFilter = ({ filterButtons, onToggleFilter }) => {
	const filterElements = filterButtons.map(({ active, id }) => {
		const classNames = active ? 'btn btn-info' : 'btn btn-outline-secondary'
		return (
			<button
				key={ id }
				type="button"
				className={ classNames }
				onClick={ () => onToggleFilter(id) } >
				{ id }
			</button>
		);
	})
	return (
		<div className="btn-group">
			{ filterElements }
		</div>
	);
};

export default ItemStatusFilter;
