import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import NewTodo from '../todos/new-todo/NewTodo';
import './Body.css';
import TodoList from '../todos/TodoList';
import Filter from '../todos/tools/Filter';

const initial_list = [
    { id: 1, todo: 'Complete online Javascript course', checked: true },
    { id: 2, todo: 'Jog around the park 3x', checked: false },
    { id: 3, todo: '10 minutes meditation', checked: false },
    { id: 4, todo: 'Read for 1 hour', checked: false },
    { id: 5, todo: 'Pick up groceries', checked: false },
    { id: 6, todo: 'Complete Todo App on Frontend Mentor', checked: false }
];

const filters = { All: 1, Active: 2, Completed: 3 };

const Body = (props) => {
    const [list, setList] = useState(initial_list);
    const [filteredList, setFilteredList] = useState(list);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        }
        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setFilteredList(list);
    }, [list]);

    useEffect(() => {
        document.body.style.backgroundColor = props.dark ? '#1a1a1a' : "whitesmoke";
    }, [props.dark]);

    const toggleCheck = (todo) => {
        todo.checked = !todo.checked;
        setList((prevState) => {
            return [...prevState];
        });
    };

    const removeTodo = (item) => {
        setList((prevState) => {
            prevState = prevState.filter((todo => todo.id !== item.id));
            return [...prevState];
        });
    };

    const nextIndex = () => {
        if (!list.length) return 1;
        return list[list.length - 1].id + 1;
    };

    const addTodo = (todo) => {
        const newTodo = { id: nextIndex(), todo, checked: false };
        setList((prevState) => {
            return [...prevState, newTodo];
        });
    };

    const clearCompleted = () => {
        setList((prevState) => { return prevState.filter(item => !item.checked); });
    };

    const filterList = (filter) => {
        switch (filter) {
            case Object.keys(filters)[0]:
                setFilteredList(list);
                break;
            case Object.keys(filters)[1]:
                setFilteredList(list.filter(item => !item.checked));
                break;
            case Object.keys(filters)[2]:
                setFilteredList(list.filter(item => item.checked));
                break;
        };
    };

    const reOrder = (list) => {
        setList(list);
    };

    return <div className='body_wrapper'>
        <NewTodo addTodo={(todo) => addTodo(todo)} dark={props.dark} />
        <TodoList list={filteredList} removeTodo={(item) => removeTodo(item)} toggleCheck={(item) => toggleCheck(item)}
            onClearCompleted={clearCompleted} setNewOrder={(list) => reOrder(list)} filters={filters} filterList={filterList} isMobile={isMobile}
            dark={props.dark} />
        {isMobile && <ListGroup className='list_group'>
            <ListGroup.Item className={`listItem${props.dark&&' dark'||''}`}>
                <Filter filters={filters} onFilter={(filter) => filterList(filter)} dark={props.dark} />
            </ListGroup.Item>
        </ListGroup>}
    </div>;
};

export default Body;