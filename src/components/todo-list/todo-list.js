import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({
	todos,
	...actions
}) => {

	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;

		return (
			<li key={ id } className="list-group-item">
				<TodoListItem
					{ ...itemProps }
					onToggleDone={ () => actions.onToggleDone(id) }
					onToggleImportant={ () => actions.onToggleImportant(id) }
					onItemDelete={ () => actions.onItemDelete(id) } />
			</li>
		);
	});

	return (
		<ul className="list-group todo-list">
			{ elements }
		</ul>
	);
};

export default TodoList;