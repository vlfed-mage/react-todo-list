import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, ...actions }) => {

	const todoItems = todos.map(({ id, ...otherProps }) => {
		return (
			<li
				key={ id }
				className="list-group-item" >
				<TodoListItem
					{ ...otherProps }
					onItemRemoved={ () => actions.onItemRemoved(id) }
					onToggleImportant={ () => actions.onToggleImportant(id) }
					onToggleDone={ () => actions.onToggleDone(id) } />
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