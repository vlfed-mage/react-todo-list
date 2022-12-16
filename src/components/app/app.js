import React, { Component } from 'react';

import { createNewItem, onToggleItemProp, resetProp } from '../helpers/helpers';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusItemFilter from '../status-item-filter';
import TodoList from '../todo-list';
import AddNewItem from '../add-new-item';
import StatusItemSelect from '../status-item-select';

export default class App extends Component {
	state = {
		todoData: [
			createNewItem('do something'),
			createNewItem('do something else'),
			createNewItem('do something better'),
		],
		filter: 'all',
		search: '',
		isSelectAvailable: false,
		selectAll: false
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

	onToggleItemSelected = (id) => {
		this.setState(({ todoData, selectAll }) => {
			return selectAll ? {
				todoData: onToggleItemProp(todoData, id, 'selected'),
				selectAll: !selectAll
			} : {
				todoData: onToggleItemProp(todoData, id, 'selected'),
			}
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
		this.setState(({ todoData, isSelectAvailable }) => {
			return isSelectAvailable ? {
				isSelectAvailable: !isSelectAvailable,
				filter: filter,
				todoData: resetProp(todoData, 'selected'),
				selectAll: false
			} : {
				filter: filter
			}
		});
	}

	onSearchItems(data, search) {
		return data.filter(({ label }) => label.indexOf(search) > -1);
	}

	onSearchChange = (search) => {
		this.setState({ search });
	}

	onToggleSelectButton = () => {
		this.setState(({ isSelectAvailable, todoData }) => {
			return isSelectAvailable ? {
				isSelectAvailable: !isSelectAvailable,
				selectAll: false,
				todoData: resetProp(todoData, 'selected')
			} : {
				isSelectAvailable: !isSelectAvailable
			}
		})
	}

	onToggleAllSelectedItems = () => {
		this.setState(({ selectAll, todoData, filter }) => {
			return selectAll ? {
				selectAll: !selectAll,
				todoData: todoData.map(item => ({
					...item,
					...resetProp(this.onFilterItems(todoData, filter), 'selected')
						.find(filteredItem => filteredItem.id === item.id)
				}))
			} : {
				selectAll: !selectAll,
				todoData: todoData.map(item => ({
					...item,
					...resetProp(this.onFilterItems(todoData, filter), 'selected', true)
						.find(filteredItem => filteredItem.id === item.id)
				}))
			}
		})
	}

	render() {
		const { filter, search, isSelectAvailable, selectAll, todoData } = this.state;

		const toDo = todoData.filter(el => !el.done).length,
			  done = todoData.length - toDo;

		const itemRenderer = this.onSearchItems(this.onFilterItems(todoData, filter), search),
			itemRendererLength = itemRenderer.length;

		return (
			<div className="todo-app">
				<StatusItemSelect
					todosLength={ itemRendererLength }
					isSelectAvailable={ isSelectAvailable }
					onToggleSelectButton={ this.onToggleSelectButton } />
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
					isSelectAvailable={ isSelectAvailable }
					selectAll={ selectAll }
					onItemRemoved={ this.removeItem }
					onToggleImportant={ this.onToggleImportant }
					onToggleDone={ this.onToggleDone }
					onToggleItemSelected={ this.onToggleItemSelected }
					onToggleAllSelectedItems={ this.onToggleAllSelectedItems } />
				<AddNewItem
					onItemAdded={ this.addItem }/>
			</div>
		);
	};
};