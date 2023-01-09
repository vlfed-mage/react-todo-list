import React, { useContext } from 'react';

import TodoListItem from '../todo-list-item';
import TodoContext from "../todo-context";

const TodoList = ({ ...actions }) => {
	const {
		onToggleAllItemsSelected,
		itemRenderer: todos,
		isSelectAvailable,
		selectAll
	} = useContext(TodoContext);

	const todoItems = todos.map(({ ...props }) => {
		return (
			<li
				key={ props.id }
				className="list-group-item" >
				<TodoListItem
					id={ props.id }
					{ ...props } />
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
						onChange={ () => onToggleAllItemsSelected() } />
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
