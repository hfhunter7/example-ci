import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
	render() {
		const { items } = this.props;
		return (
			<div>
				<ul>
					{
						items.map((item , index) => {
							return <li key={index}><TodoItem value={item}/></li>
						})
					}
				</ul>
			</div>
		);
	}
}

TodoList.defaultProps = {};

export default TodoList;
