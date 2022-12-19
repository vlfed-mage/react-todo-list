import React from 'react';

const TodoListItem = ({
	label,
	important,
	done,
	isSelectAvailable,
	selected,
	...actions
}) => {

	let classNames = "todo-list-item d-flex";
	const buttonClass = important ? 'btn-success' : 'btn-outline-success';
	if(important) classNames += ' important';
	if(done) classNames += ' done';

	return (
		<div className={ classNames }>
			{ isSelectAvailable
				? <input
				type="checkbox"
				checked={ selected }
				onChange={ () => actions.onToggleItemSelected() } />
				: null
			}
			<span
				onClick={ () => actions.onToggleDone() } >
				{ label }
			</span>
			<button
				className="btn btn-outline-danger btn-md"
				onClick={ () => actions.onItemRemoved() }>
				<i className="fa fa-trash-can"></i>
			</button>
			<button
				className={ `btn ${ buttonClass } btn-md` }
				onClick={ () => actions.onToggleImportant() } >
				<i className="fa fa-exclamation"></i>
			</button>
		</div>
	)
}

export default TodoListItem;
