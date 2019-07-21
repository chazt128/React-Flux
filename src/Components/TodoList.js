import React from 'react';
import ListItem from './TodoListItem';

function TodoList(props) {
    let items = props.items.map((item, index) => {
        return (
            <ListItem key={index} item={item} index={index} removeItem={props.removeItem} markTodoDone={props.markTodoDone} />
        );
    });
    return (
        <ul className="list-group"> {items} </ul>
    );
}
export default TodoList;
