import React from 'react';

const TodoListItem = ({ label, important, done, ...actions }) => {
	let classNames = "todo-list-item d-flex";
	const buttonClass = important ? 'btn-success' : 'btn-outline-success';
	if(important) classNames += ' important';
	if(done) classNames += ' done';

	return (
		<div className={ classNames }>
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