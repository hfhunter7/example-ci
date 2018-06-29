import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [ 'hello', 'world' ],
		}

		this.addTodo = this.addTodo.bind(this)
	}

	addTodo(newTodo) {
		this.setState({
			items: this.state.items.concat([ newTodo ])
		})
	}

	render() {
		const { items } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<h1 style={{fontSize: '40px'}}>Hello</h1>
				<TodoInput addTodo={this.addTodo}/>
				<TodoList items={items}/>
			</div>
		);
	}
}

export default App;
