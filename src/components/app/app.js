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
		filter: 'all',
		search: ''
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
			};
		})
	}

	onFilterItems(data, filter) {
		switch (filter) {
			case 'active':
				return data.filter(({ done }) => !done);
			case 'done':
				return data.filter(({ done }) => done);
			default:
				return data;
		}
	}

	onFilterChange = (filter) => {
		this.setState({ filter })
	}

	onSearchItems(data, search) {
		return data.filter(({ label }) => label.indexOf(search) > -1);
	}

	onSearchChange = (search) => {
		this.setState({ search });
	}

	render() {
		const { filter, search, todoData } = this.state;

		const toDo = todoData.filter(el => !el.done).length,
			  done = todoData.length - toDo;

		const itemRenderer = this.onSearchItems(this.onFilterItems(todoData, filter), search);

		return (
			<div className="todo-app">
				<AppHeader
					toDo={ toDo }
					done={ done } />
				<div className="action-bar d-flex">
					<SearchPanel
						onSearchChange={ this.onSearchChange } />
					<StatusItemFilter
						filter={ filter }
						onFilterChange={ this.onFilterChange } />
				</div>
				<TodoList
					todos={ itemRenderer }
					onItemRemoved={ this.removeItem }
					onToggleImportant={ this.onToggleImportant }
					onToggleDone={ this.onToggleDone } />
				<AddNewItem
					onItemAdded={ this.addItem }/>
			</div>
		);
	};
};