import React from 'react';

const Value = (props) => {
    const { heading, text, image } = props;
    return (
        <div className='xui-p-1 xui-bg-white xui-bdr-rad-1'>
            <img src={image} className='xui-w-fluid-100' alt="" />
            <div className='xui-text-center xui-py-1'>
                <h3 className='xui-font-sz-100 color-label xui-font-w-500'>{heading}</h3>
                <p className='color-label xui-font-5 xui-mt-1'>{text}</p>
            </div>
        </div>
    );
};

export default Value;