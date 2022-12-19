import React, { Component } from 'react';

export default class SearchPanel extends Component {

	state = {
		term: ''
	}

	onTermChange = (e) => {
		const { onSearchChange = () => {} } = this.props; // destructing shorthand

		this.setState({ term: e.target.value })
		onSearchChange(e.target.value);
	}

	render() {
		const { term } = this.state;

		return (
			<input
				type="search"
				className="form-control"
				placeholder="Type for searching"
				onChange={ this.onTermChange }
				value={ term } />
		);
	}
};
