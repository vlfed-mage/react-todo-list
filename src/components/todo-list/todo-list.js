import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, isSelectAvailable, selectAll, ...actions }) => {

	const todoItems = todos.map(({ id, ...otherProps }) => {
		return (
			<li
				key={ id }
				className="list-group-item" >
				<TodoListItem
					{ ...otherProps }
					isSelectAvailable={ isSelectAvailable }
					onItemRemoved={ () => actions.onItemRemoved(id) }
					onToggleImportant={ () => actions.onToggleImportant(id) }
					onToggleDone={ () => actions.onToggleDone(id) }
					onToggleItemSelected={ () => actions.onToggleItemSelected(id) } />
			</li>
		);
	});

	return (
		<div className="todo-list">
			{ isSelectAvailable
				? <div className="select-all-items d-flex">
					<input
						type="checkbox"
						id="select-all"
						name="select-all"
						checked={ selectAll }
						onChange={ () => actions.onToggleAllSelectedItems() } />
					<label
						htmlFor="select-all" >
						Select all
					</label>
				</div>
				: null
			}
			<ul className="list-group todo-list">
				{ todoItems }
			</ul>
		</div>
	);
};

export default TodoList;
