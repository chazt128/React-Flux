import { EventEmitter } from 'events';

import Dispatcher from '../Dispatcher';

var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});
  

class ToDoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [...todoItems];
    }

    getToDos() {
        return this.todos;
    }

    handleActions(action) {
        console.log("store received action: ", action);
        switch(action.type) {
            case "ADD_TODO": {
                this.addItem(action.toDoItem);
                break;
            }
            case "REMOVE_TODO": {
                this.removeItem(action.itemIndex);
                break;
            }
            case "MARK_DONE_TODO": {
                this.markTodoDone(action.itemIndex);
                break;
            }
            default:
                break;
        }
    }

    addItem(toDoItem) {
        this.todos.unshift({
            index: this.todos.length+1, 
            value: toDoItem.newItemValue, 
            done: false
        });
        this.emit("change");
    }
    removeItem(itemIndex) {
        this.todos.splice(itemIndex, 1);
        this.emit("change");
    }
    markTodoDone(itemIndex) {
        let todo = this.todos[itemIndex];
        this.todos.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? this.todos.push(todo) : this.todos.unshift(todo);
        this.emit("change");
    }
}

const toDoStore = new ToDoStore();
Dispatcher.register(toDoStore.handleActions.bind(toDoStore));

export default toDoStore