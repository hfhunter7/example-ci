import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		const { value } = this.props;

		return (
			<div>
				<p>{value}</p>
			</div>
		);
	}
}

TodoItem.defaultProps = {};

export default TodoItem;
