import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos }) => {
	const todoList = todos.map(({ id, ...items }) => {
		return <li key={ id }><TodoListItem { ...items }/></li>;
	});

	return <ul>{ todoList }</ul>;
}

export default TodoList;