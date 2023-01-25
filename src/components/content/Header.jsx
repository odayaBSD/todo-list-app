import React from 'react';
import {ReactComponent as Light_mode} from '../../assets/icons/light-mode.svg';
import {ReactComponent as Dark_mode} from '../../assets/icons/dark-mode.svg';
import './Header.css';

const Header = (props) => {
    return <header className='header_wrapper'>
        <h2 className='header_text'>TODO</h2>
        <div onClick={props.onChangeState}>{props.dark ? <Light_mode/> : <Dark_mode/>}</div>
    </header>;
};

export default Header;