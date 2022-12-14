import React, { Component } from 'react';

export default class AddItemFrom extends Component {
	state = {
		label: ''
	}

	onLabelChange = (e) => {
		this.setState({ label: e.target.value })
	}

	onSubmit = (e) => {
		const { label } = this.state;

		e.preventDefault();
		if(label.length) {
			this.props.onItemAdded(label)
			this.setState({label: ''})
		}
	}

	render() {
		const { label } = this.state;

		return (
			<form className="add-item-form d-flex"
				onSubmit={ this.onSubmit }>
				<input
					type="text"
					className="form-control"
					placeholder="What do you want to do"
					onChange={ this.onLabelChange }
					value={ label } />
				<button
					type="submit"
					className="btn btn-outline-secondary" >
					Add
				</button>
			</form>
		);
	}
}