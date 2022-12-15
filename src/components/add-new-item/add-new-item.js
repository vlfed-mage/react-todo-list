import React, { Component } from 'react';

export default class AddNewItem extends Component {
	state = {
		label: ''
	}

	onSubmit = (e) => {
		const { onItemAdded } = this.props,
			  { label } = this.state;

		e.preventDefault();
		if(label.length) onItemAdded(label);

		this.setState(({ label }) => {
			return {
				label: ''
			}
		})
	}

	onChange = (e) => {
		this.setState(({ label }) => {
			return {
				label: e.target.value
			}
		})
	}

	render() {
		const { label } = this.state;

		return (
			<form
				className="add-new-item d-flex"
				onSubmit={ this.onSubmit } >
				<input
					type="text"
					className="form-control"
					placeholder="What do you want to do"
					onChange={ this.onChange }
					value={ label } />
				<button
					type="submit"
					className="btn btn-outline-secondary">
					Add Item
				</button>
			</form>
		);
	}
};