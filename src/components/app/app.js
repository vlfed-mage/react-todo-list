import React, { Component } from 'react';

import { createNewItem } from '../helpers/helpers';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusItemFilter from '../status-item-filter';
import TodoList from '../todo-list';
import AddNewItem from '../add-new-item';

export default class App extends Component {
	state = {
		todoData: [
			createNewItem('do something'),
			createNewItem('do something else'),
			createNewItem('do something better'),
		],
		filter: 'all'
	}

	render() {
		const { filter, todoData } = this.state;

		return (
			<div className="todo-app">
				<AppHeader />
				<div className="action-bar d-flex">
					<SearchPanel />
					<StatusItemFilter filter={ filter } />
				</div>
				<TodoList todos={ todoData }/>
				<AddNewItem />
			</div>
		);
	};
};