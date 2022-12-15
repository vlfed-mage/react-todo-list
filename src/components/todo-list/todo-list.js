import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onItemRemoved }) => {

	const todoItems = todos.map(({ label, id }) => {
		return (
			<li
				key={ id }
				className="list-group-item" >
				<TodoListItem
					label={ label }
					onItemRemoved={ () => onItemRemoved(id) } />
			</li>
		);
	});

	return (
		<ul className="list-group todo-list">
			{ todoItems }
		</ul>
	);
};

export default TodoList;