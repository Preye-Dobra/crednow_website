import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { text } = props;
    return (
        <Link to='/contact' className='xui-text-dc-none xui-btn xui-font-sz-85 xui-px-3 bg-active xui-bdr-rad-half'>{text}</Link>
    );
};

export default Button;