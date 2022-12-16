function generateId() {
	return Math.random().toString().substring(2) - new Date().getTime();
}

function createNewItem(text) {
	return {
		label: text,
		important: false,
		done: false,
		id: generateId()
	}
}

function createFilterButton(text) {
	return {
		name: text,
		label: [...text].map((l,idx) => l[idx] ? l.toUpperCase() : l).join(''),
		id: generateId()
	}
}

const onToggleItemProp = (arr, id, prop) => {
	return arr.map((item) => {
		return id === item.id
			? { ...item, [prop]: !item[prop] }
			: item
	})
}

export { createNewItem, createFilterButton, onToggleItemProp };