import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {

	const todoData = [
		{ label: 'something to do', important: false, id: 1 },
		{ label: 'something else to do', important: true, id: 2 },
		{ label: 'other to do', important: false, id: 3 },
	];

	return (
		<div className="react__app">
			<AppHeader />
			<SearchPanel />
			<TodoList todos={ todoData } />
		</div>
	)
}

export default App;