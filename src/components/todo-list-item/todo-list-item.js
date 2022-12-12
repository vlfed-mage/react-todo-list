import React from 'react';

const TodoListItem = ({ label, important = false }) => {

	const style = {
		color: important ? 'steelblue' : 'black',
		fontWeight: important ? 'bold' : 'normal'
	};

	return (
		<span className="todo-list-item d-flex">
			<span
				className="todo-list-item-label"
				style={ style } >
				{ label }
			</span>
			<button
				type="button"
				className="btn btn-outline-danger btn-sm">
				<i className="fa fa-trash-can" aria-hidden="true" ></i>
			</button>
			<button
				type="button"
				className="btn btn-outline-success btn-sm">
				<i className="fa fa-exclamation" />
			</button>
		</span>
	);
};

export default TodoListItem;