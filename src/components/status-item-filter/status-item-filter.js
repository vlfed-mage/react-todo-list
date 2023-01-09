import React, { useContext } from 'react';

import { createFilterButton } from '../helpers/helpers';

import TodoContext from "../todo-context";

const StatusItemFilter = () => {
	const { filter, onFilterChange } = useContext(TodoContext);

	const buttons = [
		createFilterButton('all'),
		createFilterButton('active'),
		createFilterButton('done')
	]

	const buttonsList = buttons.map(({ name, label, id }) => {
		const classState = name === filter ? 'btn-primary' : 'btn-outline-secondary';

		return (
			<button
				key={ id }
				className={ `btn ${ classState }` }
				onClick={ () => onFilterChange(name) } >
				{ label }
			</button>
		);
	});

	return (
		<div className="status-item-filter d-flex">
			{ buttonsList }
		</div>
	);
}

export default StatusItemFilter;
