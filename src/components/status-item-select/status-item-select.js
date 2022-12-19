import React from 'react';

const StatusItemSelect = ({ isSelectAvailable, onToggleSelectButton, todosLength }) => {
	const buttonText = isSelectAvailable ? 'Cancel' : 'Select';

	return (
		<button
			type="button"
			className="select-button btn btn-outline-secondary"
			onClick={ () => onToggleSelectButton() }
			disabled={ todosLength <= 1 && !isSelectAvailable } >
			{ buttonText }
		</button>
	)
}

export default StatusItemSelect;
