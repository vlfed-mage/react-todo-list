import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({
	todos,
	...actions
}) => {

	const elements = todos.map((item) => {
		const { id, visibility, ...items } = item;

		return visibility ? (
			<li key={id} className='list-group-item'>
				<TodoListItem
					{...items}
					onToggleDone={() => actions.onToggleDone(id)}
					onToggleImportant={() => actions.onToggleImportant(id)}
					onItemDeleted={() => actions.onItemDeleted(id)}/>
			</li>
		) : null;
	});

	return (
		<ul className="list-group todo-list">
			{ elements }
		</ul>
	);
};

export default TodoList;