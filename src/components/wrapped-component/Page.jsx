import React from 'react';
import './Page.css';

const Page = (props) => {
    const back = <div className='page_back'>
        <div className='page_image'>
            <div className='page_gradient'></div>
        </div>
    </div>;

    const front = <div className='page_front'>{props.children}</div>

    return <div className='page_wrapper'>
        <>{back}</>
        <>{front}</>
    </div>;
};

export default Page;