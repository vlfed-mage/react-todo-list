import React from 'react';

const AddNewItem = () => {
	return (
		<form className="add-new-item d-flex">
			<input
				type="text"
				className="form-control"
				placeholder="What do you want to do" />
			<button
				className="btn btn-outline-secondary">
				Add Item
			</button>
		</form>
	)
}

export default AddNewItem;