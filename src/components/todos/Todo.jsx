import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {ReactComponent as Checked} from '../../assets/icons/checked.svg';
import {ReactComponent as Close_button} from '../../assets/icons/close_button.svg';
import './Todo.css';

const Todo = (props) => {
    const todo_classes = `listItem${props.checked ? ' checked' : ''}
    ${props.new_todo ? ' new_todo' : ' todo'}${props.dark && ' dark'||''}`;
    const [newTodoInput, setNewTodoInput] = useState('');

    const updateState = (event) => {
        setNewTodoInput(event.target.value);
    };

    const adding_form = <div className='adding_form'>
        <input type='text' onChange={(e) => updateState(e)} />
        <button onClick={() => props.onAdding(newTodoInput)}>Add</button>
    </div>;

    return <ListGroup.Item className={todo_classes}>
        <div className='todo_checkbox' onClick={props.onClick}>
            {props.checked && <Checked/>}
        </div>
        {!props.new_todo || !props.checked ? props.children : adding_form}
        {!props.new_todo && <Close_button onClick={props.onRemove} className='todo_remove'/>}
    </ListGroup.Item>;
};

export default Todo;