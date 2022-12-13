import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {

	// model
	generateId = () => {
		return Math.random().toString().substring(2) - new Date().getTime()
	}

	createItem(text) {
		return {
			label: text,
			done: false,
			important: false,
			id: this.generateId()
		}
	}
	// end model

	state = {
		todoData: [
			this.createItem('Drink Coffee'),
			this.createItem('Make Awesome App'),
			this.createItem('Have a lunch')
		]
	};

	onToggleItemProps(arr, id, prop) {
		return arr.map((el) => {
			return el.id === id
				? { ...el, [prop]: !el[prop] }
				: el
		})
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.onToggleItemProps(todoData, id, 'done')
			}
		})
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.onToggleItemProps(todoData, id, 'important')
			}
		})
	}

	removeItem = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: todoData.filter(el => el.id !== id)
			}
		})
	}

	render() {
		const { todoData } = this.state;
		const done = todoData.filter((el) => el.done).length,
			  toDo = todoData.length - done;

		return (
			<div className="todo-app">
				<AppHeader toDo={ toDo } done={ done } />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>

				<TodoList
					todos={ todoData }
					onToggleDone={ this.onToggleDone }
					onToggleImportant={ this.onToggleImportant }
					onItemDelete={ this.removeItem } />
			</div>
		);
	}
};