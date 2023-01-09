import React, { useContext, useState } from 'react';

import TodoContext from "../todo-context";

const AddNewItem = () => {
	const [label, setLabel] = useState('');
	const { addItem } = useContext(TodoContext);

	const onSubmit = (e) => {
		e.preventDefault();
		if(label.length) addItem(label);

		setLabel('')
	};

	const onChange = (e) => {
		setLabel(e.target.value)
	};

	return (
		<form
			className="add-new-item d-flex"
			onSubmit={ onSubmit } >
			<input
				type="text"
				className="form-control"
				placeholder="What do you want to do"
				onChange={ onChange }
				value={ label } />
			<button
				type="submit"
				className="btn btn-outline-secondary">
				Add Item
			</button>
		</form>
	);
};

export default AddNewItem;
