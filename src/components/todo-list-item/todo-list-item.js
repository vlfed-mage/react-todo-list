import React from 'react';

const TodoListItem = ({ label, important }) => {
	const className = important ? 'important' : null

	return (
		<span className={ className }>{ label }</span>
	)
}

export default TodoListItem;