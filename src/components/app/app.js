import React, { Component } from 'react';

import { createItem, createFilterItem, toggleItemProps } from '../helpers/helpers'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemFrom from '../add-item-form';

export default class App extends Component {

	state = {
		todoData: [
			createItem('Drink Coffee'),
			createItem('Make Awesome App'),
			createItem('Have a lunch')
		],
		filterItems: [
			createFilterItem('all', true),
			createFilterItem('active', false),
			createFilterItem('done', false)
		],
		label: ''
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: toggleItemProps(todoData, id, 'done')
			};
		});
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: toggleItemProps(todoData, id, 'important')
			};
		});
	}

	onToggleFilter = (id) => {
		this.setState(({ filterItems, todoData }) => {
			return {
				filterItems: filterItems.map((el) => {
					return el.id === id
						? { ...el, active: true }
						: { ...el, active: false };
				}),
				todoData: todoData.map((el) => {
					return (!el.done && id === 'done' || el.done && id === 'active')
						? { ...el, visibility: false }
						: { ...el, visibility: true };
				})
			};
		});
	}

	onSearchTyping = (e) => {
		this.setState(({ todoData }) => {
			const text = e.target.value;
			return {
				label: text,
				todoData: todoData.map((el) => {
					return el.label.toLowerCase().includes(text.toLowerCase())
						? { ...el, visibility: true }
						: { ...el, visibility: false }
				})
			};
		});
	}

	removeItem = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: todoData.filter((el) => el.id !== id)
			};
		});
	}

	addItem = (text) => {
		this.setState(({ todoData }) => {
			return {
				todoData: [
					...todoData,
					createItem(text)
				]
			};
		});
	}

	render() {
		const { todoData, filterItems, label } = this.state;
		const done = todoData.filter((el) => el.done).length,
			  toDo = todoData.length - done;

		return (
			<div className="todo-app">
				<AppHeader toDo={ toDo } done={ done } />
				<div className="top-panel d-flex">
					<SearchPanel
						label={ label }
						onSearchTyping={ this.onSearchTyping } />
					<ItemStatusFilter
						filterButtons={ filterItems }
						onToggleFilter={ this.onToggleFilter } />
				</div>

				<TodoList
					todos={ todoData }
					onToggleDone={ this.onToggleDone }
					onToggleImportant={ this.onToggleImportant }
					onItemDeleted={ this.removeItem } />
				<AddItemFrom
					onItemAdded={ this.addItem } />
			</div>
		);
	}
};
