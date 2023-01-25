import React, { useState } from 'react';
import Todo from '../Todo';
import ListGroup from 'react-bootstrap/ListGroup';

const NewTodo = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked((prevState) => !prevState);
    };

    const addTodo = (todo) => {
        props.addTodo(todo);
        toggleCheck();
    };

    return <ListGroup className='list_group'>
        <Todo checked={isChecked} new_todo={true} dark={props.dark} onClick={toggleCheck} 
            onAdding={(todo) => addTodo(todo)}>Creat a new todo...</Todo>
    </ListGroup>;
};

export default NewTodo;