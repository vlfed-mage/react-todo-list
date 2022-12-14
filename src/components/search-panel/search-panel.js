import React from 'react';

const SearchPanel = ({ label, onSearchTyping }) => {
	return (
		<input type="search"
			   className="form-control search-input"
			   placeholder="type to search"
			   onChange={ (e) => onSearchTyping(e) }
		       value={ label } />
	);
};

export default SearchPanel;