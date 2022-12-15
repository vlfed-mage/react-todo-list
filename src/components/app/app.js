import React, { Component } from 'react';

import { createNewItem, onToggleItemProp } from '../helpers/helpers';

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

	removeItem = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: todoData.filter((item) => {
					return id !== item.id
				})
			}
		})
	}

	addItem = (text) => {
		this.setState(({ todoData }) => {
			return {
				todoData: [
					...todoData,
					createNewItem(text)
				]
			}
		})
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: onToggleItemProp(todoData, id, 'important')
			}
		})
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: onToggleItemProp(todoData, id, 'done')
			}
		})
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
				<TodoList
					todos={ todoData }
					onItemRemoved={ this.removeItem }
					onToggleImportant={ this.onToggleImportant }
					onToggleDone={ this.onToggleDone } />
				<AddNewItem
					onItemAdded={ this.addItem }/>
			</div>
		);
	};
};