import React, { Component } from 'react';
import TodoForm from './Components/TodoForm.js'
import TodoList from './Components/TodoList.js'
class App extends Component {
  constructor(props) {
		super(props);
		this.state={
			description : '',
			title: '',
			listItems: []
		}
	}
  onTitleChanged(e) {
		let val = e.target.value;

		this.setState({
				title: val
		})
	}
	onDescChanged(e) {
		let value = e.target.value;

		this.setState({
				description: value
		})
	}
  Add () {
    const obj = {
				description: this.state.description,
				title: this.state.title,
			}
    if (this.state.value !== "") {
        this.setState({ listItems: this.state.listItems.concat(obj)})
        this.setState({ value: "" })
    }
}
handleDelete = (id) => {
	const updatedTodos = this.state.listItems.filter((todo) => {
		return todo.id !== id;
	});

	this.setState({
		listItems: updatedTodos
	});
}
handleEdit = (id, newValue) => {
	const editedTodos = [...this.state.listItems].map((todo) => {
		if(todo.id === id) {
			todo.title = newValue;
		}
		return todo.title;
	});

	this.setState({
		listItems: [...this.state.listItems, editedTodos]
	});
}

  render() {
    return (
      <div>
        <TodoForm title={this.state.title} description={this.state.description} item={this.state.listItems}  onTitleChanged={this.onTitleChanged.bind(this)} handelAdd={this.Add.bind(this)} onDescChanged={this.onDescChanged.bind(this)} />
        <TodoList items={this.state.listItems} handleEdit={this.handleEdit.bind(this)} handleDelete={this.handleDelete.bind(this)} />
      </div>
    );
  }
}

export default App;