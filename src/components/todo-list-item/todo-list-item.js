import React from 'react';

const TodoListItem = ({
	label,
	done,
	important,
	...actions
}) => {

	let classNames = 'todo-list-item-label';
	if(done) classNames += ' done';
	if(important) classNames += ' important';

	return (
		<span className="todo-list-item d-flex">
			<span
				className={ classNames }
				onClick={ actions.onToggleDone } >
				{ label }
			</span>
			<button
				type="button"
				className="btn btn-outline-danger btn-sm"
				onClick={ actions.onItemDeleted } >
				<i className="fa fa-trash-can" aria-hidden="true" ></i>
			</button>
			<button
				type="button"
				className="btn btn-outline-success btn-sm"
				onClick={ actions.onToggleImportant } >
				<i className="fa fa-exclamation" />
			</button>
		</span>
	);
};

export default TodoListItem;