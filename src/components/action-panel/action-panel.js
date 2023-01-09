import React, { useContext } from 'react';

import TodoContext from "../todo-context";

const ActionPanel = () => {

	const actionButtons = [
		{className: 'btn btn-outline-danger', icon: 'fa-trash-can', name: 'remove'},
		{className: 'btn btn-outline-warning', icon: 'fa-check', name: 'done'},
		{className: 'btn btn-outline-success', icon: 'fa-exclamation', name: 'important'}
	];

	const {
		isSelectAvailable,
		selectedItemsLength,
		onActionGroup,
		onRemoveGroup
	} = useContext(TodoContext);

	const buttons = actionButtons.map((
		{ className, icon, name }
	) => {
		return (
			<button
				className={ className }
				key={ name }
				title={ `${ name } selected items` }
				onClick={ name === 'remove'
					? () => onRemoveGroup()
					: () => onActionGroup(name) } >
				<i className={ `fa ${ icon }` }></i>
			</button>
		)
	});

	return (
		isSelectAvailable && selectedItemsLength >= 2
			? <div className="action-panel d-flex">
				{ buttons }
			</div>
			: null
	)
}

export default ActionPanel;
