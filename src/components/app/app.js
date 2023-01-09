import React, { useState } from 'react';

import { createNewItem, onToggleItemProp, resetProp } from '../helpers/helpers';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusItemFilter from '../status-item-filter';
import TodoList from '../todo-list';
import AddNewItem from '../add-new-item';
import StatusItemSelect from '../status-item-select';
import ActionPanel from '../action-panel';

import TodoContext from "../todo-context";

const App = () => {

	const [todoData, setTodoData] = useState([
		createNewItem('drink coffee'),
		createNewItem('learn react'),
		createNewItem('create awesome app'),
	]),
		  [filter, setFilter] = useState('all'),
		  [search, setSearch] = useState(''),
		  [isSelectAvailable, setIsSelectAvailable] = useState(false),
		  [selectAll, setSelectAll] = useState(false),

	removeItem = (id) => {
		setTodoData((todoData) => todoData.filter((item) => id !== item.id));
	},

	addItem = (text) => {
		setTodoData((todoData) => {
			return [
				...todoData,
				createNewItem(text)
			];
		})
	},

	onToggleImportant = (id) => {
		setTodoData((todoData) => onToggleItemProp(todoData, id, 'important'))
	},

	onToggleDone = (id) => {
		setTodoData((todoData) => onToggleItemProp(todoData, id, 'done'))
	},

	onToggleItemSelected = (id) => {
		setTodoData((todoData) => onToggleItemProp(todoData, id, 'selected'))
		if (selectAll) {
			setSelectAll((selectAll) => !selectAll)
		}
	},

	onFilterItems = (data, filter) => {
		switch (filter) {
			case 'active':
				return data.filter(({ done }) => !done);
			case 'done':
				return data.filter(({ done }) => done);
			default:
				return data;
		}
	},

	onFilterChange = (filter) => {
		setFilter(filter);
		if (isSelectAvailable) {
			setIsSelectAvailable((isSelectAvailable) => !isSelectAvailable);
			setSelectAll(false);
			setTodoData((todoData) => resetProp(todoData, 'selected'));
		}
	},

	onSearchItems = (data, search) => {
		return data.filter(({ label }) => label.indexOf(search) > -1);
	},

	onSearchChange = (search) => {
		setSearch(search);
		if (isSelectAvailable) {
			setIsSelectAvailable((isSelectAvailable) => !isSelectAvailable);
			setSelectAll(false);
			setTodoData((todoData) => resetProp(todoData, 'selected'));
		}
	},

	onToggleSelectButton = () => {
		if (isSelectAvailable) {
			setSelectAll(false);
			setTodoData((todoData) => resetProp(todoData, 'selected'))
		}
		setIsSelectAvailable((isSelectAvailable) => !isSelectAvailable);
	},

	itemRenderer = onSearchItems(onFilterItems(todoData, filter), search),

	onToggleAllItemsSelected = () => {
		setSelectAll((selectAll) => !selectAll);
		setTodoData((todoData) => {
			return todoData.map(item => selectAll ? ({
					...item,
					...resetProp(itemRenderer, 'selected').find(filteredItem => filteredItem.id === item.id)
				}) : ({
					...item,
					...resetProp(itemRenderer, 'selected', true).find(filteredItem => filteredItem.id === item.id)
				})
			)
		})
	},

	onActionGroup = (prop) => {
		setTodoData((todoData) => todoData.map((el) => {
			return el.selected
				? { ...el, [prop]: !el[prop] }
				: el
		}))
	},

	onRemoveGroup = () => {
		setTodoData((todoData) => todoData.filter((el) => !el.selected));
	},

	toDo = todoData.filter(el => !el.done).length,
	done = todoData.length - toDo,
	selectedItemsLength = todoData.filter(el => el.selected).length,

	itemRendererLength = itemRenderer.length,

	todoContextItems = {
		onToggleAllItemsSelected,
		onToggleItemSelected,
		onToggleSelectButton,
		selectedItemsLength,
		itemRendererLength,
		onToggleImportant,
		isSelectAvailable,
		onSearchChange,
		onFilterChange,
		onActionGroup,
		onRemoveGroup,
		onToggleDone,
		itemRenderer,
		removeItem,
		addItem,
		filter,
		toDo,
		done
	};

	return (
		<div className="todo-app">
			<TodoContext.Provider value={ todoContextItems }>
				<StatusItemSelect />
				<AppHeader />
				<div className="action-bar d-flex">
					<SearchPanel />
					<StatusItemFilter />
				</div>
				<TodoList />
				<AddNewItem />
				<ActionPanel />
			</TodoContext.Provider>
		</div>
	);
};

export default App;
