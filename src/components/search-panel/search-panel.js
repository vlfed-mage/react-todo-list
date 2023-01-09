import React, { useState } from 'react';

const SearchPanel = ({ onSearchChange }) => {
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
