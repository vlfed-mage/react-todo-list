function generateId() {
	return Math.random().toString().substring(2) - new Date().getTime();
}

function createNewItem(text) {
	return {
		label: text,
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

export { createNewItem, createFilterButton };