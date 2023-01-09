import React, { useState, useContext } from 'react';
import TodoContext from "../todo-context";

const SearchPanel = () => {
	const { onSearchChange } = useContext(TodoContext);
	const [ term, setTerm ] = useState('');

	const onTermChange = (e) => {
		setTerm(e.target.value)
		onSearchChange(e.target.value);
	}

	return (
		<input
			type="search"
			className="form-control"
			placeholder="Type for searching"
			onChange={ onTermChange }
			value={ term } />
	);
};

export default SearchPanel;
