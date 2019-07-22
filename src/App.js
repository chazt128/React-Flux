import React, { Component } from 'react';
import Header from './Components/ToDoHeader';
import List from './Components/TodoList';
import Form from './Components/ToDoForm';
import './App.css';
import ToDoStore from './Stores/ToDoStore';
import * as ToDoActions from './Actions/ToDoActions';

class App extends Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: ToDoStore.getToDos()};
  }

  componentDidMount() {
    ToDoStore.on("change", () => {
      this.setState({todoItems: ToDoStore.getToDos()});
    });
  }

  addItem(todoItem) {
    ToDoActions.addItem(todoItem);
  }
  removeItem(itemIndex) {
    ToDoActions.removeItem(itemIndex);
  }
  markTodoDone(itemIndex) {
    ToDoActions.markTodoDone(itemIndex);
  }

  addAsyncItem() {
    ToDoActions.addAsyncItem();
  }

  render() {
    return (
      <div id="main">
        <Header />
        <Form addItem={this.addItem} addAsyncItem={this.addAsyncItem} />
        <List items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
      </div>
    );
  }
}

export default App;
