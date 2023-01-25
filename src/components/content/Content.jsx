import React, { useState } from 'react';
import Header from './Header';
import './Content.css';
import Body from './Body';
import Footer from './Footer';

const Content = () => {
    const [isDark, setIsDark] = useState(true);

    const toggleState = () => {
        setIsDark(prevState => !prevState);
    };

    return <div className='content_wrapper'>
        <Header onChangeState={toggleState} dark={isDark} />
        <Body dark={isDark} />
        <Footer />
    </div>;
};

export default Content;