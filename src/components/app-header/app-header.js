import React from 'react';

const AppHeader = ({ toDo, done }) => {
	return (
		<div className="app-header d-flex">
			<h2>Todo list</h2>
			<h3>{ toDo } to do, { done } done</h3>
		</div>
	);
};

export default AppHeader;