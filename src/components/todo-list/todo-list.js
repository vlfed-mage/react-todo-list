import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos }) => {

	const todoItems = todos.map(({ label, id }) => {
		return (
			<li key={ id } >
				<TodoListItem label={ label } />
			</li>
		);
	});

	return (
		<ul>
			{ todoItems }
		</ul>
	);
};

export default TodoList;