function generateId(){
	return Math.random().toString().substring(2) - new Date().getTime();
}

export function createItem(text) {
	return {
		label: text,
		done: false,
		important: false,
		id: generateId(),
		visibility: true
	};
}

export function createFilterItem(id, activity) {
	return {
		active: activity,
		id: id,
	};
}

export function toggleItemProps(arr, id, prop) {
	return arr.map((el) => {
		return el.id === id
			? { ...el, [prop]: !el[prop] }
			: el;
	});
}