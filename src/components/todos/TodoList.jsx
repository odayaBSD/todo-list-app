import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Todo from './Todo';
import './TodoList.css';
import { ReactSortable } from "react-sortablejs";
import Filter from './tools/Filter';

const TodoList = (props) => {

    const [cntUnChecked, setCntUnChecked] = useState(props.list?.length || 0);

    useEffect(() => {
        setCntUnChecked(props.list.filter((item) => !item.checked).length);
    }, [props.list]);

    const todos = props.list.map(item => <Todo key={item.id} checked={item.checked} dark={props.dark}
        onClick={() => props.toggleCheck(item)} onRemove={() => props.removeTodo(item)}>
        {item.todo}
    </Todo>);

    const filter_section = <Filter filters={props.filters} onFilter={(filter) => props.filterList(filter)} />;

    return <ListGroup className='list_group'>
        <ReactSortable list={props.list} setList={props.setNewOrder}>
            {todos}
        </ReactSortable>
        <ListGroup.Item className={`listItem footer_list${props.dark&&' dark'||''}`}>
            <label>{cntUnChecked} items left</label>
            { !props.isMobile && filter_section }
            <label onClick={props.onClearCompleted}>Clear Completed</label>
        </ListGroup.Item>
        
    </ListGroup>
};

export default TodoList;