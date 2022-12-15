import React from 'react';

const TodoListItem = ({ label, onItemRemoved }) => {
	return (
		<div className="todo-list-item d-flex">
			<span>{ label }</span>
			<button
				className="btn btn-outline-danger btn-md"
				onClick={ () => onItemRemoved() }>
				<i className="fa fa-trash-can"></i>
			</button>
		</div>
	)
}

export default TodoListItem;