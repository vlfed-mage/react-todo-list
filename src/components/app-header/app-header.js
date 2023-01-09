import React, { useContext } from 'react';
import TodoContext from "../todo-context";

const AppHeader = () => {
	const {
		toDo,
		done
	} = useContext(TodoContext);

	return (
		<div className="app-header d-flex">
			<h2>Todo list</h2>
			<h3>{ toDo } to do, { done } done</h3>
		</div>
	);
};

export default AppHeader;
