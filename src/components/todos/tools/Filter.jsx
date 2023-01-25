import React, { useState } from 'react';
import './Filter.css';

const Filter = (props) => {
    const [active, setActive] = useState(Object.values(props.filters)[0]);

    const onFilter = (filter) => {
        props.onFilter(filter);
        setActive(props.filters[filter]);
    };

    const filtering_btns = Object.keys(props.filters).map((filter, id) =>
        <button key={id} className={active == props.filters[filter] && 'active' || ''} 
            onClick={() => onFilter(filter)}>{filter}</button>
    );

    return <div className='filter'>{filtering_btns}</div>;
};

export default Filter;