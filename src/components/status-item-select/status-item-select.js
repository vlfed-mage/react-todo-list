import React, { useContext } from 'react';
import TodoContext from '../todo-context'

const StatusItemSelect = () => {
	const {
		itemRendererLength,
		isSelectAvailable,
		onToggleSelectButton
	} = useContext(TodoContext);
	const buttonText = isSelectAvailable ? 'Cancel' : 'Select';

	return (
		<button
			type="button"
			className="select-button btn btn-outline-secondary"
			onClick={ () => onToggleSelectButton() }
			disabled={ itemRendererLength <= 1 && !isSelectAvailable } >
			{ buttonText }
		</button>
	)
}

export default StatusItemSelect;
